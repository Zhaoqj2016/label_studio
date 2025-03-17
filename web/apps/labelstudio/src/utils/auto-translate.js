/**
 * 自动翻译脚本
 * 在页面加载后自动翻译界面
 */

// 确保语言设置正确
if (!window.LANGUAGE_CODE) {
  // 尝试从 HTML 的 lang 属性获取
  const htmlLang = document.documentElement.lang;
  if (htmlLang) {
    window.LANGUAGE_CODE = htmlLang.toLowerCase();
  } 
  // 尝试从 APP_SETTINGS 获取
  else if (window.APP_SETTINGS && window.APP_SETTINGS.language) {
    window.LANGUAGE_CODE = window.APP_SETTINGS.language.toLowerCase();
  }
  // 默认使用中文
  else {
    window.LANGUAGE_CODE = 'zh-hans';
  }
  
  // 设置 HTML 的 lang 属性
  document.documentElement.lang = window.LANGUAGE_CODE;
}

// 翻译函数
if (!window.t) {
  window.t = function(text) {
    if (!text) return '';
    
    const translations = {
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
      'Sign in': '登录',
      'Username': '用户名',
      'Password': '密码',
      'Remember Me': '记住我',
      'Forgot password?': '忘记密码？',
      'Sign in with': '使用以下方式登录',
      'Email': '邮箱',
      'First Name': '名字',
      'Last Name': '姓氏',
      
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
    };
    
    // 处理各种中文语言代码格式
    const lang = window.LANGUAGE_CODE || 'zh-hans';
    const isChineseLanguage = 
      lang === 'zh-hans' || 
      lang === 'zh_hans' || 
      lang === 'zh-cn' || 
      lang === 'zh_cn' || 
      lang === 'zh';
    
    if (isChineseLanguage && translations[text]) {
      return translations[text];
    }
    
    return text;
  };
}

// 翻译 DOM 元素
function translateDOM() {
  console.log("执行翻译，当前语言：", window.LANGUAGE_CODE);
  
  // 强制设置语言为中文
  if (!window.LANGUAGE_CODE || window.LANGUAGE_CODE === '') {
    window.LANGUAGE_CODE = 'zh-hans';
    console.log("已强制设置语言为中文");
  }
  
  // 翻译按钮
  document.querySelectorAll('button').forEach(function(el) {
    if (el.textContent && !el.hasAttribute('data-no-i18n')) {
      el.textContent = window.t(el.textContent.trim());
    }
  });
  
  // 翻译标题
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(el) {
    if (el.textContent && !el.hasAttribute('data-no-i18n')) {
      el.textContent = window.t(el.textContent.trim());
    }
  });
  
  // 翻译链接
  document.querySelectorAll('a').forEach(function(el) {
    if (el.textContent && !el.hasAttribute('data-no-i18n')) {
      el.textContent = window.t(el.textContent.trim());
    }
  });
  
  // 翻译标签
  document.querySelectorAll('label').forEach(function(el) {
    if (el.textContent && !el.hasAttribute('data-no-i18n')) {
      el.textContent = window.t(el.textContent.trim());
    }
  });
  
  // 翻译占位符
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(function(el) {
    if (el.placeholder && !el.hasAttribute('data-no-i18n')) {
      el.placeholder = window.t(el.placeholder.trim());
    }
  });
  
  // 翻译带有 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = window.t(key);
    }
  });
  
  // 翻译表单元素
  document.querySelectorAll('input[type="submit"], input[type="button"]').forEach(function(el) {
    if (el.value && !el.hasAttribute('data-no-i18n')) {
      el.value = window.t(el.value.trim());
    }
  });
  
  console.log("翻译完成");
}

// 在页面加载后自动翻译
document.addEventListener('DOMContentLoaded', function() {
  console.log("页面加载完成，准备翻译");
  
  // 初始翻译
  translateDOM();
  
  // 每隔一段时间重新翻译，以处理动态加载的内容
  setInterval(translateDOM, 2000);
});

// 监听 DOM 变化，自动翻译新添加的元素
if (typeof MutationObserver !== 'undefined') {
  const observer = new MutationObserver(function(mutations) {
    let shouldTranslate = false;
    
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        shouldTranslate = true;
      }
    });
    
    if (shouldTranslate) {
      translateDOM();
    }
  });
  
  // 页面加载后开始观察 body 元素及其子元素的变化
  document.addEventListener('DOMContentLoaded', function() {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

// 监听 React 应用加载完成事件
window.addEventListener('load', function() {
  console.log("页面完全加载完成，再次翻译");
  
  // 延迟执行多次翻译，以确保 React 应用加载完成后的内容都被翻译
  setTimeout(translateDOM, 500);
  setTimeout(translateDOM, 1000);
  setTimeout(translateDOM, 2000);
  setTimeout(translateDOM, 5000);
});

// 立即执行一次翻译
console.log("脚本加载完成，立即执行一次翻译");
setTimeout(translateDOM, 0);

export default {}; 