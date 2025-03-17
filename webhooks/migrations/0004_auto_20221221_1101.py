# Generated by Django 3.2.16 on 2022-12-21 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webhooks', '0003_alter_webhookaction_action'),
    ]

    operations = [
        migrations.AlterField(
            model_name='webhook',
            name='is_active',
            field=models.BooleanField(default=True, help_text='If value is False the webhook is disabled', verbose_name='is webhook active'),
        ),
        migrations.AlterField(
            model_name='webhook',
            name='send_for_all_actions',
            field=models.BooleanField(default=True, help_text='If value is False - used only for actions from WebhookAction', verbose_name='Use webhook for all actions'),
        ),
        migrations.AlterField(
            model_name='webhook',
            name='send_payload',
            field=models.BooleanField(default=True, help_text='If value is False send only action', verbose_name='does webhook send the payload'),
        ),
    ]
