/**
 * 国际化辅助函数
 */

// 获取当前语言
export const getCurrentLanguage = () => {
  // 优先使用 window.LANGUAGE_CODE
  if (window.LANGUAGE_CODE) {
    return window.LANGUAGE_CODE.toLowerCase();
  }
  
  // 尝试从 HTML 的 lang 属性获取
  const htmlLang = document.documentElement.lang;
  if (htmlLang) {
    return htmlLang.toLowerCase();
  }
  
  // 尝试从 APP_SETTINGS 获取
  if (window.APP_SETTINGS && window.APP_SETTINGS.language) {
    return window.APP_SETTINGS.language.toLowerCase();
  }
  
  // 默认使用中文
  return 'zh-hans';
};

// 简体中文翻译
const zhHansTranslations = {
  // 通用
  'Cancel': '取消',
  'Save': '保存',
  'Delete': '删除',
  'Edit': '编辑',
  'Add': '添加',
  'Remove': '移除',
  'Search': '搜索',
  'Filter': '筛选',
  'Loading': '加载中',
  'Submit': '提交',
  'Close': '关闭',
  'Next': '下一步',
  'Previous': '上一步',
  'Back': '返回',
  'Done': '完成',
  'Yes': '是',
  'No': '否',
  'OK': '确定',
  'Confirm': '确认',
  
  // 导航
  'Projects': '项目',
  'Tasks': '任务',
  'Annotations': '标注',
  'Dashboard': '仪表盘',
  'Settings': '设置',
  'Organization': '组织',
  'Profile': '个人资料',
  'Logout': '退出登录',
  'Login': '登录',
  'Sign Up': '注册',
  
  // 项目相关
  'Create Project': '创建项目',
  'Import': '导入',
  'Export': '导出',
  'Project Name': '项目名称',
  'Description': '描述',
  'Created': '创建时间',
  'Last Updated': '最后更新',
  'Members': '成员',
  'Labels': '标签',
  'Instructions': '说明',
  'Data Manager': '数据管理',
  
  // 任务相关
  'Task ID': '任务 ID',
  'Completed': '已完成',
  'In Progress': '进行中',
  'Pending': '待处理',
  'Skipped': '已跳过',
  'Rejected': '已拒绝',
  'Accepted': '已接受',
  'Total': '总计',
  
  // 标注相关
  'Label': '标签',
  'Region': '区域',
  'Regions': '区域',
  'Relations': '关系',
  'Comments': '评论',
  'History': '历史',
  
  // 设置相关
  'General': '常规',
  'Interface': '界面',
  'Account': '账户',
  'Password': '密码',
  'API': 'API',
  'Storage': '存储',
  'Webhooks': 'Webhooks',
  'Integrations': '集成',
  
  // 错误信息
  'Error': '错误',
  'Not Found': '未找到',
  'Unauthorized': '未授权',
  'Forbidden': '禁止访问',
  'Server Error': '服务器错误',
  'Connection Error': '连接错误',
  'Please try again': '请重试',
  
  // 登录相关
  'Email': '邮箱',
  'Username': '用户名',
  'Password': '密码',
  'Forgot Password?': '忘记密码？',
  'Remember Me': '记住我',
  'Sign In': '登录',
  'Sign Out': '退出',
  'Register': '注册',
  
  // 导入导出
  'Import Data': '导入数据',
  'Export Data': '导出数据',
  'Upload Files': '上传文件',
  'Download': '下载',
  'Format': '格式',
  'Source': '来源',
  'Destination': '目标',
  
  // 其他
  'Documentation': '文档',
  'Help': '帮助',
  'Support': '支持',
  'Feedback': '反馈',
  'Version': '版本',
  'License': '许可证',
  'Terms': '条款',
  'Privacy': '隐私',
};

// 翻译函数
export const t = (text) => {
  if (!text) return '';
  
  const lang = getCurrentLanguage();
  
  // 处理各种中文语言代码格式
  const isChineseLanguage = 
    lang === 'zh-hans' || 
    lang === 'zh_hans' || 
    lang === 'zh-cn' || 
    lang === 'zh_cn' || 
    lang === 'zh';
  
  if (isChineseLanguage && zhHansTranslations[text]) {
    return zhHansTranslations[text];
  }
  
  return text;
};

// 初始化国际化
export const initI18n = () => {
  // 添加翻译函数到全局对象
  window.t = t;
  
  // 立即执行翻译
  translateDOM();
  
  // 设置多个超时，确保动态加载的内容也被翻译
  setTimeout(translateDOM, 500);
  setTimeout(translateDOM, 1000);
  setTimeout(translateDOM, 2000);
  setTimeout(translateDOM, 5000);
  
  // 监听 DOM 变化，自动翻译新添加的元素
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
      let shouldTranslate = false;
      
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldTranslate = true;
        }
      });
      
      if (shouldTranslate) {
        translateDOM();
      }
    });
    
    // 开始观察 body 元素及其子元素的变化
    setTimeout(() => {
      if (document.body) {
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    }, 1000);
  }
};

// 翻译 DOM 元素
export const translateDOM = () => {
  // 翻译所有带有 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });
  
  // 翻译按钮
  document.querySelectorAll('button').forEach(el => {
    if (el.textContent && !el.hasAttribute('data-no-i18n')) {
      el.textContent = t(el.textContent.trim());
    }
  });
  
  // 翻译标题
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
    if (el.textContent && !el.hasAttribute('data-no-i18n')) {
      el.textContent = t(el.textContent.trim());
    }
  });
  
  // 翻译链接
  document.querySelectorAll('a').forEach(el => {
    if (el.textContent && !el.hasAttribute('data-no-i18n')) {
      el.textContent = t(el.textContent.trim());
    }
  });
  
  // 翻译标签
  document.querySelectorAll('label').forEach(el => {
    if (el.textContent && !el.hasAttribute('data-no-i18n')) {
      el.textContent = t(el.textContent.trim());
    }
  });
  
  // 翻译占位符
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    if (el.placeholder && !el.hasAttribute('data-no-i18n')) {
      el.placeholder = t(el.placeholder);
    }
  });
};

// 导出默认对象
export default {
  t,
  getCurrentLanguage,
  initI18n,
  translateDOM
}; 