"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
from faker import Faker

# 创建一个使用中文语言的 faker 实例
zh_faker = Faker('zh_CN')

# 导出常用的方法
def name():
    """生成中文名字"""
    return zh_faker.name()

def address():
    """生成中文地址"""
    return zh_faker.address()

def company():
    """生成中文公司名"""
    return zh_faker.company()

def text():
    """生成中文文本"""
    return zh_faker.text()

def phone_number():
    """生成中文手机号"""
    return zh_faker.phone_number()

def email():
    """生成电子邮件"""
    return zh_faker.email()

def get_faker():
    """获取中文 faker 实例"""
    return zh_faker 