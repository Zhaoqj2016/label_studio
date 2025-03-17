// 强制翻译脚本 - 增强版
(function() {
  // 立即设置语言
  window.LANGUAGE_CODE = "zh-hans"; 
  document.documentElement.lang = "zh-hans";
  
  // 全局翻译字典
  window.translations = {
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
    'Remember me': '记住我',
    'Forgot password?': '忘记密码？',
    'Email': '邮箱',
    
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
  
  // 全局翻译函数
  window.t = function(text) {
    if (!text) return '';
    return window.translations[text.trim()] || text;
  };
  
  // 翻译函数
  function translateElement(element) {
    if (element.textContent && !element.hasAttribute('data-no-i18n')) {
      const originalText = element.textContent.trim();
      const translatedText = window.t(originalText);
      if (translatedText !== originalText) {
        element.textContent = translatedText;
      }
    }
  }
  
  // 翻译所有页面元素
  function translateAllElements() {
    document.querySelectorAll('button, a, h1, h2, h3, h4, h5, h6, span, label, p, div').forEach(translateElement);
    
    // 翻译占位符
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(function(el) {
      if (el.placeholder && !el.hasAttribute('data-no-i18n')) {
        el.placeholder = window.t(el.placeholder);
      }
    });
  }
  
  // 监听DOM变化，自动翻译新元素
  function observeDOM() {
    if (!window.MutationObserver) return;
    
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) { // 元素节点
              translateElement(node);
              node.querySelectorAll('button, a, h1, h2, h3, h4, h5, h6, span, label, p, div').forEach(translateElement);
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  // 设置React应用程序的语言
  function setReactAppLanguage() {
    if (window.APP_SETTINGS) {
      window.APP_SETTINGS.language = "zh-hans";
    }
    
    // 尝试拦截React的初始化
    const originalDefineProperty = Object.defineProperty;
    Object.defineProperty = function(obj, prop, descriptor) {
      if (prop === 'language' && descriptor && descriptor.value) {
        descriptor.value = 'zh-hans';
      }
      return originalDefineProperty.call(this, obj, prop, descriptor);
    };
  }
  
  // 在页面加载后执行翻译
  function init() {
    setReactAppLanguage();
    translateAllElements();
    observeDOM();
    
    // 定期检查并翻译
    setInterval(translateAllElements, 1000);
  }
  
  // 立即执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
