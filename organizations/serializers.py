"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
from collections import OrderedDict

import ujson as json
from drf_dynamic_fields import DynamicFieldsMixin
from organizations.models import Organization, OrganizationMember
from rest_framework import serializers
from users.serializers import UserSerializer


class OrganizationIdSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ['id', 'title', 'contact_info', 'created_at']


class OrganizationSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = '__all__'


class UserSerializerWithProjects(UserSerializer):
    created_projects = serializers.SerializerMethodField(read_only=True)
    contributed_to_projects = serializers.SerializerMethodField(read_only=True)

    def get_created_projects(self, user):
        if not self.context.get('contributed_to_projects', False):
            return None

        current_user = self.context['request'].user
        return user.created_projects.filter(organization=current_user.active_organization).values('id', 'title')

    def get_contributed_to_projects(self, user):
        if not self.context.get('contributed_to_projects', False):
            return None

        current_user = self.context['request'].user
        projects = user.annotations.filter(project__organization=current_user.active_organization).values(
            'project__id', 'project__title'
        )
        contributed_to = [(json.dumps({'id': p['project__id'], 'title': p['project__title']}), 0) for p in projects]
        contributed_to = OrderedDict(contributed_to)  # remove duplicates without ordering losing
        return [json.loads(key) for key in contributed_to]

    class Meta(UserSerializer.Meta):
        fields = UserSerializer.Meta.fields + ('created_projects', 'contributed_to_projects')


class NewUserSerializer(UserSerializer):
    created_projects = serializers.SerializerMethodField(read_only=True)
    contributed_to_projects = serializers.SerializerMethodField(read_only=True)

    def get_created_projects(self, user):
        if not self.context.get('contributed_to_projects', False):
            return None

        current_user = self.context['request'].user
        return user.created_projects.filter(organization=current_user.active_organization).values('id', 'title')

    def get_contributed_to_projects(self, user):
        if not self.context.get('contributed_to_projects', False):
            return None

        current_user = self.context['request'].user
        projects = user.annotations.filter(project__organization=current_user.active_organization).values(
            'project__id', 'project__title'
        )
        contributed_to = [(json.dumps({'id': p['project__id'], 'title': p['project__title']}), 0) for p in projects]
        contributed_to = OrderedDict(contributed_to)  # remove duplicates without ordering losing
        return [json.loads(key) for key in contributed_to]

    class Meta(UserSerializer.Meta):
        all_fields = list(UserSerializer.Meta.fields)
        if 'org_membership' in all_fields:
            del all_fields[all_fields.index('org_membership')]
        fields = all_fields + ['created_projects', 'contributed_to_projects']


class OrganizationMemberUserSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    """Adds all user properties"""

    user = UserSerializerWithProjects()

    class Meta:
        model = OrganizationMember
        fields = ['id', 'organization', 'user']


class NewOrganizationMemberUserSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    """Adds all user properties"""

    user = NewUserSerializer()

    class Meta:
        model = OrganizationMember
        fields = ['id', 'organization', 'user']


class OrganizationMemberSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    annotations_count = serializers.SerializerMethodField(read_only=True)
    contributed_projects_count = serializers.SerializerMethodField(read_only=True)

    def get_annotations_count(self, member):
        org = self.context.get('organization')
        return member.user.annotations.filter(project__organization=org).count()

    def get_contributed_projects_count(self, member):
        org = self.context.get('organization')
        return member.user.annotations.filter(project__organization=org).values('project').distinct().count()

    class Meta:
        model = OrganizationMember
        fields = ['user', 'organization', 'contributed_projects_count', 'annotations_count', 'created_at']


class OrganizationInviteSerializer(serializers.Serializer):
    token = serializers.CharField(required=False)
    invite_url = serializers.CharField(required=False)


class OrganizationsParamsSerializer(serializers.Serializer):
    active = serializers.BooleanField(required=False, default=False)
    contributed_to_projects = serializers.BooleanField(required=False, default=False)
