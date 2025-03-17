// 强制翻译脚本 - 超级增强版
(function() {
  // 立即设置语言
  window.LANGUAGE_CODE = "zh-hans"; 
  document.documentElement.lang = "zh-hans";
  
  // 增强翻译字典 - 添加更多关键术语
  window.translations = window.translations || {};
  
  // 合并新的翻译
  const additionalTranslations = {
    // 登录页面
    "Sign in to Label Studio": "登录 Label Studio",
    "User was not found": "未找到用户",
    "Incorrect password": "密码不正确",
    "Username": "用户名",
    "Password": "密码",
    "Email": "邮箱",
    "Email Address": "邮箱地址",
    "Sign In": "登录",
    "Remember me": "记住我",
    "Forgot password?": "忘记密码？",
    "or": "或",
    "Powered by": "技术支持",
    "SIGN IN": "登录",
    "LOGIN": "登录",
    "Log in": "登录",
    "Log In": "登录",
    "LOG IN": "登录",
    "Sign up": "注册",
    "SIGN UP": "注册",
    "Sign Up": "注册",
    "Don't have an account?": "没有账号？",
    "Already have an account?": "已有账号？",
    "Forgot Password": "忘记密码",
    "Reset Password": "重置密码",
    "Enter your email": "输入您的邮箱",
    "Enter your password": "输入您的密码",
    "Enter your username": "输入您的用户名",
    
    // 表单验证消息
    "This field is required": "此字段为必填项",
    "Please enter a valid email address": "请输入有效的邮箱地址",
    "Password must be at least 8 characters": "密码长度必须至少为8个字符",
    "Passwords do not match": "两次输入的密码不匹配",
    
    // 项目页面
    "Projects": "项目",
    "Create": "创建",
    "Import": "导入",
    "Export": "导出",
    "Delete": "删除",
    "Settings": "设置",
    "No projects created yet": "尚未创建项目",
    "Create New Project": "创建新项目",
    "Create Project": "创建项目",
    
    // 通用按钮
    "Save": "保存",
    "Cancel": "取消",
    "OK": "确定",
    "Yes": "是",
    "No": "否",
    "Submit": "提交",
    "Close": "关闭",
    "Next": "下一步",
    "Previous": "上一步",
    "Back": "返回",
    "Done": "完成",
    "Apply": "应用",
    "Loading": "加载中",
    "Search": "搜索",
    "Filter": "筛选"
  };
  
  // 合并翻译
  Object.assign(window.translations, additionalTranslations);
  
  // 增强翻译函数 - 使其更宽容，处理不同的大小写和格式
  window.t = function(text) {
    if (!text || typeof text !== 'string') return text;
    
    const trimmedText = text.trim();
    
    // 1. 直接匹配
    if (window.translations[trimmedText]) {
      return window.translations[trimmedText];
    }
    
    // 2. 尝试不区分大小写匹配
    const lowerText = trimmedText.toLowerCase();
    for (const key in window.translations) {
      if (key.toLowerCase() === lowerText) {
        return window.translations[key];
      }
    }
    
    // 3. 尝试移除特殊字符后匹配
    const alphaNumericText = trimmedText.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '');
    for (const key in window.translations) {
      const keyAlphaNumeric = key.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '');
      if (keyAlphaNumeric === alphaNumericText) {
        return window.translations[key];
      }
    }
    
    return trimmedText;
  };
  
  // 拦截React的渲染过程
  function hijackReact() {
    // 如果React已经加载
    if (window.React && window.React.createElement) {
      const originalCreateElement = window.React.createElement;
      window.React.createElement = function(type, props, ...children) {
        // 翻译props中的文本属性
        if (props) {
          // 特别处理常见属性
          const textProps = ['placeholder', 'title', 'alt', 'aria-label', 'label', 'value'];
          textProps.forEach(prop => {
            if (typeof props[prop] === 'string' && window.translations[props[prop]]) {
              props[prop] = window.translations[props[prop]];
            }
          });
          
          // 处理其他字符串属性
          for (const key in props) {
            if (typeof props[key] === 'string' && window.translations[props[key]]) {
              props[key] = window.translations[props[key]];
            }
          }
        }
        
        // 翻译文本子元素
        const translatedChildren = children.map(child => {
          if (typeof child === 'string' && window.translations[child.trim()]) {
            return window.translations[child.trim()];
          }
          return child;
        });
        
        return originalCreateElement.apply(this, [type, props, ...translatedChildren]);
      };
      
      console.log("React渲染已被劫持，强制翻译已开启");
    }
  }
  
  // 尝试劫持React
  hijackReact();
  
  // 如果React还没有加载，则等待React加载
  if (!window.React || !window.React.createElement) {
    Object.defineProperty(window, 'React', {
      configurable: true,
      set: function(value) {
        // 保存原始的React对象
        Object.defineProperty(window, 'React', {
          configurable: true,
          writable: true,
          value: value
        });
        
        // 劫持React
        if (value && value.createElement) {
          setTimeout(hijackReact, 0);
        }
      },
      get: function() {
        return undefined;
      }
    });
  }
  
  // 劫持ReactDOM的render方法
  if (window.ReactDOM && window.ReactDOM.render) {
    const originalRender = window.ReactDOM.render;
    window.ReactDOM.render = function(element, container, callback) {
      // 确保在渲染后应用翻译
      const result = originalRender.apply(this, arguments);
      setTimeout(translateAllElements, 100);
      return result;
    };
  } else {
    // 监听ReactDOM加载
    Object.defineProperty(window, 'ReactDOM', {
      configurable: true,
      set: function(value) {
        // 保存原始的ReactDOM对象
        Object.defineProperty(window, 'ReactDOM', {
          configurable: true,
          writable: true,
          value: value
        });
        
        // 劫持ReactDOM的render方法
        if (value && value.render) {
          const originalRender = value.render;
          value.render = function(element, container, callback) {
            // 确保在渲染后应用翻译
            const result = originalRender.apply(this, arguments);
            setTimeout(translateAllElements, 100);
            return result;
          };
        }
      },
      get: function() {
        return undefined;
      }
    });
  }
  
  // 翻译函数
  function translateElement(element) {
    // 跳过脚本、样式等元素
    if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(element.tagName)) return;
    
    try {
      // 翻译文本内容
      if (element.childNodes && element.childNodes.length) {
        for (let i = 0; i < element.childNodes.length; i++) {
          const node = element.childNodes[i];
          // 只处理文本节点
          if (node.nodeType === 3 && node.textContent && node.textContent.trim()) {
            const text = node.textContent.trim();
            const translated = window.t(text);
            if (translated !== text) {
              node.textContent = node.textContent.replace(text, translated);
            }
          }
        }
      }
      
      // 翻译属性
      if (element.hasAttribute('placeholder')) {
        const placeholder = element.getAttribute('placeholder');
        const translated = window.t(placeholder);
        if (translated !== placeholder) {
          element.setAttribute('placeholder', translated);
        }
      }
      
      if (element.hasAttribute('title')) {
        const title = element.getAttribute('title');
        const translated = window.t(title);
        if (translated !== title) {
          element.setAttribute('title', translated);
        }
      }
      
      if (element.hasAttribute('alt')) {
        const alt = element.getAttribute('alt');
        const translated = window.t(alt);
        if (translated !== alt) {
          element.setAttribute('alt', translated);
        }
      }
      
      // 递归处理子元素
      for (let i = 0; i < element.children.length; i++) {
        translateElement(element.children[i]);
      }
    } catch (e) {
      console.error("翻译元素出错:", e);
    }
  }
  
  // 翻译所有页面元素
  function translateAllElements() {
    try {
      if (document.body) {
        translateElement(document.body);
        
        // 特别处理登录页面元素
        translateLoginPage();
      }
    } catch (e) {
      console.error("翻译所有元素出错:", e);
    }
  }
  
  // 专门处理登录页面
  function translateLoginPage() {
    // 检查当前是否在登录页面
    if (window.location.pathname.includes('/login') || 
        window.location.pathname.includes('/signin') || 
        document.title.includes('Login') || 
        document.title.includes('Sign in')) {
      
      console.log("检测到登录页面，应用特殊翻译...");
      
      // 查找并翻译登录表单元素
      const loginButtons = document.querySelectorAll('button, input[type="submit"], a.btn');
      loginButtons.forEach(button => {
        if (button.textContent && (
            button.textContent.toLowerCase().includes('log in') ||
            button.textContent.toLowerCase().includes('login') ||
            button.textContent.toLowerCase().includes('sign in')
        )) {
          button.textContent = "登录";
        }
        
        if (button.textContent && (
            button.textContent.toLowerCase().includes('sign up') ||
            button.textContent.toLowerCase().includes('register')
        )) {
          button.textContent = "注册";
        }
      });
      
      // 查找并翻译输入框标签和占位符
      const inputLabels = document.querySelectorAll('label');
      inputLabels.forEach(label => {
        if (label.textContent && (
            label.textContent.toLowerCase().includes('email') ||
            label.textContent.toLowerCase().includes('mail')
        )) {
          label.textContent = "邮箱地址";
        }
        
        if (label.textContent && label.textContent.toLowerCase().includes('password')) {
          label.textContent = "密码";
        }
        
        if (label.textContent && label.textContent.toLowerCase().includes('username')) {
          label.textContent = "用户名";
        }
      });
      
      // 查找并翻译输入框占位符
      const inputs = document.querySelectorAll('input');
      inputs.forEach(input => {
        if (input.placeholder && (
            input.placeholder.toLowerCase().includes('email') ||
            input.placeholder.toLowerCase().includes('mail')
        )) {
          input.placeholder = "邮箱地址";
        }
        
        if (input.placeholder && input.placeholder.toLowerCase().includes('password')) {
          input.placeholder = "密码";
        }
        
        if (input.placeholder && input.placeholder.toLowerCase().includes('username')) {
          input.placeholder = "用户名";
        }
      });
      
      // 查找并翻译其他常见登录页面文本
      const allElements = document.querySelectorAll('p, span, div, a, h1, h2, h3, h4, h5, h6');
      allElements.forEach(el => {
        if (el.textContent && el.textContent.toLowerCase().includes("don't have an account")) {
          el.textContent = "没有账号？";
        }
        
        if (el.textContent && el.textContent.toLowerCase().includes("forgot password")) {
          el.textContent = "忘记密码？";
        }
        
        if (el.textContent && el.textContent.toLowerCase().includes("remember me")) {
          el.textContent = "记住我";
        }
      });
    }
  }
  
  // 监听DOM变化，自动翻译新元素
  function observeDOM() {
    if (!window.MutationObserver) return;
    
    try {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) { // 元素节点
                translateElement(node);
              }
            });
          } else if (mutation.type === 'characterData' && mutation.target.nodeType === 3) {
            // 文本节点变化
            const textNode = mutation.target;
            const text = textNode.textContent.trim();
            const translated = window.t(text);
            if (translated !== text) {
              textNode.textContent = textNode.textContent.replace(text, translated);
            }
          }
        });
      });
      
      // 监听整个body
      if (document.body) {
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          characterData: true
        });
      } else {
        // 如果body还没有加载，则等待加载
        document.addEventListener('DOMContentLoaded', function() {
          observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
          });
        });
      }
    } catch (e) {
      console.error("设置DOM观察器出错:", e);
    }
  }
  
  // 监听HTTP请求，注入语言头
  function injectLanguageHeader() {
    if (!window.XMLHttpRequest) return;
    
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
      // 调用原始方法
      originalOpen.apply(this, arguments);
      
      // 添加语言头
      this.setRequestHeader('Accept-Language', 'zh-CN,zh;q=0.9');
      this.setRequestHeader('Content-Language', 'zh-hans');
    };
  }
  
  // 在页面加载后执行初始化
  function init() {
    // 尝试劫持React
    hijackReact();
    
    // 确保语言设置
    window.LANGUAGE_CODE = "zh-hans";
    document.documentElement.lang = "zh-hans";
    if (window.APP_SETTINGS) window.APP_SETTINGS.language = "zh-hans";
    
    // 首次翻译已加载的元素
    translateAllElements();
    
    // 多次翻译，确保覆盖动态加载的内容
    setTimeout(translateAllElements, 100);
    setTimeout(translateAllElements, 500);
    setTimeout(translateAllElements, 1000);
    setTimeout(translateAllElements, 2000);
    
    // 监听DOM变化
    observeDOM();
    
    // 注入语言头
    injectLanguageHeader();
    
    // 定期检查并翻译 - 增加频率
    setInterval(translateAllElements, 1000); // 每秒检查一次
    
    console.log("强制翻译脚本已初始化 - 超级版本");
    
    // 专门为登录页面设置更频繁的检查
    if (window.location.pathname.includes('/login') || 
        window.location.pathname.includes('/signin') || 
        document.title.includes('Login') || 
        document.title.includes('Sign in')) {
      
      console.log("检测到登录页面，设置更频繁的翻译检查");
      const loginInterval = setInterval(translateLoginPage, 500); // 每0.5秒检查一次登录页面
      
      // 5分钟后清除登录页面的特殊检查
      setTimeout(() => {
        clearInterval(loginInterval);
        console.log("登录页面特殊翻译检查已停止");
      }, 300000); // 5分钟
    }
  }
  
  // 尝试立即执行初始化，不等待DOMContentLoaded事件
  try {
    init();
  } catch (e) {
    console.error("初始化翻译时出错:", e);
  }
  
  // 在页面加载后再次执行初始化，以确保所有元素都已加载
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else if (document.readyState === 'interactive' || document.readyState === 'complete') {
    // 页面已经加载，稍后再次执行初始化
    setTimeout(init, 0);
  }
  
  // 在窗口加载完成后最后一次执行初始化，确保所有资源都已加载
  window.addEventListener('load', function() {
    setTimeout(init, 500);
  });
  
  // 在任何AJAX请求完成后再次翻译
  (function() {
    try {
      const originalXHROpen = XMLHttpRequest.prototype.open;
      const originalXHRSend = XMLHttpRequest.prototype.send;
      
      XMLHttpRequest.prototype.open = function() {
        return originalXHROpen.apply(this, arguments);
      };
      
      XMLHttpRequest.prototype.send = function() {
        const xhr = this;
        const originalOnReadyStateChange = xhr.onreadystatechange;
        
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            // 请求完成后进行翻译
            setTimeout(translateAllElements, 100);
          }
          
          if (originalOnReadyStateChange) {
            originalOnReadyStateChange.apply(this, arguments);
          }
        };
        
        return originalXHRSend.apply(this, arguments);
      };
    } catch (e) {
      console.error("拦截AJAX请求出错:", e);
    }
  })();
})();
