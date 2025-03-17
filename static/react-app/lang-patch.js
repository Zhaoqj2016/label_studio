// 语言修补脚本 - 增强版
(function() {
  // 立即设置语言
  window.LANGUAGE_CODE = "zh-hans";
  document.documentElement.lang = "zh-hans";
  
  // 定义一个全局变量，表示已经应用了语言修补
  window.__LANG_PATCHED__ = true;
  
  // 修改 HTMLHeadElement.prototype.appendChild 方法，在脚本加载前注入语言设置
  const originalAppendChild = HTMLHeadElement.prototype.appendChild;
  HTMLHeadElement.prototype.appendChild = function(node) {
    // 如果是加载 main.js 的脚本标签
    if (node.tagName === 'SCRIPT' && node.src && node.src.indexOf('main.js') > -1) {
      // 确保 APP_SETTINGS 存在
      if (!window.APP_SETTINGS) {
        window.APP_SETTINGS = {};
      }
      
      // 设置语言
      window.APP_SETTINGS.language = "zh-hans";
      
      // 创建一个新的脚本元素，设置 Redux 初始状态中的语言
      const langScript = document.createElement('script');
      langScript.textContent = `
        window.LANGUAGE_CODE = "zh-hans";
        document.documentElement.lang = "zh-hans";
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = function() { return function(f) { return f; }; };
        window.__REDUX_INITIAL_STATE__ = window.__REDUX_INITIAL_STATE__ || {};
        window.__REDUX_INITIAL_STATE__.language = "zh-hans";
      `;
      document.head.insertBefore(langScript, node);
    }
    
    return originalAppendChild.call(this, node);
  };
  
  // 定期检查并强制设置语言
  function enforceLanguage() {
    if (window.APP_SETTINGS) {
      window.APP_SETTINGS.language = "zh-hans";
    }
    document.documentElement.lang = "zh-hans";
  }
  
  // 立即执行一次
  enforceLanguage();
  
  // 在文档加载完成后再次执行
  document.addEventListener('DOMContentLoaded', function() {
    enforceLanguage();
    // 多次尝试，确保设置生效
    setTimeout(enforceLanguage, 100);
    setTimeout(enforceLanguage, 500);
    setTimeout(enforceLanguage, 1000);
  });
  
  // 监听页面状态变化
  window.addEventListener('load', function() {
    enforceLanguage();
    // 定期检查
    setInterval(enforceLanguage, 1000);
  });
})();
