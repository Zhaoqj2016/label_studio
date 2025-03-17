// 自动翻译脚本 - 在React应用初始化之前生效
(function() {
  // 设置语言环境
  window.LANGUAGE_CODE = "zh-hans";
  document.documentElement.lang = "zh-hans";
  
  // 翻译字典
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
    
    // 登录相关
    'Sign in': '登录',
    'Username': '用户名',
    'Password': '密码',
    'Email': '邮箱',
    'Remember me': '记住我',
    'Forgot password?': '忘记密码？',
    
    // 导航
    'Projects': '项目',
    'Create Project': '创建项目',
    'Organization': '组织',
    'Dashboard': '仪表盘',
    'Settings': '设置',
    
    // 更多可根据需要添加
  };
  
  // 修改React库的初始化过程
  try {
    // 修改 createElement 方法，拦截组件创建
    const originalCreateElement = React?.createElement;
    if (originalCreateElement) {
      React.createElement = function(type, props, ...children) {
        // 对文本属性进行翻译处理
        if (props) {
          for (const key in props) {
            if (typeof props[key] === 'string' && translations[props[key]]) {
              props[key] = translations[props[key]];
            } else if (key === 'placeholder' && typeof props[key] === 'string' && translations[props[key]]) {
              props[key] = translations[props[key]];
            }
          }
        }
        
        // 对文本子元素进行翻译
        if (children && children.length) {
          children = children.map(child => {
            if (typeof child === 'string' && translations[child]) {
              return translations[child];
            }
            return child;
          });
        }
        
        return originalCreateElement.apply(this, [type, props, ...children]);
      };
    }
  } catch (e) {
    console.error('React拦截失败:', e);
  }
  
  // 修改网页内容
  function translateDOM() {
    // 翻译文本节点
    const textNodes = [];
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walk.nextNode()) {
      textNodes.push(node);
    }
    
    textNodes.forEach(textNode => {
      const text = textNode.textContent.trim();
      if (text && translations[text]) {
        textNode.textContent = textNode.textContent.replace(text, translations[text]);
      }
    });
    
    // 翻译属性
    ['placeholder', 'title', 'alt'].forEach(attr => {
      document.querySelectorAll(`[${attr}]`).forEach(el => {
        const value = el.getAttribute(attr);
        if (value && translations[value]) {
          el.setAttribute(attr, translations[value]);
        }
      });
    });
  }
  
  // 在文档加载完成后执行翻译
  document.addEventListener('DOMContentLoaded', function() {
    translateDOM();
    
    // 设置定期翻译
    setInterval(translateDOM, 1000);
    
    // 使用 MutationObserver 监听 DOM 变化
    if (window.MutationObserver) {
      const observer = new MutationObserver(function() {
        translateDOM();
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }
  });
})(); 