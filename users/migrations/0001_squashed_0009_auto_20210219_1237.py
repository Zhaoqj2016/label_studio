"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
# Generated by Django 3.1.4 on 2021-02-25 13:48

from django.db import migrations, models
import django.utils.timezone
import users.functions
import users.models

from rest_framework.authtoken.models import Token


def add_tokens(apps, schema_editor):
    User = apps.get_model('users', 'User')
    all_users = User.objects.all()

    for user_one in all_users:
        if not hasattr(user_one, 'auth_token'):
            Token.objects.create(user=user_one)


class Migration(migrations.Migration):
    replaces = [('users', '0001_initial'), ('users', '0002_user_last_activity'), ('users', '0003_add_tokens_to_all'),
                ('users', '0004_add_removed_user'), ('users', '0005_auto_20200731_1943'),
                ('users', '0006_auto_20201015_1553'), ('users', '0007_user_activity_at'),
                ('users', '0008_auto_20210211_1606'), ('users', '0009_auto_20210219_1237')]

    initial = True

    dependencies = [
        ('auth', '0009_alter_user_last_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False,
                                                     help_text='Designates that this user has all permissions without explicitly assigning them.',
                                                     verbose_name='superuser status')),
                ('username', models.CharField(blank=True, max_length=12, verbose_name='username')),
                ('email', models.EmailField(blank=True, max_length=254, unique=True, verbose_name='email address')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False,
                                                 help_text='Designates whether the user can log into this admin site.',
                                                 verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True,
                                                  help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.',
                                                  verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('groups', models.ManyToManyField(blank=True,
                                                  help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
                                                  related_name='user_set', related_query_name='user', to='auth.Group',
                                                  verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.',
                                                            related_name='user_set', related_query_name='user',
                                                            to='auth.Permission', verbose_name='user permissions')),
                ('last_activity',
                 models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='last activity')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'db_table': 'htx_user',
            },
        ),
        migrations.RunPython(add_tokens),
        # migrations.RunPython(add_users),  # TODO: flag:ent

        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(blank=True, max_length=100, verbose_name='username'),
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=256, verbose_name='first name'),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(blank=True, max_length=256, verbose_name='last name'),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(blank=True, max_length=256, verbose_name='username'),
        ),
        migrations.AddField(
            model_name='user',
            name='activity_at',
            field=models.DateTimeField(auto_now=True, verbose_name='last completion activity'),
        ),
        migrations.AddField(
            model_name='user',
            name='phone',
            field=models.CharField(blank=True, max_length=256, verbose_name='phone'),
        ),
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(blank=True, upload_to=users.functions.hash_upload),
        ),
    ]
