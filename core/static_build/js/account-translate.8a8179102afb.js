// 账户设置页面专用翻译脚本
(function() {
  console.log("账户设置页面翻译脚本已加载...");
  
  // 账户设置页面的翻译字典
  const accountTranslations = {
    "Account & Settings": "账户与设置",
    "Log Out": "退出登录",
    "Logout": "退出登录",
    "Please check new notification settings in the Account & Settings page": "请在账户与设置页面中查看新的通知设置",
    "Account info": "账户信息",
    "Account Info": "账户信息",
    "First Name": "名字",
    "Last Name": "姓氏",
    "Phone": "电话",
    "Choose file": "选择文件",
    "Access Token": "访问令牌",
    "Copy": "复制",
    "Renew": "更新",
    "Use this token to authenticate with our API": "使用此令牌验证我们的API",
    "Use this token to authenticate with our API:": "使用此令牌验证我们的API：",
    "Example fetch projects data": "示例获取项目数据",
    "Example fetch projects data:": "示例获取项目数据：",
    "Optional description of your project": "项目的可选描述",
    "Upload Files": "上传文件",
    "Direct media uploads have limitations and we strongly recommend using": "直接媒体上传有限制，我们强烈建议使用",
    "Cloud Storage instead": "云存储代替",
    "List": "列表",
    "E-mail": "电子邮箱",
    "Save": "保存",
    "Delete": "删除",
    "Documentation": "文档",
    "Your active organization": "您的活跃组织",
    "Your role": "您的角色",
    "Annotations completed by you": "您完成的标注",
    "Projects contributed by you": "您贡献的项目",
    "Organization ID": "组织ID",
    "Organization owner": "组织所有者",
    "Organization created at": "组织创建于",
    "Registered": "注册于",
    "user ID": "用户ID"
  };
  
  // 直接替换文本内容的函数
  function replaceTextContent(element, text, translation) {
    if (!element || !element.textContent) return;
    if (element.textContent.includes(text)) {
      element.textContent = element.textContent.replace(text, translation);
    }
  }
  
  // 直接替换属性的函数
  function replaceAttribute(element, attr, text, translation) {
    if (!element || !element.hasAttribute(attr)) return;
    const attrValue = element.getAttribute(attr);
    if (attrValue && attrValue.includes(text)) {
      element.setAttribute(attr, attrValue.replace(text, translation));
    }
  }
  
  // 翻译特定元素
  function translateSpecificElements() {
    // 翻译页面标题
    document.querySelectorAll('.breadcrumbs__item').forEach(item => {
      if (item.textContent.trim() === "Account & Settings") {
        item.textContent = "账户与设置";
      }
    });
    
    // 翻译导航菜单
    document.querySelectorAll('a[href*="account"], a[href*="settings"]').forEach(a => {
      if (a.textContent.trim() === "Account & Settings") {
        a.textContent = "账户与设置";
      }
    });
    
    // 翻译退出登录链接
    document.querySelectorAll('a[href*="logout"]').forEach(a => {
      if (a.textContent.trim() === "Log Out") {
        a.textContent = "退出登录";
      }
    });
    
    // 翻译账户信息部分
    document.querySelectorAll('.account-page header').forEach(header => {
      const text = header.textContent.trim();
      if (accountTranslations[text]) {
        header.textContent = accountTranslations[text];
      }
    });
    
    // 翻译标签
    document.querySelectorAll('label').forEach(label => {
      const text = label.textContent.trim();
      if (accountTranslations[text]) {
        label.textContent = accountTranslations[text];
      }
    });
    
    // 翻译按钮
    document.querySelectorAll('button').forEach(button => {
      const text = button.textContent.trim();
      if (accountTranslations[text]) {
        button.textContent = accountTranslations[text];
      }
    });
    
    // 翻译输入框
    document.querySelectorAll('input[type="text"], input[type="file"], textarea').forEach(input => {
      if (input.hasAttribute('placeholder')) {
        const placeholder = input.getAttribute('placeholder');
        if (accountTranslations[placeholder]) {
          input.setAttribute('placeholder', accountTranslations[placeholder]);
        }
      }
      
      if (input.hasAttribute('value')) {
        const value = input.getAttribute('value');
        if (value === "Choose" || value === "Choose file") {
          input.setAttribute('value', "选择文件");
        }
      }
    });
    
    // 翻译特定的文本节点
    document.querySelectorAll('p, span, div, td, th, li').forEach(element => {
      const text = element.textContent.trim();
      
      // 检查完整匹配
      if (accountTranslations[text]) {
        element.textContent = accountTranslations[text];
        return;
      }
      
      // 检查部分匹配
      Object.keys(accountTranslations).forEach(key => {
        if (text.includes(key) && key.length > 3) {
          element.textContent = text.replace(key, accountTranslations[key]);
        }
      });
    });
  }
  
  // 使用更精确的选择器直接翻译账户设置页面
  function translateAccountPage() {
    // 1. 翻译页面标题和导航
    document.title = document.title.replace("Account & Settings", "账户与设置");
    
    // 2. 直接翻译账户信息部分
    const accountInfoHeader = document.querySelector('.user__info header');
    if (accountInfoHeader && accountInfoHeader.textContent.trim() === "Account info") {
      accountInfoHeader.textContent = "账户信息";
    }
    
    // 3. 直接翻译字段标签
    document.querySelectorAll('.field label').forEach(label => {
      const text = label.textContent.trim();
      if (text === "E-mail") label.textContent = "电子邮箱";
      if (text === "First Name") label.textContent = "名字";
      if (text === "Last Name") label.textContent = "姓氏";
      if (text === "Phone") label.textContent = "电话";
    });
    
    // 4. 直接翻译按钮
    document.querySelectorAll('.user-pic button').forEach(button => {
      if (button.textContent.trim() === "Delete") {
        button.textContent = "删除";
      }
    });
    
    document.querySelectorAll('.user__info footer button').forEach(button => {
      if (button.textContent.trim() === "Save") {
        button.textContent = "保存";
      }
    });
    
    // 5. 直接翻译文件输入
    const fileInput = document.querySelector('input[type="file"][name="avatar"]');
    if (fileInput && fileInput.value === "Choose") {
      fileInput.value = "选择文件";
    }
    
    // 6. 直接翻译令牌部分
    const tokenHeader = document.querySelector('.access_token__info header');
    if (tokenHeader && tokenHeader.textContent.trim() === "Access Token") {
      tokenHeader.textContent = "访问令牌";
    }
    
    const tokenLabel = document.querySelector('.access_token__info label');
    if (tokenLabel && tokenLabel.textContent.includes("Use this token to authenticate with our API")) {
      tokenLabel.textContent = "使用此令牌验证我们的API：";
    }
    
    document.querySelectorAll('.access_token__info button').forEach(button => {
      const text = button.textContent.trim();
      if (text === "Copy") button.textContent = "复制";
      if (text === "Renew") button.textContent = "更新";
    });
    
    const exampleLabel = document.querySelector('.access_token__info label[for="example_fetch"]');
    if (exampleLabel && exampleLabel.textContent.includes("Example fetch projects data")) {
      exampleLabel.textContent = "示例获取项目数据：";
    }
    
    document.querySelectorAll('.access_token__info a').forEach(a => {
      if (a.textContent.trim() === "Documentation") {
        a.textContent = "文档";
      }
    });
    
    // 7. 直接翻译组织部分
    document.querySelectorAll('.organization sub').forEach(sub => {
      if (sub.textContent.trim() === "Your active organization") {
        sub.textContent = "您的活跃组织";
      }
    });
    
    document.querySelectorAll('.organization table tr').forEach(row => {
      const cells = row.querySelectorAll('td');
      if (cells.length > 0) {
        const firstCell = cells[0];
        if (firstCell.textContent.includes("Your role")) {
          firstCell.textContent = "您的角色";
        } else if (firstCell.textContent.includes("Annotations completed by you")) {
          firstCell.textContent = "您完成的标注";
        } else if (firstCell.textContent.includes("Projects contributed by you")) {
          firstCell.textContent = "您贡献的项目";
        } else if (firstCell.textContent.includes("Organization ID")) {
          firstCell.textContent = "组织ID";
        } else if (firstCell.textContent.includes("Organization owner")) {
          firstCell.textContent = "组织所有者";
        } else if (firstCell.textContent.includes("Organization created at")) {
          firstCell.textContent = "组织创建于";
        }
      }
    });
    
    // 8. 翻译注册信息
    document.querySelectorAll('.user__info footer p').forEach(p => {
      if (p.textContent.includes("Registered")) {
        p.textContent = p.textContent
          .replace("Registered", "注册于")
          .replace("user ID", "用户ID");
      }
    });
  }
  
  // 监听DOM变化，自动翻译新元素
  function setupMutationObserver() {
    const observer = new MutationObserver(mutations => {
      let needsTranslation = false;
      
      mutations.forEach(mutation => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          needsTranslation = true;
        } else if (mutation.type === 'attributes') {
          needsTranslation = true;
        }
      });
      
      if (needsTranslation) {
        setTimeout(() => {
          translateSpecificElements();
          translateAccountPage();
        }, 10);
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
  }
  
  // 初始化翻译
  function initTranslation() {
    // 立即翻译
    translateSpecificElements();
    translateAccountPage();
    
    // 设置观察器
    setupMutationObserver();
    
    // 定期重新翻译
    setInterval(() => {
      translateSpecificElements();
      translateAccountPage();
    }, 1000);
  }
  
  // 检查是否在账户设置页面
  if (window.location.href.includes('/user/account')) {
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initTranslation);
    } else {
      initTranslation();
    }
  }
})(); 