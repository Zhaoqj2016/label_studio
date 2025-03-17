import json

import pytest
from django.db.models.query import QuerySet
from django.test import TestCase
from django.urls import reverse
from django.utils.http import urlencode
from organizations.models import Organization
from projects.models import Project
from rest_framework.test import APIClient
from tasks.models import Task
from tests.utils import make_project
from users.models import User


@pytest.mark.django_db
def test_update_tasks_counters_and_task_states(business_client):
    project = make_project({}, business_client.user, use_ml_backend=False)

    # CHECK EMPTY LIST
    ids = []
    obj = project._update_tasks_counters_and_task_states(ids, True, True, True)
    assert obj == 0

    tasks = [{'data': {'location': 'London', 'text': 'text A'}}, {'data': {'location': 'London', 'text': 'text B'}}]
    # upload tasks with annotations
    r = business_client.post(
        f'/api/projects/{project.id}/tasks/bulk', data=json.dumps(tasks), content_type='application/json'
    )
    assert r.status_code == 201

    # CHECK LIST with IDS
    ids = list(project.tasks.all().values_list('id', flat=True))
    obj = project._update_tasks_counters_and_task_states(ids, True, True, True)
    assert obj == 0

    # CHECK SET with IDS
    ids = set(project.tasks.all().values_list('id', flat=True))
    obj = project._update_tasks_counters_and_task_states(ids, True, True, True)
    assert obj == 0


@pytest.mark.django_db
def test_project_all_members(business_client):
    project = make_project({}, business_client.user, use_ml_backend=False)
    members = project.all_members

    assert isinstance(members, QuerySet)
    assert isinstance(members.first(), User)


class TestProjectCountsListAPI(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='testuser', email='testuser@email.com', password='testpassword')
        cls.organization = Organization.objects.create(title='testorganization')
        cls.user.active_organization = cls.organization
        cls.user.save()
        cls.project_1 = Project.objects.create(title='Project 1', organization=cls.organization)
        cls.project_2 = Project.objects.create(title='Project 2', organization=cls.organization)
        Task.objects.create(project=cls.project_1, data={'text': 'Task 1'})
        Task.objects.create(project=cls.project_1, data={'text': 'Task 2'})
        Task.objects.create(project=cls.project_2, data={'text': 'Task 3'})

    def get_url(self, **params):
        return f'{reverse("projects:api:project-counts-list")}?{urlencode(params)}'

    def test_get_counts(self):

        client = APIClient()
        client.force_authenticate(user=self.user)
        response = client.get(self.get_url(include='id,task_number,finished_task_number,total_predictions_number'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['count'], 2)
        self.assertEqual(
            response.json()['results'],
            [
                {
                    'id': self.project_1.id,
                    'task_number': 2,
                    'finished_task_number': 0,
                    'total_predictions_number': 0,
                },
                {
                    'id': self.project_2.id,
                    'task_number': 1,
                    'finished_task_number': 0,
                    'total_predictions_number': 0,
                },
            ],
        )
