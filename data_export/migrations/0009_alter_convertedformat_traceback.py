# Generated by Django 3.2.16 on 2023-04-13 23:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data_export', '0008_convertedformat_traceback'),
    ]

    operations = [
        migrations.AlterField(
            model_name='convertedformat',
            name='traceback',
            field=models.TextField(blank=True, help_text='Traceback report in case of errors', null=True),
        ),
    ]
