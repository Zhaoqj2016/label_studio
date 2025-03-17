# Generated by Django 3.2.24 on 2024-03-14 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ml', '0006_mlbackend_auto_update'),
    ]

    operations = [
        migrations.AddField(
            model_name='mlbackend',
            name='auth_method',
            field=models.CharField(choices=[('NONE', 'None'), ('BASIC_AUTH', 'Basic Auth')], default='NONE', max_length=255),
        ),
        migrations.AddField(
            model_name='mlbackend',
            name='basic_auth_pass',
            field=models.TextField(blank=True, default='', help_text='HTTP Basic Auth password', null=True, verbose_name='basic auth password'),
        ),
        migrations.AddField(
            model_name='mlbackend',
            name='basic_auth_user',
            field=models.TextField(blank=True, default='', help_text='HTTP Basic Auth user', null=True, verbose_name='basic auth user'),
        ),
        migrations.AddField(
            model_name='mlbackend',
            name='extra_params',
            field=models.JSONField(help_text='Any extra parameters passed to the ML Backend during the setup', null=True, verbose_name='extra params'),
        ),
    ]
