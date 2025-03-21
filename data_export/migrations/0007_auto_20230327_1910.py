# Generated by Django 3.2.16 on 2023-03-27 19:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('organizations', '0003_auto_20211010_1339'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('projects', '0021_merge_20230215_1943'),
        ('data_export', '0006_convertedformat'),
    ]

    operations = [
        migrations.AddField(
            model_name='convertedformat',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, help_text='Creation time', null=True, verbose_name='created at'),
        ),
        migrations.AddField(
            model_name='convertedformat',
            name='created_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='created by'),
        ),
        migrations.AddField(
            model_name='convertedformat',
            name='finished_at',
            field=models.DateTimeField(default=None, help_text='Complete or fail time', null=True, verbose_name='finished at'),
        ),
        migrations.AddField(
            model_name='convertedformat',
            name='organization',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='export_conversions', to='organizations.organization'),
        ),
        migrations.AddField(
            model_name='convertedformat',
            name='project',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='export_conversions', to='projects.project'),
        ),
        migrations.AddField(
            model_name='convertedformat',
            name='updated_at',
            field=models.DateTimeField(auto_now_add=True, help_text='Updated time', null=True, verbose_name='updated at'),
        ),
    ]
