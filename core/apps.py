"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
from django.apps import AppConfig
from django.conf import settings
from django.utils import translation
import logging

logger = logging.getLogger(__name__)


class CoreConfig(AppConfig):
    name = 'core'

    def ready(self):
        """
        初始化应用程序
        """
        try:
            # 设置 faker 库的默认语言
            if hasattr(settings, 'FAKER_LOCALE'):
                from faker import Faker
                Faker._DEFAULT_LOCALE = settings.FAKER_LOCALE
                logger.info(f"设置 Faker 默认语言为: {settings.FAKER_LOCALE}")
            
            # 强制设置Django的默认语言为中文
            translation.activate('zh-hans')
            logger.info("已设置Django默认语言为: zh-hans")
        except Exception as e:
            logger.error(f"设置语言时出错: {str(e)}")
        except ImportError:
            pass 