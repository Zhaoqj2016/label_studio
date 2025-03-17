// 项目界面汉化脚本
(function() {
  // 项目界面的翻译字典
  const projectTranslations = {
    // 项目列表页面
    "Projects": "项目",
    "Create": "创建",
    "Project": "项目",
    "All Projects": "所有项目",
    "Create Project": "创建项目",
    "New Project": "新建项目",
    "Import": "导入",
    "Export": "导出",
    "Settings": "设置",
    "Delete": "删除",
    "Tasks": "任务",
    "No tasks": "无任务",
    "Annotations": "标注",
    "No annotations yet": "尚无标注",
    "Created by": "创建者",
    "Created": "创建于",
    "Search": "搜索",
    "Filter": "筛选",
    "Description": "描述",
    "Add description": "添加描述",
    "No description": "无描述",
    "Members": "成员",
    "No members": "无成员",
    "Last updated": "最后更新于",
    "Data Manager": "数据管理器",
    "Label": "标注",
    "Show more": "显示更多",
    "Show less": "显示较少",
    
    // 项目创建/设置界面
    "Labeling Setup": "标注设置",
    "Data Import": "数据导入",
    "Labeling Interface": "标注界面",
    "Instructions": "说明",
    "ML Settings": "机器学习设置",
    "Webhooks": "网络钩子",
    "Advanced": "高级设置",
    "General": "常规",
    "Template": "模板",
    "Custom Template": "自定义模板",
    "Templates": "模板",
    "No templates": "无模板",
    "Save": "保存",
    "Cancel": "取消",
    "Next": "下一步",
    "Previous": "上一步",
    "Back": "返回",
    "Done": "完成",
    "Template Gallery": "模板库",
    "Select Template": "选择模板",
    "Search templates": "搜索模板",
    "Choose Template": "选择模板",
    "Editor": "编辑器",
    "Preview": "预览",
    "JSON": "JSON",
    "Add label": "添加标签",
    "Add choice": "添加选项",
    "Add value": "添加值",
    "Upload": "上传",
    "Import file": "导入文件",
    "Import files": "导入文件",
    "Browse files": "浏览文件",
    "or drag and drop them here": "或将文件拖放到此处",
    "Sync with your storage": "与存储同步",
    "Storage Type": "存储类型",
    "AWS S3": "AWS S3",
    "Google Cloud Storage": "谷歌云存储",
    "Azure Blob Storage": "Azure Blob存储",
    "Redis": "Redis",
    "Local files": "本地文件",
    "URL": "URL",
    "Select a file": "选择文件",
    "Format": "格式",
    "Name": "名称",
    "Type": "类型",
    "Size": "大小",
    "Add": "添加",
    "Remove": "移除",
    "Configure": "配置",
    "Target storage": "目标存储",
    "Source storage": "源存储",
    "Connection": "连接",
    "Bucket": "存储桶",
    "Prefix": "前缀",
    "Access Key ID": "访问密钥ID",
    "Secret Access Key": "秘密访问密钥",
    "Region": "区域",
    "Project Name": "项目名称",
    "Set Project Name": "设置项目名称",
    "Completed": "已完成",
    "In Progress": "进行中",
    "Pending": "待处理",
    "Skipped": "已跳过",
    "Rejected": "已拒绝",
    "Accepted": "已接受",
    "Total": "总计",
    "Text Classification": "文本分类",
    "Image Classification": "图像分类",
    "Object Detection": "目标检测",
    "Text Span": "文本跨度",
    "Relation Extraction": "关系抽取",
    "Named Entity Recognition": "命名实体识别",
    "Machine Learning": "机器学习",
    "Models": "模型",
    "No models available": "无可用模型",
    "Predictions": "预测",
    "No predictions available": "无可用预测",
    "Labeling": "标注",
    "Annotators": "标注者",
    "No annotators": "无标注者",
    "Assign": "分配",
    "Annotate": "标注",
    "Explore": "探索",
    "Dashboard": "仪表盘",
    "Documentation": "文档",
    "Community": "社区",
    "Help": "帮助",
    "Keyboard shortcuts": "键盘快捷键",
    "Data Import Options": "数据导入选项",
    "Import from": "导入自",
    "Resume": "恢复",
    "Stop": "停止",
    "Start": "开始",
    "Reset": "重置",
    "Finish": "完成",
    "Edit": "编辑",
    "View": "查看",
    "Add Field": "添加字段",
    "Tasks Ready to Label": "准备标注的任务",
    "No Data": "无数据",
    "Loading": "加载中",
    "Apply": "应用",
    "Submit": "提交",
    "OK": "确定",
    "Yes": "是",
    "No": "否",
    "Close": "关闭",
    "Retry": "重试",
    "Error": "错误",
    "Success": "成功",
    "Warning": "警告",
    "Information": "信息",
    "Open": "打开",
    "Discard": "丢弃",
    "Continue": "继续",
    "Text": "文本",
    "Image": "图像",
    "Audio": "音频",
    "Video": "视频",
    "HTML": "HTML",
    "Time Series": "时间序列",
    "Paragraphs": "段落",
    "Dialog": "对话",
    "Pairwise": "成对",
    "Empty": "空",
    "Create Project": "创建项目",
    "Import Project": "导入项目",
    "Get started on your project": "开始您的项目"
  };

  // 翻译函数
  function translate(text) {
    if (!text || typeof text !== 'string') return text;
    
    const trimmedText = text.trim();
    
    // 直接匹配
    if (projectTranslations[trimmedText]) {
      return projectTranslations[trimmedText];
    }
    
    // 尝试不区分大小写匹配
    const lowerText = trimmedText.toLowerCase();
    for (const key in projectTranslations) {
      if (key.toLowerCase() === lowerText) {
        return projectTranslations[key];
      }
    }
    
    return text;
  }
  
  // 翻译DOM元素
  function translateElement(element) {
    // 跳过脚本和样式元素
    if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG'].includes(element.tagName)) return;
    
    try {
      // 翻译文本节点
      for (let i = 0; i < element.childNodes.length; i++) {
        const node = element.childNodes[i];
        if (node.nodeType === 3 && node.textContent && node.textContent.trim()) {
          const text = node.textContent.trim();
          const translated = translate(text);
          if (translated !== text) {
            node.textContent = node.textContent.replace(text, translated);
          }
        }
      }
      
      // 翻译属性
      if (element.hasAttribute('placeholder')) {
        const placeholder = element.getAttribute('placeholder');
        element.setAttribute('placeholder', translate(placeholder));
      }
      
      if (element.hasAttribute('title')) {
        const title = element.getAttribute('title');
        element.setAttribute('title', translate(title));
      }
      
      // 翻译按钮文本
      if (element.tagName === 'BUTTON' || 
          (element.tagName === 'DIV' && element.getAttribute('role') === 'button') ||
          (element.tagName === 'SPAN' && element.getAttribute('role') === 'button')) {
        if (element.textContent && element.textContent.trim()) {
          const text = element.textContent.trim();
          const translated = translate(text);
          if (translated !== text) {
            element.textContent = translated;
          }
        }
      }
      
      // 处理React的特殊按钮和链接
      if (element.classList && 
          (element.classList.contains('ant-btn') || 
           element.classList.contains('ant-modal-title') || 
           element.classList.contains('ant-modal-confirm-title') ||
           element.classList.contains('ant-select-selection-item') ||
           element.classList.contains('ant-menu-title-content'))) {
        if (element.textContent && element.textContent.trim()) {
          const text = element.textContent.trim();
          const translated = translate(text);
          if (translated !== text) {
            element.textContent = translated;
          }
        }
      }
      
      // 递归翻译子元素
      for (let i = 0; i < element.children.length; i++) {
        translateElement(element.children[i]);
      }
    } catch (e) {
      console.error("翻译元素出错:", e);
    }
  }
  
  // 项目界面特定元素的翻译
  function translateProjectUI() {
    try {
      // 检查是否在项目页面
      if (window.location.pathname.includes('/projects')) {
        console.log("检测到项目页面，应用特殊翻译...");
        
        // 翻译项目标题和头部
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译按钮
        document.querySelectorAll('button, .ant-btn, [role="button"]').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译菜单项和标签
        document.querySelectorAll('.ant-menu-item, .ant-tabs-tab, .ant-select-item').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译表格标题和内容
        document.querySelectorAll('.ant-table-cell, .ant-table-column-title').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译模态框标题和内容
        document.querySelectorAll('.ant-modal-title, .ant-modal-confirm-title, .ant-modal-confirm-content').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译表单标签和描述
        document.querySelectorAll('.ant-form-item-label, .ant-form-item-explain').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
      }
    } catch (e) {
      console.error("翻译项目UI出错:", e);
    }
  }
  
  // 翻译所有DOM
  function translateAll() {
    try {
      if (document.body) {
        translateElement(document.body);
        translateProjectUI();
      }
    } catch (e) {
      console.error("全局翻译出错:", e);
    }
  }
  
  // 监听DOM变化
  function observeDOM() {
    if (!window.MutationObserver) return;
    
    try {
      const observer = new MutationObserver(function(mutations) {
        let shouldTranslate = false;
        
        mutations.forEach(function(mutation) {
          if (mutation.type === 'childList' && mutation.addedNodes.length) {
            shouldTranslate = true;
            mutation.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) { // 元素节点
                translateElement(node);
              }
            });
          }
        });
        
        // 如果有元素被添加，尝试专门翻译项目UI
        if (shouldTranslate) {
          setTimeout(translateProjectUI, 100);
        }
      });
      
      // 监听整个文档变化
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
      });
      
      console.log("DOM观察器已启动，将自动翻译新内容");
    } catch (e) {
      console.error("设置DOM观察器出错:", e);
    }
  }
  
  // 初始化
  function init() {
    console.log("正在初始化项目界面翻译...");
    
    // 立即翻译当前页面
    translateAll();
    
    // 设置DOM观察器
    observeDOM();
    
    // 定期重新翻译整个页面
    setInterval(translateAll, 1000);
    
    // 监听页面内容变化
    window.addEventListener('DOMContentLoaded', translateAll);
    window.addEventListener('load', translateAll);
    
    // 监听路由变化
    if ('onhashchange' in window) {
      window.addEventListener('hashchange', function() {
        setTimeout(translateAll, 300);
      });
    }
    
    // 监听URL变化
    let lastUrl = location.href;
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        setTimeout(translateAll, 300);
      }
    }).observe(document, { subtree: true, childList: true });
    
    console.log("项目界面翻译初始化完成");
  }
  
  // 页面加载完后执行初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(); 