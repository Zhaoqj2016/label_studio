# Generated by Django 3.2.20 on 2023-09-07 01:55

from django.db import migrations, models
from django.conf import settings

IS_SQLITE = settings.DJANGO_DB == settings.DJANGO_DB_SQLITE

if IS_SQLITE:
    from django.db.migrations import AddIndex
else:
    from django.contrib.postgres.operations import AddIndexConcurrently as AddIndex


class Migration(migrations.Migration):
    atomic = IS_SQLITE

    dependencies = [
        ('tasks', '0043_auto_20230825'),
    ]

    operations = [
        AddIndex(
            model_name='annotation',
            index=models.Index(fields=['project', 'id'], name='task_comple_project_c7e507_idx'),
        ),
        AddIndex(
            model_name='task',
            index=models.Index(fields=['project', 'id'], name='task_project_7b1c80_idx'),
        ),
    ]
