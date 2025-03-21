# Generated by Django 3.2.23 on 2024-01-31 16:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('organizations', '0006_alter_organizationmember_deleted_at'),
    ]

    operations = [
        migrations.CreateModel(
            name='ModelProviderConnection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('provider', models.CharField(choices=[('OpenAI', 'OpenAI')], default='OpenAI', max_length=255)),
                ('api_key', models.TextField(blank=True, help_text='Model provider API key', null=True, verbose_name='api_key')),
                ('scope', models.CharField(choices=[('Organization', 'Organization'), ('User', 'User'), ('Model', 'Model')], default='Organization', max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('created_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_model_provider_connections', to=settings.AUTH_USER_MODEL)),
                ('organization', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='model_provider_connections', to='organizations.organization')),
            ],
        ),
    ]
