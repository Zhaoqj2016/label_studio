# Generated by Django 3.2.13 on 2022-07-21 01:10

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tasks', '0024_manual_migrate_counters_again'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='comment_authors',
            field=models.ManyToManyField(default=None, help_text='Users who wrote comments', null=True, related_name='tasks_with_comments', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='task',
            name='comment_count',
            field=models.IntegerField(db_index=True, default=0, help_text='Number of comments in the task including all annotations', verbose_name='comment count'),
        ),
        migrations.AddField(
            model_name='task',
            name='last_comment_updated_at',
            field=models.DateTimeField(db_index=True, default=None, help_text='When the last comment was updated', null=True, verbose_name='last comment updated at'),
        ),
        migrations.AddField(
            model_name='task',
            name='unresolved_comment_count',
            field=models.IntegerField(db_index=True, default=0, help_text='Number of unresolved comments in the task including all annotations', verbose_name='unresolved comment count'),
        ),
    ]
