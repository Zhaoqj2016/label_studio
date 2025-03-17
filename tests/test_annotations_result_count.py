from django.test import TestCase
from projects.models import Project
from tasks.models import Annotation, Task


class AnnotationResultCountTests(TestCase):
    def setUp(self):
        self.project = Project.objects.create()
        self.task = Task.objects.create(project=self.project, data={'text': 'This is task'})

    def test_empty_result_gives_zero_count(self):
        """Test that an empty result gives a count of 0"""
        annotation = Annotation.objects.create(task=self.task, project=self.project, result=[])
        self.assertEqual(annotation.result_count, 0)

    def test_none_result_gives_zero_count(self):
        """Test that None result gives a count of 0"""
        annotation = Annotation.objects.create(task=self.task, project=self.project, result=None)
        self.assertEqual(annotation.result_count, 0)

    def test_unique_ids_counted_correctly(self):
        """Test that only unique IDs are counted"""
        annotation = Annotation.objects.create(
            task=self.task,
            project=self.project,
            result=[
                {'id': '1', 'value': 'test1'},
                {'id': '2', 'value': 'test2'},
                {'id': '1', 'value': 'test3'},  # Duplicate ID
            ],
        )
        self.assertEqual(annotation.result_count, 2)  # Should only count unique IDs

    def test_missing_ids_skipped(self):
        """Test that results without IDs are handled gracefully"""
        annotation = Annotation.objects.create(
            task=self.task,
            project=self.project,
            result=[{'id': '1', 'value': 'test1'}, {'value': 'test2'}, {'id': '3', 'value': 'test3'}],  # Missing ID
        )
        self.assertEqual(annotation.result_count, 3)

    def test_update_changes_count(self):
        """Test that updating the result updates the count"""
        annotation = Annotation.objects.create(
            task=self.task, project=self.project, result=[{'id': '1', 'value': 'test1'}]
        )
        self.assertEqual(annotation.result_count, 1)

        annotation.result = [{'id': '1', 'value': 'test1'}, {'id': '2', 'value': 'test2'}]
        annotation.save()
        self.assertEqual(annotation.result_count, 2)
