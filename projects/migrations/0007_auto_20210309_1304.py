# Generated by Django 3.1.4 on 2021-03-09 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0006_auto_20210308_1559'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='show_ground_truths_first',
            new_name='show_ground_truth_first'
        ),
        migrations.AlterField(
            model_name='project',
            name='show_ground_truth_first',
            field=models.BooleanField(default=True, verbose_name='show ground truth first'),
        ),
    ]
