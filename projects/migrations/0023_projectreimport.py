# Generated by Django 3.2.16 on 2023-05-25 14:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0022_projectimport'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectReimport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('created', 'Created'), ('in_progress', 'In progress'), ('failed', 'Failed'), ('completed', 'Completed')], default='created', max_length=64)),
                ('error', models.TextField(blank=True, null=True)),
                ('task_count', models.IntegerField(default=0)),
                ('annotation_count', models.IntegerField(default=0)),
                ('prediction_count', models.IntegerField(default=0)),
                ('duration', models.IntegerField(default=0)),
                ('file_upload_ids', models.JSONField(default=list)),
                ('files_as_tasks_list', models.BooleanField(default=False)),
                ('found_formats', models.JSONField(default=list)),
                ('data_columns', models.JSONField(default=list)),
                ('traceback', models.TextField(blank=True, null=True)),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reimports', to='projects.project')),
            ],
        ),
    ]
