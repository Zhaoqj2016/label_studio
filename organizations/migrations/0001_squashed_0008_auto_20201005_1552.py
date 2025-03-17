"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
# Generated by Django 3.1.4 on 2021-03-03 07:31

import core.utils.common
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


def rename_disabled_to_off0006(apps, schema_editor):
    OrganizationMember = apps.get_model('organizations', 'OrganizationMember')
    OrganizationMember.objects.filter(role="Disabled").update(role="Off")

    migrations.AlterField(
        model_name='organizationmember',
        name='role',
        field=models.CharField(
            choices=[('Administrator', 'Administrator'), ('Manager', 'Manager'), ('Coordinator', 'Coordinator'),
                     ('Collaborator', 'Collaborator'), ('Not Activated', 'Not Activated'), ('Off', 'Off')],
            default='Not Activated', help_text='Organization membership role', max_length=100),
    )


def rename_disabled_to_off0007(apps, schema_editor):
    OrganizationMember = apps.get_model('organizations', 'OrganizationMember')
    OrganizationMember.objects.filter(role="Off").update(role="Deactivated")

    migrations.AlterField(
        model_name='organizationmember',
        name='role',
        field=models.CharField(
            choices=[('Administrator', 'Administrator'), ('Manager', 'Manager'), ('Coordinator', 'Coordinator'),
                     ('Collaborator', 'Collaborator'), ('Not Activated', 'Not Activated'),
                     ('Deactivated', 'Deactivated')],
            default='Not Activated', help_text='Organization membership role', max_length=100),
    )


class Migration(migrations.Migration):

    replaces = [('organizations', '0001_initial'), ('organizations', '0002_organization_token'), ('organizations', '0003_auto_20200418_0202'), ('organizations', '0004_auto_20200501_1751'), ('organizations', '0005_auto_20200811_2313'), ('organizations', '0006_auto_20200923_1423'), ('organizations', '0007_auto_20200923_2200'), ('organizations', '0008_auto_20201005_1552')]

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=1000, verbose_name='organization title')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('created_by', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='organization', to=settings.AUTH_USER_MODEL, verbose_name='created_by')),
            ],
            options={
                'db_table': 'organization',
            },
        ),
        migrations.CreateModel(
            name='OrganizationMember',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(choices=[('Administrator', 'Administrator'), ('Manager', 'Manager'), ('Coordinator', 'Coordinator'), ('Collaborator', 'Collaborator'), ('Not Activated', 'Not Activated'), ('Disabled', 'Disabled')], default='Not Activated', max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('organization', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='organizations.organization')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='om_through', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='organization',
            name='users',
            field=models.ManyToManyField(related_name='organizations', through='organizations.OrganizationMember', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='organization',
            name='token',
            field=models.CharField(blank=True, default=core.utils.common.create_hash, max_length=256, null=True, unique=True, verbose_name='token'),
        ),
        migrations.AlterField(
            model_name='organizationmember',
            name='organization',
            field=models.ForeignKey(help_text='Organization ID', on_delete=django.db.models.deletion.CASCADE, to='organizations.organization'),
        ),
        migrations.AlterField(
            model_name='organizationmember',
            name='role',
            field=models.CharField(choices=[('Administrator', 'Administrator'), ('Manager', 'Manager'), ('Coordinator', 'Coordinator'), ('Collaborator', 'Collaborator'), ('Not Activated', 'Not Activated'), ('Disabled', 'Disabled')], default='Not Activated', help_text='Organization membership role', max_length=100),
        ),
        migrations.AlterField(
            model_name='organizationmember',
            name='user',
            field=models.ForeignKey(help_text='User ID', on_delete=django.db.models.deletion.CASCADE, related_name='om_through', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='organization',
            name='default_role',
            field=models.CharField(default='Not Activated', help_text='Default membership role for invited users', max_length=100),
        ),
        migrations.RunPython(
            code=rename_disabled_to_off0006,
        ),
        migrations.RunPython(
            code=rename_disabled_to_off0007,
        ),
        migrations.AlterField(
            model_name='organizationmember',
            name='role',
            field=models.CharField(choices=[('Administrator', 'Administrator'), ('Manager', 'Manager'), ('Coordinator', 'Coordinator'), ('Collaborator', 'Collaborator'), ('Not Activated', 'Not Activated'), ('Deactivated', 'Deactivated')], default='Not Activated', help_text='Organization membership role', max_length=100),
        ),
    ]
