// 添加全局类型声明
declare global {
  interface Window {
    LANGUAGE_CODE?: string;
    LANGUAGE_NAME?: string;
    APP_SETTINGS?: {
      language?: string;
      [key: string]: any;
    };
    t?: (text: string) => string;
  }
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerAnalytics } from '@humansignal/core';

// 导入翻译脚本
import './utils/auto-translate';

// 设置语言
const htmlLang = document.documentElement.lang;
if (htmlLang) {
  window.LANGUAGE_CODE = htmlLang.toLowerCase();
} else if (window.APP_SETTINGS?.language) {
  window.LANGUAGE_CODE = window.APP_SETTINGS.language.toLowerCase();
} else {
  window.LANGUAGE_CODE = 'zh-hans';
}

// 设置 HTML 的 lang 属性
document.documentElement.lang = window.LANGUAGE_CODE;

// 注册分析
registerAnalytics();

import "./app/App";
import "./utils/service-worker";
