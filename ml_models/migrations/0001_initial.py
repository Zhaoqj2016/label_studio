# Generated by Django 3.2.23 on 2024-02-16 21:03

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
            name='ModelInterface',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Model name', max_length=500, verbose_name='title')),
                ('description', models.TextField(blank=True, help_text='Model description', null=True, verbose_name='description')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('created_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_models', to=settings.AUTH_USER_MODEL)),
                ('organization', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='model_interfaces', to='organizations.organization')),
            ],
        ),
        migrations.CreateModel(
            name='ThirdPartyModelVersion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Model name', max_length=500, verbose_name='title')),
                ('prompt', models.TextField(help_text='Prompt to execute', verbose_name='prompt')),
                ('provider', models.CharField(choices=[('OpenAI', 'OpenAI')], default='OpenAI', help_text='The model provider to use e.g. OpenAI', max_length=255)),
                ('provider_model_id', models.CharField(help_text='The model ID to use within the given provider, e.g. gpt-3.5', max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('created_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_third_party_model_versions', to=settings.AUTH_USER_MODEL)),
                ('organization', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='third_party_model_versions', to='organizations.organization')),
                ('parent_model', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='model_versions', to='ml_models.modelinterface')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
