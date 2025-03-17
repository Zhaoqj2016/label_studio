"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
# Generated by Django 3.1.4 on 2021-03-03 07:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    replaces = [('data_manager', '0001_initial'), ('data_manager', '0002_auto_20210201_1316'), ('data_manager', '0003_filter_index'), ('data_manager', '0004_auto_20210204_1231'), ('data_manager', '0005_view_user')]

    initial = True

    dependencies = [
        ('projects', '0001_squashed_0065_auto_20210223_2014'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Filter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('column', models.CharField(help_text='Field name', max_length=1024, verbose_name='column')),
                ('type', models.CharField(help_text='Field type', max_length=1024, verbose_name='type')),
                ('operator', models.CharField(help_text='Filter operator', max_length=1024, verbose_name='operator')),
                ('value', models.JSONField(default=dict, help_text='Filter value', null=True, verbose_name='value')),
                ('index', models.IntegerField(default=0, help_text='To keep filter order', verbose_name='index')),
            ],
        ),
        migrations.CreateModel(
            name='FilterGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('conjunction', models.CharField(help_text='Type of conjunction', max_length=1024, verbose_name='conjunction')),
                ('filters', models.ManyToManyField(help_text='Connected filters', related_name='filter_groups', to='data_manager.Filter')),
            ],
        ),
        migrations.CreateModel(
            name='View',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(default=dict, help_text='Custom view data', null=True, verbose_name='data')),
                ('project', models.ForeignKey(help_text='Project ID', on_delete=django.db.models.deletion.CASCADE, related_name='views', to='projects.project')),
                ('ordering', models.JSONField(default=dict, help_text='Ordering parameters', null=True, verbose_name='ordering')),
                ('filter_group', models.ForeignKey(help_text='Groups of filters', null=True, on_delete=django.db.models.deletion.SET_NULL, to='data_manager.filtergroup')),
                ('selected_items', models.JSONField(default=dict, help_text='Selected items', null=True, verbose_name='selected items')),
                ('user', models.ForeignKey(help_text='User who made this view', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='views', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
