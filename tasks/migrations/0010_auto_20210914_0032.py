# Generated by Django 3.1.13 on 2021-09-14 00:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0009_auto_20210914_0020'),
    ]

    operations = [
        migrations.AddIndex(
            model_name='task',
            index=models.Index(fields=['overlap'], name='task_overlap_6a196e_idx'),
        ),
        migrations.AddIndex(
            model_name='task',
            index=models.Index(fields=['is_labeled'], name='task_is_labe_215a18_idx'),
        ),
    ]
