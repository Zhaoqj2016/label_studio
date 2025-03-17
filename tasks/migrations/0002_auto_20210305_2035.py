# Generated by Django 3.1.4 on 2021-03-05 20:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data_import', '0001_initial'),
        ('tasks', '0001_squashed_0041_taskcompletionhistory_was_cancelled'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='file_upload',
            field=models.ForeignKey(blank=True, help_text='Uploaded file used as data source for this task', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tasks', to='data_import.fileupload'),
        ),
    ]
