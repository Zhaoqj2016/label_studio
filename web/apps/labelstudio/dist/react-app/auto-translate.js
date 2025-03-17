/**
 * 自动翻译脚本
 * 在页面加载后自动翻译界面
 */

(function() {
  // 翻译 DOM 元素
  function translateDOM() {
    if (!window.t || window.LANGUAGE_CODE !== 'zh-hans') return;
    
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
  }
  
  // 在页面加载后自动翻译
  document.addEventListener('DOMContentLoaded', function() {
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
    // 延迟执行多次翻译，以确保 React 应用加载完成后的内容都被翻译
    setTimeout(translateDOM, 500);
    setTimeout(translateDOM, 1000);
    setTimeout(translateDOM, 2000);
    setTimeout(translateDOM, 5000);
  });
})(); 