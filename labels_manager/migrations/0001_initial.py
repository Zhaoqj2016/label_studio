# Generated by Django 3.1.14 on 2022-01-31 09:56

import django.contrib.postgres.fields
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projects', '0015_merge_20220117_0749'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('organizations', '0003_auto_20211010_1339'),
    ]

    operations = [
        migrations.CreateModel(
            name='Label',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, help_text='Time of label creation', verbose_name='Created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated at')),
                ('value', models.JSONField(verbose_name='value')),
                ('title', models.CharField(help_text='Label title', max_length=2048, verbose_name='Title')),
                ('description', models.TextField(blank=True, help_text='Label description', null=True, verbose_name='Description')),
                ('approved', models.BooleanField(default=False, help_text='Status of label')),
                ('approved_by', models.ForeignKey(help_text='User who approved this label', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='labels_approved', to=settings.AUTH_USER_MODEL)),
                ('created_by', models.ForeignKey(help_text='User who made this label', on_delete=django.db.models.deletion.CASCADE, related_name='labels', to=settings.AUTH_USER_MODEL)),
                ('organization', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='labels', to='organizations.organization')),
            ],
        ),
        migrations.CreateModel(
            name='LabelLink',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('from_name', models.CharField(help_text='Label title', max_length=2048, verbose_name='Title')),
                ('label', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='links', to='labels_manager.label')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.project')),
            ],
        ),
        migrations.AddField(
            model_name='label',
            name='projects',
            field=models.ManyToManyField(through='labels_manager.LabelLink', to='projects.Project'),
        ),
        migrations.AddConstraint(
            model_name='label',
            constraint=models.UniqueConstraint(fields=('title', 'organization'), name='unique_title'),
        ),
    ]
