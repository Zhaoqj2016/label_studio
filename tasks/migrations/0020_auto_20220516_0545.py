# Generated by Django 3.1.14 on 2022-05-16 05:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0019_merge_20220512_2038'),
    ]

    operations = [
        migrations.AddIndex(
            model_name='annotation',
            index=models.Index(fields=['id', 'task'], name='task_comple_id_653858_idx'),
        ),
        migrations.AddIndex(
            model_name='annotation',
            index=models.Index(fields=['task', 'was_cancelled'], name='task_comple_task_id_8072c3_idx'),
        ),
    ]
