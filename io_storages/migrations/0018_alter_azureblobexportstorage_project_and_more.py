# Generated by Django 4.2.13 on 2024-08-13 19:51
import logging

from django.db import migrations, models
import django.db.models.deletion
from django.db import connection
from django.conf import settings

logger = logging.getLogger(__name__)

IS_SQLITE = connection.vendor == 'sqlite'


class Migration(migrations.Migration):

    dependencies = [
        ("tasks", "0047_merge_20240318_2210"),
        ("projects", "0026_auto_20231103_0020"),
        ("io_storages", "0017_auto_20240731_1638"),
    ]

    operations = [
        migrations.AlterField(
            model_name="azureblobexportstorage",
            name="project",
            field=models.ForeignKey(
                help_text="A unique integer value identifying this project.",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)ss",
                to="projects.project",
            ),
        ),
        migrations.AlterField(
            model_name="azureblobexportstoragelink",
            name="annotation",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)s",
                to="tasks.annotation",
            ),
        ),
        migrations.AlterField(
            model_name="azureblobimportstorage",
            name="project",
            field=models.ForeignKey(
                help_text="A unique integer value identifying this project.",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)ss",
                to="projects.project",
            ),
        ),
        migrations.AlterField(
            model_name="azureblobimportstoragelink",
            name="task",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)s",
                to="tasks.task",
            ),
        ),
        migrations.AlterField(
            model_name="gcsexportstorage",
            name="project",
            field=models.ForeignKey(
                help_text="A unique integer value identifying this project.",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)ss",
                to="projects.project",
            ),
        ),
        migrations.AlterField(
            model_name="gcsexportstoragelink",
            name="annotation",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)s",
                to="tasks.annotation",
            ),
        ),
        migrations.AlterField(
            model_name="gcsimportstorage",
            name="project",
            field=models.ForeignKey(
                help_text="A unique integer value identifying this project.",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)ss",
                to="projects.project",
            ),
        ),
        migrations.AlterField(
            model_name="gcsimportstoragelink",
            name="task",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)s",
                to="tasks.task",
            ),
        ),
        migrations.AlterField(
            model_name="localfilesexportstorage",
            name="project",
            field=models.ForeignKey(
                help_text="A unique integer value identifying this project.",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)ss",
                to="projects.project",
            ),
        ),
        migrations.AlterField(
            model_name="localfilesexportstoragelink",
            name="annotation",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)s",
                to="tasks.annotation",
            ),
        ),
        migrations.AlterField(
            model_name="localfilesimportstorage",
            name="project",
            field=models.ForeignKey(
                help_text="A unique integer value identifying this project.",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)ss",
                to="projects.project",
            ),
        ),
        migrations.AlterField(
            model_name="localfilesimportstoragelink",
            name="task",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)s",
                to="tasks.task",
            ),
        ),
        migrations.AlterField(
            model_name="redisexportstorage",
            name="project",
            field=models.ForeignKey(
                help_text="A unique integer value identifying this project.",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)ss",
                to="projects.project",
            ),
        ),
        migrations.AlterField(
            model_name="redisexportstoragelink",
            name="annotation",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)s",
                to="tasks.annotation",
            ),
        ),
        migrations.AlterField(
            model_name="redisimportstorage",
            name="project",
            field=models.ForeignKey(
                help_text="A unique integer value identifying this project.",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)ss",
                to="projects.project",
            ),
        ),
        migrations.AlterField(
            model_name="redisimportstoragelink",
            name="task",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)s",
                to="tasks.task",
            ),
        ),
        migrations.AlterField(
            model_name="s3exportstorage",
            name="project",
            field=models.ForeignKey(
                help_text="A unique integer value identifying this project.",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)ss",
                to="projects.project",
            ),
        ),
        migrations.AlterField(
            model_name="s3exportstoragelink",
            name="annotation",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)s",
                to="tasks.annotation",
            ),
        ),
        migrations.AlterField(
            model_name="s3importstorage",
            name="project",
            field=models.ForeignKey(
                help_text="A unique integer value identifying this project.",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)ss",
                to="projects.project",
            ),
        ),
        migrations.AlterField(
            model_name="s3importstoragelink",
            name="task",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="%(app_label)s_%(class)s",
                to="tasks.task",
            ),
        ),
    ]

    def apply(self, project_state, schema_editor, collect_sql=False):
        if IS_SQLITE and not settings.LSE_PROJECT:
            # Migration should be a no op after 0017 but we're forcing the no-op here because
            # The migration thinks there's a difference
            logger.info('Trying to apply default migrations')
            return super().apply(project_state, schema_editor, collect_sql)
        logger.info('Skipping migrations for LSE project or Postgres database')
        return project_state

    def unapply(self, project_state, schema_editor, collect_sql=False):
        if not IS_SQLITE:
            # Same as above. Reverting a noop migration is noop
            return project_state

        return super().unapply(project_state, schema_editor, collect_sql)