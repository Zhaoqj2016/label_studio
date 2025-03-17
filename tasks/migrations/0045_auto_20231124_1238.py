# Generated by Django 3.2.20 on 2023-11-24 12:38

import logging
from django.db import migrations
from core.redis import start_job_async_or_sync

logger = logging.getLogger(__name__)

def async_index_creation():
    from django.db import connection
    create_index_sql_1 = (
        'CREATE INDEX CONCURRENTLY IF NOT EXISTS task_comple_project_0bc0be_idx '
        'ON task_completion (project_id, completed_by_id);'
    )

    create_index_sql_2 = (
        'CREATE INDEX CONCURRENTLY IF NOT EXISTS task_comple_task_id_a6bdec_idx '
        'ON task_completion (task_id, id);'
    )

    with connection.schema_editor(atomic=False) as schema_editor:
        schema_editor.execute(create_index_sql_1)
        schema_editor.execute(create_index_sql_2)
        logger.info('Indexes created concurrently on annotation model')

def forwards(apps, schema_editor):
    database_vendor = schema_editor.connection.vendor
    if database_vendor != 'postgresql':
        logger.info(f'Database vendor: {database_vendor}')
        logger.info('Skipping async index creation for non-PostgreSQL databases')
        return

    # Schedule the index creation job asynchronously using RQ worker
    start_job_async_or_sync(async_index_creation)

def backwards(apps, schema_editor):
    pass

class Migration(migrations.Migration):
    atomic = False

    dependencies = [
        ('tasks', '0044_auto_20230907_0155'),
    ]

    operations = [
        migrations.RunPython(forwards, backwards)
    ]

