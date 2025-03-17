"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
# Generated by Django 3.1.4 on 2021-02-23 07:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projects', '0001_squashed_0065_auto_20210223_2014'),
    ]

    operations = [
        migrations.CreateModel(
            name='MLBackend',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', models.CharField(choices=[('CO', 'Connected'), ('DI', 'Disconnected'), ('ER', 'Error'), ('TR', 'Training'), ('PR', 'Predicting')], default='DI', max_length=2)),
                ('url', models.TextField(help_text='Model server URL', verbose_name='url')),
                ('error_message', models.TextField(blank=True, help_text='Error message in error state', null=True, verbose_name='url')),
                ('title', models.TextField(blank=True, default='default', help_text='Machine Learning backend title', null=True, verbose_name='title')),
                ('description', models.TextField(blank=True, default='', help_text='Machine Learning backend description', null=True, verbose_name='description')),
                ('model_version', models.TextField(blank=True, default='', help_text='Current model version associated with this ML backend', null=True, verbose_name='model version')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ml_backends', to='projects.project')),
            ],
        ),
        migrations.CreateModel(
            name='MLBackendTrainJob',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_id', models.CharField(max_length=128)),
                ('model_version', models.TextField(blank=True, help_text='Model version this job associated with', null=True, verbose_name='model version')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('ml_backend', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='train_jobs', to='ml.mlbackend')),
            ],
        ),
        migrations.CreateModel(
            name='MLBackendPredictionJob',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_id', models.CharField(max_length=128)),
                ('model_version', models.TextField(blank=True, help_text='Model version this job associated with', null=True, verbose_name='model version')),
                ('batch_size', models.PositiveSmallIntegerField(default=100, help_text='Number of tasks processed per batch', verbose_name='batch size')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('ml_backend', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='prediction_jobs', to='ml.mlbackend')),
            ],
        ),
    ]
