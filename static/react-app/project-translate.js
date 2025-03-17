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
    "Get started on your project": "开始您的项目",
    
    // 新增术语
    "My Projects": "我的项目",
    "Project List": "项目列表",
    "Sort by": "排序方式",
    "Create from scratch": "从头创建",
    "Upload files": "上传文件",
    "Load": "加载",
    "Sync": "同步",
    "untitled": "无标题",
    "Select files": "选择文件",
    "Supported file formats": "支持的文件格式",
    "Files and larger datasets": "文件和大型数据集",
    "Files": "文件",
    "Input data": "输入数据",
    "Target storage": "目标存储",
    "Labeling setup": "标注设置",
    "Browse templates": "浏览模板",
    "Write custom template": "自定义模板",
    "From previous projects": "从以前的项目",
    "From files": "从文件",
    "Add a description for Project": "添加项目描述",
    "Error details": "错误详情",
    "Conversational AI": "对话式AI",
    "Popular templates": "热门模板",
    "Template categories": "模板类别",
    "Quick start": "快速开始",
    "Computer Vision": "计算机视觉",
    "Natural Language Processing": "自然语言处理",
    "Time Series Analysis": "时间序列分析",
    "Audio/Speech Processing": "音频/语音处理",
    "Multi-modal": "多模态",
    "Ranking and Scoring": "排名和评分",
    "Other": "其他",
    "Create a new project": "创建新项目",
    "Enter project name": "输入项目名称",
    "Data Import": "数据导入",
    "Labeling Interface": "标注界面",
    "Machine Learning": "机器学习",
    "Instructions": "说明",
    "Create": "创建",
    "Delete": "删除",
    "Are you sure?": "确定吗？",
    "This action cannot be undone": "此操作无法撤销",
    "Yes, delete": "是的，删除",
    "No, cancel": "不，取消",
    "Configure Project": "配置项目",
    "Project Settings": "项目设置",
    "General": "常规",
    "Model": "模型",
    "Export": "导出",
    "History": "历史",
    "Label Stream": "标签流",
    "Members": "成员",
    "Webhooks": "网络钩子",
    "Danger Zone": "危险区域",
    "Update": "更新",
    "Delete Project": "删除项目",
    "Are you sure you want to delete this project?": "确定要删除此项目吗？",
    "This action cannot be undone!": "此操作无法撤销！",
    "Enter project name to confirm": "输入项目名称以确认",
    "Project created successfully": "项目创建成功",
    "Error creating project": "创建项目时出错",
    "Error loading projects": "加载项目时出错",
    "No projects found": "未找到项目",
    "Search projects": "搜索项目",
    "Sort by creation date": "按创建日期排序",
    "Sort by name": "按名称排序",
    "Sort by last updated": "按最后更新排序",
    "Ascending": "升序",
    "Descending": "降序",
    "Drag and drop files here": "拖放文件到此处",
    "Labeling Project": "标注项目",
    "Task": "任务",
    "Get started": "开始使用",
    "Select a template": "选择模板",
    "All": "全部",
    "Enter your project name...": "输入您的项目名称...",
    "Enter project description...": "输入项目描述...",
    "Continue with selected template": "使用所选模板继续",
    "Click to select a template": "点击选择模板",
    "or select from popular templates": "或从热门模板中选择",
    "Choose files to upload": "选择要上传的文件",
    "Uploading files": "上传文件中",
    "Upload complete": "上传完成",
    "Data imported successfully": "数据导入成功",
    "Configure storage": "配置存储",
    "Connection settings": "连接设置",
    "Path and filename": "路径和文件名",
    "Select a storage type": "选择存储类型",
    
    // 特定的模板类型
    "Computer Vision": "计算机视觉",
    "Natural Language": "自然语言",
    "Natural Language Processing": "自然语言处理",
    "Audio/Speech": "音频/语音",
    "Time Series": "时间序列",
    "Multi-modal": "多模态",
    "Conversational AI": "对话式AI",
    "Table": "表格",
    "Ranking": "排名",
    
    // 模板名称
    "Semantic Segmentation with Polygons": "使用多边形的语义分割",
    "Semantic Segmentation with Masks": "使用蒙版的语义分割",
    "Image Classification": "图像分类",
    "Object Detection with Bounding Boxes": "使用边界框的目标检测",
    "Keypoints": "关键点标注",
    "Visual Genome": "视觉基因组",
    "Image Captioning": "图像描述",
    "Named Entity Recognition": "命名实体识别",
    "Text Classification": "文本分类",
    "Relation Extraction": "关系抽取",
    "Question Answering": "问答",
    "Intent Classification": "意图分类",
    "Optical Character Recognition": "光学字符识别",
    "Visual Question Answering": "视觉问答",
    "Multipage": "多页文档",
    "Inventory Tracking": "库存跟踪",
    "Sound Event Detection": "声音事件检测",
    "Automatic Speech Recognition": "自动语音识别",
    "Speaker Segmentation": "说话人分割",
    "Time Series Forecasting": "时间序列预测",
    "Change Point Detection": "变化点检测",
    "Activity Recognition": "活动识别",
    "Content Moderation": "内容审核",
    "HTML Entity Recognition": "HTML实体识别",
    "Response Selection": "响应选择",
    "Machine Translation": "机器翻译",
    "Text Summarization": "文本摘要",
    "Pairwise Classification": "成对分类",
    "Pairwise Regression": "成对回归",
    "Document Retrieval": "文档检索",
    "Text to Image": "文本到图像转换",
    "Side-by-side Comparison": "并排比较",
    "Response Grading": "响应评分",
    "Generative Chatbot Assessment": "生成式聊天机器人评估",
    "Generative Supervised LLM": "生成式监督LLM",
    "Medical Image Classification": "医学图像分类",
    "Signal Quality Detection": "信号质量检测",
    "Multi-turn Chat": "多轮对话",
    "Evaluate RAG Human Feedback": "评估RAG人类反馈",
    "Evaluate RAG Automated Metrics": "评估RAG自动化指标",
    
    // 按钮和操作
    "Select": "选择",
    "Continue with this template": "使用此模板继续",
    "Search for templates": "搜索模板",
    "Select template": "选择模板",
    "View template": "查看模板",
    "Category": "类别",
    "Filter by category": "按类别筛选",
    "Preview template": "预览模板",
    "More details": "更多详情",
    "Template details": "模板详情",
    "Choose this template": "选择此模板",
    "This template is designed for": "此模板设计用于",
    "Template description": "模板描述",
    "Usage example": "使用示例",
    "Select this template": "选择此模板",
    "Selected": "已选择",
    "Apply template": "应用模板",
    
    // 模板相关内容的更多明确匹配
    "Computer Vision": "计算机视觉",
    "Natural Language": "自然语言",
    "Computer Vision templates": "计算机视觉模板",
    "Natural Language templates": "自然语言模板",
    "Natural Language Processing": "自然语言处理",
    "Natural Language Processing templates": "自然语言处理模板",
    "Audio/Speech templates": "音频/语音模板",
    "Audio/Speech": "音频/语音",
    "Audio/Speech Processing": "音频/语音处理",
    "Time Series templates": "时间序列模板",
    "Time Series": "时间序列",
    "Time Series Analysis": "时间序列分析",
    "Multi-modal templates": "多模态模板",
    "Multi-modal": "多模态",
    "Conversational AI templates": "对话式AI模板",
    "Conversational AI": "对话式AI",
    "Table templates": "表格模板",
    "Table": "表格",
    "Ranking templates": "排名模板",
    "Ranking": "排名",
    "Ranking and Scoring": "排名和评分",
    "Other templates": "其他模板",
    "Other": "其他",
    
    // 模板名称的更多变体
    "Semantic Segmentation with Polygons": "使用多边形的语义分割",
    "Semantic Segmentation With Polygons": "使用多边形的语义分割",
    "SEMANTIC SEGMENTATION WITH POLYGONS": "使用多边形的语义分割",
    "Semantic segmentation with polygons": "使用多边形的语义分割",
    "semantic segmentation with polygons": "使用多边形的语义分割",
    
    "Semantic Segmentation with Masks": "使用蒙版的语义分割",
    "Semantic Segmentation With Masks": "使用蒙版的语义分割",
    "SEMANTIC SEGMENTATION WITH MASKS": "使用蒙版的语义分割",
    "Semantic segmentation with masks": "使用蒙版的语义分割",
    "semantic segmentation with masks": "使用蒙版的语义分割",
    
    "Object Detection with Bounding Boxes": "使用边界框的目标检测",
    "Object Detection With Bounding Boxes": "使用边界框的目标检测",
    "OBJECT DETECTION WITH BOUNDING BOXES": "使用边界框的目标检测",
    "Object detection with bounding boxes": "使用边界框的目标检测",
    "object detection with bounding boxes": "使用边界框的目标检测",
    
    // 按钮和提示的更多变体
    "Continue with this template": "使用此模板继续",
    "Continue With This Template": "使用此模板继续",
    "CONTINUE WITH THIS TEMPLATE": "使用此模板继续",
    "Continue with selected template": "使用所选模板继续",
    "Continue With Selected Template": "使用所选模板继续",
    "CONTINUE WITH SELECTED TEMPLATE": "使用所选模板继续"
  };

  // 翻译函数增强版
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
    
    // 处理特殊的动态文本
    if (lowerText.includes('project') && lowerText.includes('name')) {
      return lowerText.replace(/project/i, '项目').replace(/name/i, '名称');
    }
    
    if (lowerText.includes('task') && lowerText.includes('completed')) {
      return lowerText.replace(/task/i, '任务').replace(/completed/i, '已完成');
    }
    
    if (lowerText.includes('label') && lowerText.includes('data')) {
      return lowerText.replace(/label/i, '标注').replace(/data/i, '数据');
    }
    
    // 处理模板名称
    if (lowerText.includes('detection') || lowerText.includes('classification') || 
        lowerText.includes('recognition') || lowerText.includes('segmentation') ||
        lowerText.includes('vision') || lowerText.includes('language') ||
        lowerText.includes('audio') || lowerText.includes('speech')) {
      let translated = lowerText;
      
      // 替换常见术语
      translated = translated.replace(/computer vision/gi, '计算机视觉');
      translated = translated.replace(/natural language/gi, '自然语言');
      translated = translated.replace(/natural language processing/gi, '自然语言处理');
      translated = translated.replace(/audio[\s/]speech/gi, '音频/语音');
      translated = translated.replace(/time series/gi, '时间序列');
      translated = translated.replace(/multi[\s-]modal/gi, '多模态');
      translated = translated.replace(/conversational ai/gi, '对话式AI');
      
      translated = translated.replace(/detection/gi, '检测');
      translated = translated.replace(/classification/gi, '分类');
      translated = translated.replace(/recognition/gi, '识别');
      translated = translated.replace(/segmentation/gi, '分割');
      translated = translated.replace(/extraction/gi, '抽取');
      translated = translated.replace(/analysis/gi, '分析');
      translated = translated.replace(/image/gi, '图像');
      translated = translated.replace(/text/gi, '文本');
      translated = translated.replace(/audio/gi, '音频');
      translated = translated.replace(/video/gi, '视频');
      translated = translated.replace(/speech/gi, '语音');
      translated = translated.replace(/with polygons/gi, '使用多边形');
      translated = translated.replace(/with masks/gi, '使用蒙版');
      translated = translated.replace(/with bounding boxes/gi, '使用边界框');
      
      if (translated !== lowerText) {
        return translated;
      }
    }
    
    // 处理模板分类
    if (lowerText.includes('templates')) {
      let translated = lowerText;
      translated = translated.replace(/computer vision templates/gi, '计算机视觉模板');
      translated = translated.replace(/natural language templates/gi, '自然语言模板');
      translated = translated.replace(/natural language processing templates/gi, '自然语言处理模板');
      translated = translated.replace(/audio[\s/]speech templates/gi, '音频/语音模板');
      translated = translated.replace(/time series templates/gi, '时间序列模板');
      translated = translated.replace(/multi[\s-]modal templates/gi, '多模态模板');
      translated = translated.replace(/conversational ai templates/gi, '对话式AI模板');
      translated = translated.replace(/table templates/gi, '表格模板');
      translated = translated.replace(/ranking templates/gi, '排名模板');
      translated = translated.replace(/other templates/gi, '其他模板');
      translated = translated.replace(/popular templates/gi, '热门模板');
      translated = translated.replace(/template categories/gi, '模板类别');
      
      if (translated !== lowerText) {
        return translated;
      }
    }
    
    return text;
  }
  
  // 翻译DOM元素
  function translateElement(element) {
    // 跳过脚本和样式元素
    if (!element || !element.tagName || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG'].includes(element.tagName)) return;
    
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
      
      if (element.hasAttribute('aria-label')) {
        const ariaLabel = element.getAttribute('aria-label');
        element.setAttribute('aria-label', translate(ariaLabel));
      }
      
      if (element.hasAttribute('alt')) {
        const alt = element.getAttribute('alt');
        element.setAttribute('alt', translate(alt));
      }
      
      // 翻译按钮文本
      if (element.tagName === 'BUTTON' || 
          (element.tagName === 'DIV' && element.getAttribute('role') === 'button') ||
          (element.tagName === 'SPAN' && element.getAttribute('role') === 'button') ||
          element.classList.contains('ant-btn')) {
        if (element.textContent && element.textContent.trim()) {
          const text = element.textContent.trim();
          const translated = translate(text);
          if (translated !== text) {
            element.textContent = translated;
          }
        }
      }
      
      // 处理React的特殊元素
      if (element.classList && 
          (element.classList.contains('ant-btn') || 
           element.classList.contains('ant-modal-title') || 
           element.classList.contains('ant-modal-confirm-title') ||
           element.classList.contains('ant-select-selection-item') ||
           element.classList.contains('ant-menu-title-content') ||
           element.classList.contains('ant-form-item-label') ||
           element.classList.contains('ant-tabs-tab-btn') ||
           element.classList.contains('ant-table-column-title') ||
           element.classList.contains('ant-card-head-title') ||
           element.classList.contains('ant-list-item-meta-title') ||
           element.classList.contains('ant-list-item-meta-description'))) {
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
  
  // 翻译项目界面特定元素的翻译
  function translateProjectUI() {
    try {
      // 检查是否在项目页面
      if (window.location.pathname.includes('/projects') || window.location.pathname === '/') {
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
        document.querySelectorAll('.ant-menu-item, .ant-tabs-tab, .ant-select-item, .ant-dropdown-menu-item').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译表格标题和内容
        document.querySelectorAll('.ant-table-cell, .ant-table-column-title, .ant-table-column-sorter-up, .ant-table-column-sorter-down').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译模态框标题和内容
        document.querySelectorAll('.ant-modal-title, .ant-modal-confirm-title, .ant-modal-confirm-content, .ant-modal-body, .ant-modal-footer').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译表单标签和描述
        document.querySelectorAll('.ant-form-item-label, .ant-form-item-explain, .ant-form-item-extra').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译下拉菜单
        document.querySelectorAll('.ant-select-dropdown, .ant-dropdown, .ant-dropdown-menu, .ant-select-dropdown-menu').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            translateElement(el);
          }
        });
        
        // 翻译卡片标题和内容
        document.querySelectorAll('.ant-card-head-title, .ant-card-extra, .ant-card-meta-title, .ant-card-meta-description').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译提示文本
        document.querySelectorAll('.ant-tooltip-inner, .ant-popover-inner-content').forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译输入框和文本域的占位符
        document.querySelectorAll('input, textarea').forEach(el => {
          if (el.placeholder) {
            el.placeholder = translate(el.placeholder);
          }
        });
        
        // 特别处理模板列表和卡片
        translateTemplateCards();
        
        // 特别处理模板分类按钮和标题
        translateTemplateCategories();
      }
    } catch (e) {
      console.error("翻译项目UI出错:", e);
    }
  }
  
  // 特别处理模板卡片
  function translateTemplateCards() {
    try {
      // 查找所有模板卡片
      document.querySelectorAll('.ant-card, .ant-list-item, [class*="card"], [class*="template"], [class*="Card"], [class*="Template"]').forEach(card => {
        // 翻译卡片标题
        const titleEls = card.querySelectorAll('.ant-card-meta-title, .ant-list-item-meta-title, h3, h4, [class*="title"], [class*="Title"], [class*="name"], [class*="Name"]');
        titleEls.forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译卡片描述
        const descEls = card.querySelectorAll('.ant-card-meta-description, .ant-list-item-meta-description, p, [class*="description"], [class*="Description"]');
        descEls.forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
        
        // 翻译卡片底部按钮
        const btnEls = card.querySelectorAll('button, .ant-btn, [role="button"], [class*="button"], [class*="Button"]');
        btnEls.forEach(el => {
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        });
      });
    } catch (e) {
      console.error("翻译模板卡片出错:", e);
    }
  }
  
  // 特别处理模板分类
  function translateTemplateCategories() {
    try {
      // 处理模板分类标题和按钮
      document.querySelectorAll('.ant-radio-group .ant-radio-button-wrapper, [role="tab"], [class*="category"], [class*="Category"], [class*="tab"], [class*="Tab"]').forEach(el => {
        if (el.textContent && el.textContent.trim()) {
          const text = el.textContent.trim();
          const translated = translate(text);
          if (translated !== text) {
            el.textContent = translated;
          }
        }
      });
      
      // 处理特定的模板分类和名称
      document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, div, p, label, [class*="filter"], [class*="Filter"]').forEach(el => {
        // 检查元素的类名或属性，确定是否可能是模板名称或分类
        const isTemplateElement = el.classList.contains('template-name') || 
                                el.classList.contains('template-category') ||
                                el.classList.contains('template-title') ||
                                el.closest('.template-card') ||
                                el.closest('.template-list') ||
                                el.closest('[class*="template"]') ||
                                el.closest('[class*="Template"]') ||
                                el.parentElement && (
                                  el.parentElement.classList.contains('ant-radio-button-wrapper') ||
                                  el.parentElement.getAttribute('role') === 'tab'
                                );
        
        if (isTemplateElement || 
            (el.textContent && 
             (el.textContent.includes('Vision') || 
              el.textContent.includes('Language') || 
              el.textContent.includes('Processing') ||
              el.textContent.includes('Detection') || 
              el.textContent.includes('Classification') || 
              el.textContent.includes('Recognition') ||
              el.textContent.includes('Segmentation') ||
              el.textContent.includes('Audio') ||
              el.textContent.includes('Speech') ||
              el.textContent.includes('Time Series') ||
              el.textContent.includes('Multi-modal') ||
              el.textContent.includes('Conversational')))) {
          
          if (el.textContent && el.textContent.trim()) {
            const text = el.textContent.trim();
            const translated = translate(text);
            if (translated !== text) {
              el.textContent = translated;
            }
          }
        }
      });
    } catch (e) {
      console.error("翻译模板分类出错:", e);
    }
  }
  
  // 拦截API响应，处理模板数据
  function interceptTemplateAPI() {
    try {
      const originalFetch = window.fetch;
      
      window.fetch = function(url, options) {
        const fetchPromise = originalFetch.call(this, url, options);
        
        // 检查是否是模板API
        if (typeof url === 'string' && url.includes('/api/templates')) {
          fetchPromise.then(response => {
            // 克隆响应
            const clonedResponse = response.clone();
            
            // 处理响应
            clonedResponse.json().then(data => {
              console.log("拦截到模板API响应，准备翻译模板数据");
              
              // 稍后翻译模板UI
              setTimeout(() => {
                console.log("开始翻译模板UI");
                translateTemplateCards();
                translateTemplateCategories();
                
                // 强制翻译所有可能的模板元素
                forceTranslateTemplates();
              }, 500);
              
              // 再次延迟翻译，确保动态内容被处理
              setTimeout(() => {
                console.log("再次翻译模板UI");
                translateTemplateCards();
                translateTemplateCategories();
                forceTranslateTemplates();
              }, 1500);
            }).catch(e => {
              console.error("处理模板API响应出错:", e);
            });
          });
        }
        
        return fetchPromise;
      };
      
      console.log("成功拦截模板API请求");
    } catch (e) {
      console.error("拦截模板API失败:", e);
    }
  }
  
  // 强制翻译所有可能的模板相关元素
  function forceTranslateTemplates() {
    try {
      // 1. 找到所有可能包含"Computer Vision"等文本的元素
      document.querySelectorAll('*').forEach(el => {
        if (el.childNodes && el.childNodes.length > 0) {
          for (let i = 0; i < el.childNodes.length; i++) {
            const node = el.childNodes[i];
            if (node.nodeType === 3 && node.textContent) { // 文本节点
              const text = node.textContent.trim();
              if (text && (
                  text.includes('Computer Vision') ||
                  text.includes('Natural Language') ||
                  text.includes('Audio/Speech') ||
                  text.includes('Time Series') ||
                  text.includes('Multi-modal') ||
                  text.includes('Segmentation') ||
                  text.includes('Detection') ||
                  text.includes('Recognition') ||
                  text.includes('Classification') ||
                  text.includes('templates')
                )) {
                const translated = translate(text);
                if (translated !== text) {
                  node.textContent = node.textContent.replace(text, translated);
                  console.log(`强制翻译: "${text}" -> "${translated}"`);
                }
              }
            }
          }
        }
      });
      
      // 2. 专门处理特殊区域
      const templateSelectors = [
        '[class*="template"]', '[class*="Template"]',
        '[class*="category"]', '[class*="Category"]',
        '[class*="card"]', '[class*="Card"]',
        '[class*="filter"]', '[class*="Filter"]',
        '[class*="tab"]', '[class*="Tab"]',
        '[class*="list"]', '[class*="List"]'
      ];
      
      templateSelectors.forEach(selector => {
        try {
          document.querySelectorAll(selector).forEach(el => {
            translateElement(el);
          });
        } catch (e) {
          console.error(`处理选择器${selector}出错:`, e);
        }
      });
    } catch (e) {
      console.error("强制翻译模板出错:", e);
    }
  }
  
  // 翻译所有DOM
  function translateAll() {
    try {
      if (document.body) {
        translateElement(document.body);
        translateProjectUI();
        translateTemplateCards(); // 额外确保模板卡片被翻译
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
        
        // 如果有元素被添加，尝试专门翻译项目UI和模板卡片
        if (shouldTranslate) {
          setTimeout(() => {
            translateProjectUI();
            translateTemplateCards();
          }, 100);
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
  
  // 拦截React组件渲染
  function interceptReact() {
    try {
      // 如果React已经加载
      if (window.React && window.React.createElement) {
        const originalCreateElement = window.React.createElement;
        
        window.React.createElement = function(type, props, ...children) {
          // 翻译props中的文本属性
          if (props) {
            for (const key in props) {
              if (typeof props[key] === 'string') {
                props[key] = translate(props[key]);
              }
            }
          }
          
          // 翻译子元素中的文本
          if (children && children.length) {
            children = children.map(child => {
              if (typeof child === 'string') {
                return translate(child);
              }
              return child;
            });
          }
          
          return originalCreateElement.apply(this, [type, props, ...children]);
        };
        
        console.log("成功拦截React.createElement方法");
      } else {
        // 如果React还没有加载，等待React加载
        Object.defineProperty(window, 'React', {
          configurable: true,
          set: function(value) {
            if (value && value.createElement) {
              const originalCreateElement = value.createElement;
              
              value.createElement = function(type, props, ...children) {
                // 翻译props中的文本属性
                if (props) {
                  for (const key in props) {
                    if (typeof props[key] === 'string') {
                      props[key] = translate(props[key]);
                    }
                  }
                }
                
                // 翻译子元素中的文本
                if (children && children.length) {
                  children = children.map(child => {
                    if (typeof child === 'string') {
                      return translate(child);
                    }
                    return child;
                  });
                }
                
                return originalCreateElement.apply(this, [type, props, ...children]);
              };
            }
            
            // 保存React对象
            Object.defineProperty(window, 'React', {
              configurable: true,
              writable: true,
              value: value
            });
          },
          get: function() {
            return undefined;
          }
        });
        
        console.log("设置了React拦截器，等待React加载");
      }
    } catch (e) {
      console.error("拦截React失败:", e);
    }
  }
  
  // 拦截网络请求，为请求添加语言标头
  function interceptFetch() {
    try {
      const originalFetch = window.fetch;
      
      window.fetch = function(url, options) {
        options = options || {};
        options.headers = options.headers || {};
        
        // 添加语言标头
        options.headers['Accept-Language'] = 'zh-hans';
        
        return originalFetch.call(this, url, options);
      };
      
      console.log("成功拦截fetch请求，添加语言标头");
    } catch (e) {
      console.error("拦截fetch失败:", e);
    }
  }
  
  // 初始化
  function init() {
    console.log("正在初始化项目界面翻译...");
    
    // 设置语言
    document.documentElement.lang = "zh-hans";
    if (window.APP_SETTINGS) window.APP_SETTINGS.language = "zh-hans";
    window.LANGUAGE_CODE = "zh-hans";
    
    // 拦截React组件渲染
    interceptReact();
    
    // 拦截网络请求
    interceptFetch();
    
    // 拦截模板API
    interceptTemplateAPI();
    
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
    
    // 检查是否在模板页面，如果是则执行特殊处理
    if (window.location.href.includes('/projects') && document.readyState === 'complete') {
      console.log("检测到可能在模板页面，执行特殊处理");
      setTimeout(() => {
        translateTemplateCards();
        translateTemplateCategories();
        forceTranslateTemplates();
      }, 1000);
    }
    
    console.log("项目界面翻译初始化完成");
  }
  
  // 模拟用户在界面上点击过滤器
  function simulateFilterClicks() {
    setTimeout(() => {
      // 查找并点击模板过滤器，触发更多模板加载
      const filterButtons = Array.from(document.querySelectorAll('button, [role="tab"], .ant-radio-button-wrapper'));
      const templateFilterButtons = filterButtons.filter(btn => 
        btn.textContent && (
          btn.textContent.includes('Computer Vision') || 
          btn.textContent.includes('Natural Language') || 
          btn.textContent.includes('计算机视觉') || 
          btn.textContent.includes('自然语言')
        )
      );
      
      if (templateFilterButtons.length > 0) {
        console.log("找到模板过滤器按钮，模拟点击以触发更多模板加载");
        // 记录当前激活的按钮
        const activeButton = templateFilterButtons.find(btn => 
          btn.classList.contains('active') || 
          btn.classList.contains('ant-radio-button-wrapper-checked')
        );
        
        // 按顺序点击每个过滤器按钮，然后回到原始选择
        templateFilterButtons.forEach((btn, index) => {
          setTimeout(() => {
            btn.click();
            console.log(`点击过滤器按钮: ${btn.textContent}`);
            
            // 每次点击后翻译新加载的内容
            setTimeout(() => {
              translateTemplateCards();
              translateTemplateCategories();
              forceTranslateTemplates();
            }, 300);
          }, index * 1000);
        });
        
        // 恢复到原始状态
        if (activeButton) {
          setTimeout(() => {
            activeButton.click();
            console.log("恢复到原始过滤器状态");
          }, templateFilterButtons.length * 1000 + 500);
        }
      }
    }, 2000);
  }
  
  // 页面加载完后执行初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // 延迟执行模拟点击，确保页面完全加载
  if (window.location.href.includes('/projects')) {
    window.addEventListener('load', simulateFilterClicks);
  }
})(); 