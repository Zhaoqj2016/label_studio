# Generated by Django 3.2.23 on 2024-06-06 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ml_models', '0005_auto_20240319_1738'),
    ]

    operations = [
        migrations.AlterField(
            model_name='modelrun',
            name='project_subset',
            field=models.CharField(choices=[('All', 'All'), ('HasGT', 'HasGT'), ('Sample', 'Sample')], default='HasGT', max_length=255),
        ),
    ]
