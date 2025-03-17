// 模板界面专用翻译脚本
(function() {
  console.log("模板翻译脚本已加载...");
  
  // 模板界面的翻译字典
  const templateTranslations = {
    // 模板类别
    "Computer Vision": "计算机视觉",
    "COMPUTER VISION": "计算机视觉",
    "Computer vision": "计算机视觉",
    "computer vision": "计算机视觉",
    
    "Natural Language": "自然语言",
    "NATURAL LANGUAGE": "自然语言",
    "Natural language": "自然语言",
    "natural language": "自然语言",
    
    "Natural Language Processing": "自然语言处理",
    "NATURAL LANGUAGE PROCESSING": "自然语言处理",
    "Natural language processing": "自然语言处理",
    "natural language processing": "自然语言处理",
    
    "Audio/Speech": "音频/语音",
    "AUDIO/SPEECH": "音频/语音",
    "Audio/speech": "音频/语音",
    "audio/speech": "音频/语音",
    
    "Audio/Speech Processing": "音频/语音处理",
    "AUDIO/SPEECH PROCESSING": "音频/语音处理",
    "Audio/speech processing": "音频/语音处理",
    "audio/speech processing": "音频/语音处理",
    
    "Time Series": "时间序列",
    "TIME SERIES": "时间序列",
    "Time series": "时间序列",
    "time series": "时间序列",
    
    "Time Series Analysis": "时间序列分析",
    "TIME SERIES ANALYSIS": "时间序列分析",
    "Time series analysis": "时间序列分析",
    "time series analysis": "时间序列分析",
    
    "Multi-modal": "多模态",
    "MULTI-MODAL": "多模态",
    "Multi-Modal": "多模态",
    "multi-modal": "多模态",
    
    "Conversational AI": "对话式AI",
    "CONVERSATIONAL AI": "对话式AI",
    "Conversational ai": "对话式AI",
    "conversational ai": "对话式AI",
    
    "Table": "表格",
    "TABLE": "表格",
    "table": "表格",
    
    "Ranking": "排名",
    "RANKING": "排名",
    "ranking": "排名",
    
    "Ranking and Scoring": "排名和评分",
    "RANKING AND SCORING": "排名和评分",
    "Ranking and scoring": "排名和评分",
    "ranking and scoring": "排名和评分",
    
    "Other": "其他",
    "OTHER": "其他",
    "other": "其他",
    
    // 新增类别翻译
    "Structured Data Parsing": "结构化数据解析",
    "STRUCTURED DATA PARSING": "结构化数据解析",
    "Structured data parsing": "结构化数据解析",
    "structured data parsing": "结构化数据解析",
    
    "Generative AI": "生成式AI",
    "GENERATIVE AI": "生成式AI",
    "Generative ai": "生成式AI",
    "generative ai": "生成式AI",

    "Generative": "生成式",
    "GENERATIVE": "生成式",
    "generative": "生成式",
    
    "Document Processing": "文档处理",
    "DOCUMENT PROCESSING": "文档处理",
    "Document processing": "文档处理",
    "document processing": "文档处理",
    
    "Content Moderation": "内容审核",
    "CONTENT MODERATION": "内容审核",
    "Content moderation": "内容审核",
    "content moderation": "内容审核",
    
    "Evaluation": "评估",
    "EVALUATION": "评估",
    "evaluation": "评估",
    
    "RAG": "检索增强生成",
    "Rag": "检索增强生成",
    "rag": "检索增强生成",
    
    // 模板名称
    "Semantic Segmentation with Polygons": "使用多边形的语义分割",
    "SEMANTIC SEGMENTATION WITH POLYGONS": "使用多边形的语义分割",
    "Semantic segmentation with polygons": "使用多边形的语义分割",
    "semantic segmentation with polygons": "使用多边形的语义分割",
    
    "Semantic Segmentation with Masks": "使用蒙版的语义分割",
    "SEMANTIC SEGMENTATION WITH MASKS": "使用蒙版的语义分割",
    "Semantic segmentation with masks": "使用蒙版的语义分割",
    "semantic segmentation with masks": "使用蒙版的语义分割",
    
    "Image Classification": "图像分类",
    "IMAGE CLASSIFICATION": "图像分类",
    "Image classification": "图像分类",
    "image classification": "图像分类",
    
    "Object Detection with Bounding Boxes": "使用边界框的目标检测",
    "OBJECT DETECTION WITH BOUNDING BOXES": "使用边界框的目标检测",
    "Object detection with bounding boxes": "使用边界框的目标检测",
    "object detection with bounding boxes": "使用边界框的目标检测",
    
    "Keypoints": "关键点标注",
    "KEYPOINTS": "关键点标注",
    "keypoints": "关键点标注",
    
    "Keypoint Labeling": "关键点标注",
    "KEYPOINT LABELING": "关键点标注",
    "Keypoint labeling": "关键点标注",
    "keypoint labeling": "关键点标注",
    
    "Visual Genome": "视觉基因组",
    "VISUAL GENOME": "视觉基因组",
    "Visual genome": "视觉基因组",
    "visual genome": "视觉基因组",
    
    "Image Captioning": "图像描述",
    "IMAGE CAPTIONING": "图像描述",
    "Image captioning": "图像描述",
    "image captioning": "图像描述",
    
    "Named Entity Recognition": "命名实体识别",
    "NAMED ENTITY RECOGNITION": "命名实体识别",
    "Named entity recognition": "命名实体识别",
    "named entity recognition": "命名实体识别",
    
    "Text Classification": "文本分类",
    "TEXT CLASSIFICATION": "文本分类",
    "Text classification": "文本分类",
    "text classification": "文本分类",
    
    "Relation Extraction": "关系抽取",
    "RELATION EXTRACTION": "关系抽取",
    "Relation extraction": "关系抽取",
    "relation extraction": "关系抽取",
    
    "Question Answering": "问答",
    "QUESTION ANSWERING": "问答",
    "Question answering": "问答",
    "question answering": "问答",
    
    "Intent Classification": "意图分类",
    "INTENT CLASSIFICATION": "意图分类",
    "Intent classification": "意图分类",
    "intent classification": "意图分类",
    
    "Optical Character Recognition": "光学字符识别",
    "OPTICAL CHARACTER RECOGNITION": "光学字符识别",
    "Optical character recognition": "光学字符识别",
    "optical character recognition": "光学字符识别",
    
    "Visual Question Answering": "视觉问答",
    "VISUAL QUESTION ANSWERING": "视觉问答",
    "Visual question answering": "视觉问答",
    "visual question answering": "视觉问答",
    
    // 新增模板名称翻译
    "HTML Entity Recognition": "HTML实体识别",
    "HTML ENTITY RECOGNITION": "HTML实体识别",
    "Html entity recognition": "HTML实体识别",
    "html entity recognition": "HTML实体识别",
    
    "PDF Classification": "PDF文档分类",
    "PDF CLASSIFICATION": "PDF文档分类",
    "Pdf classification": "PDF文档分类",
    "pdf classification": "PDF文档分类",
    
    "Tabular Data": "表格数据",
    "TABULAR DATA": "表格数据",
    "Tabular data": "表格数据",
    "tabular data": "表格数据",
    
    "Freeform Metadata": "自由格式元数据",
    "FREEFORM METADATA": "自由格式元数据",
    "Freeform metadata": "自由格式元数据",
    "freeform metadata": "自由格式元数据",
    
    "Generative Supervised LLM": "生成式监督LLM",
    "GENERATIVE SUPERVISED LLM": "生成式监督LLM",
    "Generative supervised llm": "生成式监督LLM",
    "generative supervised llm": "生成式监督LLM",
    
    "LLM Ranker": "LLM排名器",
    "LLM RANKER": "LLM排名器",
    "Llm ranker": "LLM排名器",
    "llm ranker": "LLM排名器",
    
    "Generative Chatbot Assessment": "生成式聊天机器人评估",
    "GENERATIVE CHATBOT ASSESSMENT": "生成式聊天机器人评估",
    "Generative chatbot assessment": "生成式聊天机器人评估",
    "generative chatbot assessment": "生成式聊天机器人评估",
    
    "Generative Pairwise Human Preference": "生成式成对人类偏好",
    "GENERATIVE PAIRWISE HUMAN PREFERENCE": "生成式成对人类偏好",
    "Generative pairwise human preference": "生成式成对人类偏好",
    "generative pairwise human preference": "生成式成对人类偏好",
    
    "Visual Ranker": "视觉排名器",
    "VISUAL RANKER": "视觉排名器",
    "Visual ranker": "视觉排名器",
    "visual ranker": "视觉排名器",
    
    "Evaluate RAG Human Feedback": "评估RAG人类反馈",
    "EVALUATE RAG HUMAN FEEDBACK": "评估RAG人类反馈",
    "Evaluate rag human feedback": "评估RAG人类反馈",
    "evaluate rag human feedback": "评估RAG人类反馈",
    
    "Evaluate RAG Automated Metrics": "评估RAG自动化指标",
    "EVALUATE RAG AUTOMATED METRICS": "评估RAG自动化指标",
    "Evaluate rag automated metrics": "评估RAG自动化指标",
    "evaluate rag automated metrics": "评估RAG自动化指标",
    
    "Multi-turn Chat": "多轮对话",
    "MULTI-TURN CHAT": "多轮对话",
    "Multi-turn chat": "多轮对话",
    "multi-turn chat": "多轮对话",
    
    "Side-by-side Comparison": "并排比较",
    "SIDE-BY-SIDE COMPARISON": "并排比较",
    "Side-by-side comparison": "并排比较",
    "side-by-side comparison": "并排比较",
    
    "Multi-page document annotation": "多页文档标注",
    "MULTI-PAGE DOCUMENT ANNOTATION": "多页文档标注",
    "Multi-page Document Annotation": "多页文档标注",
    "multi-page document annotation": "多页文档标注",
    
    "Multipage": "多页文档",
    "MULTIPAGE": "多页文档",
    "multipage": "多页文档",
    
    "Machine Translation": "机器翻译",
    "MACHINE TRANSLATION": "机器翻译",
    "Machine translation": "机器翻译",
    "machine translation": "机器翻译",
    
    "Signal Quality Detection": "信号质量检测",
    "SIGNAL QUALITY DETECTION": "信号质量检测",
    "Signal quality detection": "信号质量检测",
    "signal quality detection": "信号质量检测",
    
    "Signal Quality": "信号质量",
    "SIGNAL QUALITY": "信号质量",
    "Signal quality": "信号质量",
    "signal quality": "信号质量",
    
    "Response Generation": "响应生成",
    "RESPONSE GENERATION": "响应生成",
    "Response generation": "响应生成",
    "response generation": "响应生成",
    
    "Response Selection": "响应选择",
    "RESPONSE SELECTION": "响应选择",
    "Response selection": "响应选择",
    "response selection": "响应选择",
    
    "ASR Hypotheses Selection": "ASR假设选择",
    "ASR HYPOTHESES SELECTION": "ASR假设选择",
    "Asr hypotheses selection": "ASR假设选择",
    "asr hypotheses selection": "ASR假设选择",
    
    "ASR Hypotheses": "ASR假设",
    "ASR HYPOTHESES": "ASR假设",
    "Asr hypotheses": "ASR假设",
    "asr hypotheses": "ASR假设",
    
    "Activity Recognition": "活动识别",
    "ACTIVITY RECOGNITION": "活动识别",
    "Activity recognition": "活动识别",
    "activity recognition": "活动识别",
    
    "Video Object Tracking": "视频目标跟踪",
    "VIDEO OBJECT TRACKING": "视频目标跟踪",
    "Video object tracking": "视频目标跟踪",
    "video object tracking": "视频目标跟踪",
    
    "Video Classification": "视频分类",
    "VIDEO CLASSIFICATION": "视频分类",
    "Video classification": "视频分类",
    "video classification": "视频分类",
    
    "Video Frame Classification": "视频帧分类",
    "VIDEO FRAME CLASSIFICATION": "视频帧分类",
    "Video frame classification": "视频帧分类",
    "video frame classification": "视频帧分类",
    
    "Video Timeline Segmentation": "视频时间轴分割",
    "VIDEO TIMELINE SEGMENTATION": "视频时间轴分割",
    "Video timeline segmentation": "视频时间轴分割",
    "video timeline segmentation": "视频时间轴分割",
    
    "Videos": "视频",
    "VIDEOS": "视频",
    "videos": "视频",
    
    "Chatbot Model Assessment": "聊天机器人模型评估",
    "CHATBOT MODEL ASSESSMENT": "聊天机器人模型评估",
    "Chatbot model assessment": "聊天机器人模型评估",
    "chatbot model assessment": "聊天机器人模型评估",
    
    "Text-to-Image": "文本生成图像",
    "TEXT-TO-IMAGE": "文本生成图像",
    "Text-to-image": "文本生成图像",
    "text-to-image": "文本生成图像",
    
    "SERP Ranking": "搜索引擎结果页排名",
    "SERP RANKING": "搜索引擎结果页排名",
    "Serp ranking": "搜索引擎结果页排名",
    "serp ranking": "搜索引擎结果页排名",
    
    "Document Retrieval": "文档检索",
    "DOCUMENT RETRIEVAL": "文档检索",
    "Document retrieval": "文档检索",
    "document retrieval": "文档检索",
    
    "Content-based Image Search": "基于内容的图像搜索",
    "CONTENT-BASED IMAGE SEARCH": "基于内容的图像搜索",
    "Content-based image search": "基于内容的图像搜索",
    "content-based image search": "基于内容的图像搜索",
    
    "Pairwise Classification": "成对分类",
    "PAIRWISE CLASSIFICATION": "成对分类",
    "Pairwise classification": "成对分类",
    "pairwise classification": "成对分类",
    
    "Pairwise Regression": "成对回归",
    "PAIRWISE REGRESSION": "成对回归",
    "Pairwise regression": "成对回归",
    "pairwise regression": "成对回归",
    
    "Time Series Forecasting": "时间序列预测",
    "TIME SERIES FORECASTING": "时间序列预测",
    "Time series forecasting": "时间序列预测",
    "time series forecasting": "时间序列预测",
    
    "Change Point Detection": "变点检测",
    "CHANGE POINT DETECTION": "变点检测",
    "Change point detection": "变点检测",
    "change point detection": "变点检测",
    
    "Outliers & Anomaly Detection": "异常值和异常检测",
    "OUTLIERS & ANOMALY DETECTION": "异常值和异常检测",
    "Outliers & anomaly detection": "异常值和异常检测",
    "outliers & anomaly detection": "异常值和异常检测",
    
    // 新增翻译
    "Inventory Tracking": "库存跟踪",
    "INVENTORY TRACKING": "库存跟踪",
    "Inventory tracking": "库存跟踪",
    "inventory tracking": "库存跟踪",
    
    "Taxonomy": "分类法",
    "TAXONOMY": "分类法",
    "taxonomy": "分类法",
    
    "Text Summarization": "文本摘要",
    "TEXT SUMMARIZATION": "文本摘要",
    "Text summarization": "文本摘要",
    "text summarization": "文本摘要",
    
    "Automatic Speech Recognition": "自动语音识别",
    "AUTOMATIC SPEECH RECOGNITION": "自动语音识别",
    "Automatic speech recognition": "自动语音识别",
    "automatic speech recognition": "自动语音识别",
    
    "Sound Event Detection": "声音事件检测",
    "SOUND EVENT DETECTION": "声音事件检测",
    "Sound event detection": "声音事件检测",
    "sound event detection": "声音事件检测",
    
    "Coreference Resolution & Entity Linking": "共指消解与实体链接",
    "COREFERENCE RESOLUTION & ENTITY LINKING": "共指消解与实体链接",
    "Coreference resolution & entity linking": "共指消解与实体链接",
    "coreference resolution & entity linking": "共指消解与实体链接",
    
    "Coreference Resolution": "共指消解",
    "COREFERENCE RESOLUTION": "共指消解",
    "Coreference resolution": "共指消解",
    "coreference resolution": "共指消解",
    
    "Entity Linking": "实体链接",
    "ENTITY LINKING": "实体链接",
    "Entity linking": "实体链接",
    "entity linking": "实体链接",
    
    "Content-based Image Retrieval": "基于内容的图像检索",
    "CONTENT-BASED IMAGE RETRIEVAL": "基于内容的图像检索",
    "Content-based image retrieval": "基于内容的图像检索",
    "content-based image retrieval": "基于内容的图像检索",
    
    "Supervised Language Model Fine-tuning": "监督式语言模型微调",
    "SUPERVISED LANGUAGE MODEL FINE-TUNING": "监督式语言模型微调",
    "Supervised language model fine-tuning": "监督式语言模型微调",
    "supervised language model fine-tuning": "监督式语言模型微调",
    
    "Human Preference collection for RLHF": "用于RLHF的人类偏好收集",
    "HUMAN PREFERENCE COLLECTION FOR RLHF": "用于RLHF的人类偏好收集",
    "Human preference collection for RLHF": "用于RLHF的人类偏好收集",
    "human preference collection for RLHF": "用于RLHF的人类偏好收集",
    
    "RLHF": "强化学习人类反馈",
    "rlhf": "强化学习人类反馈",
    
    "Browse Templates": "浏览模板",
    "BROWSE TEMPLATES": "浏览模板",
    "Browse templates": "浏览模板",
    "browse templates": "浏览模板",
    
    "Regions": "区域",
    "REGIONS": "区域",
    "regions": "区域",
    
    "Info": "信息",
    "INFO": "信息",
    "info": "信息",
    
    "Audio Transcription": "音频转录",
    "AUDIO TRANSCRIPTION": "音频转录",
    "Audio transcription": "音频转录",
    "audio transcription": "音频转录",
    
    "Speaker Diarization": "说话人分离",
    "SPEAKER DIARIZATION": "说话人分离",
    "Speaker diarization": "说话人分离",
    "speaker diarization": "说话人分离",
    
    "Search Relevance": "搜索相关性",
    "SEARCH RELEVANCE": "搜索相关性",
    "Search relevance": "搜索相关性",
    "search relevance": "搜索相关性",
    
    "Question Answering with Passage Retrieval": "带段落检索的问答",
    "QUESTION ANSWERING WITH PASSAGE RETRIEVAL": "带段落检索的问答",
    "Question answering with passage retrieval": "带段落检索的问答",
    "question answering with passage retrieval": "带段落检索的问答",
    
    "Passage Retrieval": "段落检索",
    "PASSAGE RETRIEVAL": "段落检索",
    "Passage retrieval": "段落检索",
    "passage retrieval": "段落检索",
    
    // 新增翻译
    "Speaker Segmentation": "说话人分割",
    "SPEAKER SEGMENTATION": "说话人分割",
    "Speaker segmentation": "说话人分割",
    "speaker segmentation": "说话人分割",
    
    "Speech Transcription": "语音转录",
    "SPEECH TRANSCRIPTION": "语音转录",
    "Speech transcription": "语音转录",
    "speech transcription": "语音转录",
    
    "using Segments": "使用片段",
    "USING SEGMENTS": "使用片段",
    "Using segments": "使用片段",
    "using segments": "使用片段",
    
    "and Slot Filling": "和槽位填充",
    "AND SLOT FILLING": "和槽位填充",
    "And slot filling": "和槽位填充",
    "and slot filling": "和槽位填充",
    
    "Slot Filling": "槽位填充",
    "SLOT FILLING": "槽位填充",
    "Slot filling": "槽位填充",
    "slot filling": "槽位填充",
    
    "History": "历史",
    "HISTORY": "历史",
    "history": "历史",
    
    "Histroy": "历史",
    "HISTROY": "历史",
    "histroy": "历史",
    
    "Relations": "关系",
    "RELATIONS": "关系",
    "relations": "关系",
    
    "Code": "代码",
    "CODE": "代码",
    "code": "代码",
    
    "Visual": "可视化",
    "VISUAL": "可视化",
    "visual": "可视化",
    
    "not added": "未添加",
    "NOT ADDED": "未添加",
    "Not added": "未添加",
    
    "UI Preview": "UI预览",
    "UI PREVIEW": "UI预览",
    "Ui preview": "UI预览",
    "ui preview": "UI预览",
    
    "Manual": "手动",
    "MANUAL": "手动",
    "manual": "手动",
    
    "By Time": "按时间",
    "BY TIME": "按时间",
    "By time": "按时间",
    "by time": "按时间",
    
    "Annotation History": "标注历史",
    "ANNOTATION HISTORY": "标注历史",
    "Annotation history": "标注历史",
    "annotation history": "标注历史",
    
    "Selection Details": "选择详情",
    "SELECTION DETAILS": "选择详情",
    "Selection details": "选择详情",
    "selection details": "选择详情",
    
    "Details": "详情",
    "DETAILS": "详情",
    "details": "详情",
    
    "Selection": "选择",
    "SELECTION": "选择",
    "selection": "选择",
    
    "Emotion Recognition": "情感识别",
    "EMOTION RECOGNITION": "情感识别", 
    "Emotion recognition": "情感识别",
    "emotion recognition": "情感识别",
    
    "Segments": "片段",
    "SEGMENTS": "片段",
    "segments": "片段",
    
    "Dialog": "对话",
    "DIALOG": "对话",
    "dialog": "对话",
    
    "Tasks": "任务",
    "TASKS": "任务",
    "tasks": "任务",
    
    "Projects": "项目",
    "PROJECTS": "项目",
    "projects": "项目",
    
    "Settings": "设置",
    "SETTINGS": "设置",
    "settings": "设置",
    
    "Create": "创建",
    "CREATE": "创建",
    "create": "创建",
    
    "Add": "添加",
    "ADD": "添加",
    "add": "添加",
    
    "Delete": "删除",
    "DELETE": "删除",
    "delete": "删除",
    
    // 新增术语翻译
    "Conversational Analysis": "对话分析",
    "CONVERSATIONAL ANALYSIS": "对话分析",
    "Conversational analysis": "对话分析",
    "conversational analysis": "对话分析",
    
    "& Scoring": "与评分",
    "& SCORING": "与评分",
    "& scoring": "与评分",
    
    "Generation": "生成",
    "GENERATION": "生成",
    "generation": "生成",
    
    "Search Page": "搜索页面",
    "SEARCH PAGE": "搜索页面",
    "Search page": "搜索页面",
    "search page": "搜索页面",
    
    "Dataset URL": "数据集URL",
    "DATASET URL": "数据集URL",
    "Dataset url": "数据集URL",
    "dataset url": "数据集URL",
    
    "Add URL": "添加URL",
    "ADD URL": "添加URL",
    "Add url": "添加URL",
    "add url": "添加URL",
    
    "Files": "文件",
    "FILES": "文件",
    "files": "文件",
    
    "Drag & drop files here": "将文件拖放到这里",
    "DRAG & DROP FILES HERE": "将文件拖放到这里",
    "Drag & drop Files here": "将文件拖放到这里",
    "drag & drop files here": "将文件拖放到这里",
    
    "or click to browse": "或点击浏览",
    "OR CLICK TO BROWSE": "或点击浏览",
    "Or click to browse": "或点击浏览",
    "or Click to browse": "或点击浏览",
    
    "Images": "图片",
    "IMAGES": "图片",
    "images": "图片",
    
    "Common Formats": "常见格式",
    "COMMON FORMATS": "常见格式",
    "Common formats": "常见格式",
    "common formats": "常见格式",
    
    "Support depends on the browser": "支持取决于浏览器",
    "SUPPORT DEPENDS ON THE BROWSER": "支持取决于浏览器",
    "Support Depends on the Browser": "支持取决于浏览器",
    "support depends on the browser": "支持取决于浏览器",
    
    "Direct media uploads have limitations and we strongly recommend using Cloud Storage instead": "直接媒体上传有限制，我们强烈建议使用云存储",
    
    "Optional description of your project": "项目的可选描述",
    
    "Default": "默认",
    "DEFAULT": "默认",
    "default": "默认",
    
    "Actions": "操作",
    "ACTIONS": "操作",
    "actions": "操作",
    
    "Columns": "列",
    "COLUMNS": "列",
    "columns": "列",
    
    "Filters": "筛选器",
    "FILTERS": "筛选器",
    "filters": "筛选器",
    
    "not set": "未设置",
    "NOT SET": "未设置",
    "Not set": "未设置",
    
    "Looks like you have not imported any data yet": "看起来您还没有导入任何数据",
    
    "Go to import": "去导入",
    "GO TO IMPORT": "去导入",
    "Go To Import": "去导入",
    "go to import": "去导入",
    
    "Grid": "网格",
    "GRID": "网格",
    "grid": "网格",
    
    "Cancelled": "已取消",
    "CANCELLED": "已取消",
    "cancelled": "已取消",
    
    "Annotated by": "标注者",
    "ANNOTATED BY": "标注者",
    "Annotated By": "标注者",
    "annotated by": "标注者",
    
    "Annotation results": "标注结果",
    "ANNOTATION RESULTS": "标注结果",
    "Annotation Results": "标注结果",
    "annotation results": "标注结果",
    
    "Drafts": "草稿",
    "DRAFTS": "草稿",
    "drafts": "草稿",
    
    "No filters applied": "未应用筛选器",
    "NO FILTERS APPLIED": "未应用筛选器",
    "No Filters Applied": "未应用筛选器",
    "no filters applied": "未应用筛选器",
    
    "Annotation": "标注",
    "ANNOTATION": "标注",
    "annotation": "标注",
    
    "Model": "模型",
    "MODEL": "模型",
    "model": "模型",
    
    "Cloud Storage": "云存储",
    "CLOUD STORAGE": "云存储",
    "Cloud storage": "云存储",
    "cloud storage": "云存储",
    
    "Danger Zone": "危险区域",
    "DANGER ZONE": "危险区域",
    "Danger zone": "危险区域",
    "danger zone": "危险区域",
    
    "Color": "颜色",
    "COLOR": "颜色",
    "color": "颜色",
    
    "Task Sampling": "任务采样",
    "TASK SAMPLING": "任务采样",
    "Task sampling": "任务采样",
    "task sampling": "任务采样",
    
    "Sequential sampling": "顺序采样",
    "SEQUENTIAL SAMPLING": "顺序采样",
    "Sequential Sampling": "顺序采样",
    "sequential sampling": "顺序采样",
    
    "Tasks are ordered by Data manager ordering": "任务按数据管理器排序",
    
    // 新增用户界面术语翻译
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
    "user ID": "用户ID",
    
    // 单独的单词也需要翻译
    "Account": "账户",
    "account": "账户",
    "ACCOUNT": "账户",
    
    "Settings": "设置",
    "settings": "设置",
    "SETTINGS": "设置",
    
    "Token": "令牌",
    "token": "令牌",
    "TOKEN": "令牌",
    
    "First": "名字",
    "first": "名字",
    "FIRST": "名字",
    
    "Last": "姓氏",
    "last": "姓氏",
    "LAST": "姓氏",
    
    "Name": "名称",
    "name": "名称",
    "NAME": "名称",
    
    "choose": "选择",
    "CHOOSE": "选择",
    "file": "文件",
    "FILE": "文件",
    "upload": "上传",
    "UPLOAD": "上传"
  };
  
  // 翻译文本节点
  function translateTextNode(node) {
    if (!node || !node.nodeValue) return false;
    
    const text = node.nodeValue.trim();
    if (text.length > 0) {
      // 精确匹配
      if (templateTranslations[text]) {
        node.nodeValue = node.nodeValue.replace(text, templateTranslations[text]);
        return true;
      }
      
      // 不区分大小写匹配
      const lowerText = text.toLowerCase();
      if (templateTranslations[lowerText]) {
        node.nodeValue = node.nodeValue.replace(text, templateTranslations[lowerText]);
        return true;
      }
      
      // 全大写匹配
      const upperText = text.toUpperCase();
      if (templateTranslations[upperText]) {
        node.nodeValue = node.nodeValue.replace(text, templateTranslations[upperText]);
        return true;
      }
      
      // 首字母大写匹配
      const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      if (templateTranslations[capitalizedText]) {
        node.nodeValue = node.nodeValue.replace(text, templateTranslations[capitalizedText]);
        return true;
      }
      
      // 包含关键词的文本匹配
      Object.keys(templateTranslations).forEach(key => {
        if (text.includes(key) && key.length > 3) { // 只匹配长度大于3的关键词，避免误匹配
          node.nodeValue = node.nodeValue.replace(key, templateTranslations[key]);
        }
      });
    }
    return false;
  }
  
  // 递归遍历DOM树进行翻译
  function translateDOMTree(element) {
    if (!element) return;
    
    // 处理元素的所有子节点
    for (let i = 0; i < element.childNodes.length; i++) {
      const node = element.childNodes[i];
      
      // 文本节点处理
      if (node.nodeType === Node.TEXT_NODE) {
        translateTextNode(node);
      } 
      // 元素节点递归处理
      else if (node.nodeType === Node.ELEMENT_NODE) {
        // 翻译常见属性
        ['placeholder', 'title', 'aria-label', 'data-original-title', 'alt'].forEach(attr => {
          if (node.hasAttribute(attr)) {
            const value = node.getAttribute(attr);
            if (value && value.trim() && templateTranslations[value.trim()]) {
              node.setAttribute(attr, templateTranslations[value.trim()]);
            } else if (value && value.trim()) {
              // 尝试部分匹配
              Object.keys(templateTranslations).forEach(key => {
                if (value.includes(key) && key.length > 3) {
                  node.setAttribute(attr, value.replace(key, templateTranslations[key]));
                }
              });
            }
          }
        });
        
        // 按钮、输入框和链接等特殊处理
        if (['BUTTON', 'INPUT', 'A', 'LABEL', 'SPAN', 'DIV'].includes(node.tagName)) {
          // 处理value属性
          if (node.hasAttribute('value')) {
            const value = node.getAttribute('value');
            if (value && value.trim() && templateTranslations[value.trim()]) {
              node.setAttribute('value', templateTranslations[value.trim()]);
            }
          }
          
          // 处理按钮和链接的文本
          if (node.childNodes.length === 1 && node.firstChild.nodeType === Node.TEXT_NODE) {
            translateTextNode(node.firstChild);
          }
          
          // 特别处理可能的React组件
          if (node.classList.length > 0) {
            const classNames = Array.from(node.classList);
            if (classNames.some(cls => 
                cls.includes('btn') || 
                cls.includes('button') || 
                cls.includes('account') || 
                cls.includes('settings') ||
                cls.includes('token') ||
                cls.includes('nav') ||
                cls.includes('header') ||
                cls.includes('link') ||
                cls.includes('upload') ||
                cls.includes('form'))) {
              // 这可能是一个重要的UI元素，确保其所有文本节点都被翻译
              Array.from(node.childNodes).forEach(child => {
                if (child.nodeType === Node.TEXT_NODE) {
                  translateTextNode(child);
                }
              });
            }
          }
        }
        
        // 递归处理子元素
        translateDOMTree(node);
      }
    }
  }
  
  // 使用CSS选择器匹配特定React组件
  function translateReactComponents() {
    console.log("翻译React组件...");
    
    const reactSelectors = [
      // 常见的React应用UI元素选择器
      '[class*="header"]', 
      '[class*="navbar"]',
      '[class*="nav-item"]',
      '[class*="dropdown"]',
      '[class*="menu"]',
      '[class*="sidebar"]',
      '[class*="account"]',
      '[class*="settings"]',
      '[class*="profile"]',
      '[class*="token"]',
      '[class*="button"]',
      '[class*="btn"]',
      '[class*="form"]',
      '[class*="input"]',
      '[class*="field"]',
      '[class*="label"]',
      'button',
      'a[href*="account"]',
      'a[href*="settings"]',
      'a[href*="profile"]',
      'a[href*="logout"]',
      '.ant-form-item-label', // Ant Design表单标签
      '.ant-form-item', // Ant Design表单项
      '.ant-btn', // Ant Design按钮
      '.ant-menu-item', // Ant Design菜单项
      '.ant-dropdown-menu-item', // Ant Design下拉菜单项
      '.material-icons', // Material UI图标
      '[role="button"]',
      '[role="menuitem"]',
      '[role="tab"]',
      'label',
      'input[type="text"]',
      'input[type="file"]',
      'select',
      'textarea',
      '.upload',
      '.file-upload',
      '.account-settings',
      '.token-section',
      'div[class*="Title"]',
      'div[class*="Header"]',
      'h1, h2, h3, h4, h5, h6',
      '.profile-header',
      '.settings-header'
    ];
    
    reactSelectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          // 处理元素本身的文本内容
          Array.from(element.childNodes).forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
              translateTextNode(child);
            }
          });
          
          // 处理属性
          ['placeholder', 'title', 'aria-label', 'data-original-title', 'alt', 'value'].forEach(attr => {
            if (element.hasAttribute(attr)) {
              const value = element.getAttribute(attr);
              if (value && value.trim() && templateTranslations[value.trim()]) {
                element.setAttribute(attr, templateTranslations[value.trim()]);
              } else if (value && value.trim()) {
                // 尝试部分匹配
                Object.keys(templateTranslations).forEach(key => {
                  if (value.includes(key) && key.length > 3) {
                    element.setAttribute(attr, value.replace(key, templateTranslations[key]));
                  }
                });
              }
            }
          });
          
          // 递归处理子元素
          translateDOMTree(element);
        });
      } catch (e) {
        console.error(`CSS选择器查询出错: ${selector}`, e);
      }
    });
  }
  
  // 使用XPath查找包含特定文本的元素
  function translateKeyTerms() {
    console.log("正在查找关键词...");
    
    // XPath查询列表（保留现有查询）
    const xpathQueries = [
      // 添加更具体的与账户和设置相关的XPath查询
      "//*[text() = 'Account & Settings']",
      "//*[text() = 'Account settings']",
      "//*[text() = 'Log Out']",
      "//*[text() = 'Logout']",
      "//*[text() = 'Account info']",
      "//*[text() = 'Account Info']",
      "//*[text() = 'First Name']",
      "//*[text() = 'Last Name']",
      "//*[text() = 'Phone']",
      "//*[text() = 'Access Token']",
      "//*[text() = 'Choose file']",
      "//*[text() = 'Upload Files']",
      "//*[text() = 'Copy']",
      "//*[text() = 'Renew']",
      "//*[text() = 'Example fetch projects data']",
      "//*[text() = 'Optional description of your project']",
      "//*[text() = 'Direct media uploads have limitations and we strongly recommend using']",
      "//*[text() = 'List']",
      
      // 更模糊的包含匹配
      "//*[contains(text(), 'Account & Settings')]",
      "//*[contains(text(), 'Log Out')]",
      "//*[contains(text(), 'Account info')]",
      "//*[contains(text(), 'First Name')]",
      "//*[contains(text(), 'Last Name')]",
      "//*[contains(text(), 'Phone')]",
      "//*[contains(text(), 'Choose file')]",
      "//*[contains(text(), 'Access Token')]",
      "//*[contains(text(), 'Upload Files')]",
      "//*[contains(text(), 'Direct media uploads')]",
      
      // 更精确的元素类型匹配
      "//button[contains(text(), 'Log Out')]",
      "//button[contains(text(), 'Copy')]",
      "//button[contains(text(), 'Renew')]",
      "//button[contains(text(), 'Upload')]",
      "//a[contains(text(), 'Account')]",
      "//a[contains(text(), 'Settings')]",
      "//a[contains(text(), 'Log Out')]",
      "//label[contains(text(), 'First Name')]",
      "//label[contains(text(), 'Last Name')]",
      "//label[contains(text(), 'Phone')]",
      "//span[contains(text(), 'Access Token')]",
      "//span[contains(text(), 'Upload Files')]",
      "//div[contains(text(), 'Account')]",
      "//div[contains(text(), 'Settings')]",
      "//div[contains(text(), 'Token')]",
      
      // 专门针对输入框和按钮的匹配
      "//input[@placeholder]",
      "//input[@value]",
      "//button",
      "//a[@href]",
      "//textarea[@placeholder]"
    ];
    
    // 添加已有的Xpath查询列表（保留所有现有查询）
    
    xpathQueries.concat([
      // ... existing xpath queries ...
    ]);
    
    xpathQueries.forEach(query => {
      try {
        const result = document.evaluate(
          query, 
          document, 
          null, 
          XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, 
          null
        );
        
        for (let i = 0; i < result.snapshotLength; i++) {
          const node = result.snapshotItem(i);
          
          if (node.nodeType === Node.TEXT_NODE) {
            translateTextNode(node);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            // 如果是元素节点，先处理它的文本内容
            if (node.childNodes.length === 1 && node.firstChild.nodeType === Node.TEXT_NODE) {
              translateTextNode(node.firstChild);
            } else {
              // 处理所有文本子节点
              node.childNodes.forEach(child => {
                if (child.nodeType === Node.TEXT_NODE) {
                  translateTextNode(child);
                }
              });
            }
            
            // 处理常见属性
            ['placeholder', 'title', 'aria-label', 'value', 'alt', 'data-original-title'].forEach(attr => {
              if (node.hasAttribute(attr)) {
                const value = node.getAttribute(attr);
                if (value && value.trim() && templateTranslations[value.trim()]) {
                  node.setAttribute(attr, templateTranslations[value.trim()]);
                } else if (value && value.trim()) {
                  // 尝试部分匹配
                  Object.keys(templateTranslations).forEach(key => {
                    if (value.includes(key) && key.length > 3) {
                      node.setAttribute(attr, value.replace(key, templateTranslations[key]));
                    }
                  });
                }
              }
            });
          }
        }
      } catch (e) {
        console.error('XPath查询出错:', e);
      }
    });
  }
  
  // 新增一个直接操作账号设置页面的函数
  function translateAccountSettingsPage() {
    console.log("翻译账户设置页面...");
    
    // 账户设置页面的特定元素
    try {
      // 翻译页面标题
      document.title = document.title.replace("Account & Settings", "账户与设置");
      
      // 翻译面包屑导航
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
      
      // 直接定位页面标题
      document.querySelectorAll('.account-page header').forEach(header => {
        const text = header.textContent.trim();
        if (text === 'Account info') {
          header.textContent = '账户信息';
        } else if (text === 'Access Token') {
          header.textContent = '访问令牌';
        } else if (text === 'Notifications') {
          header.textContent = '通知';
        }
      });
      
      // 直接定位标签
      document.querySelectorAll('.account-page label, .field label').forEach(label => {
        const text = label.textContent.trim();
        if (text === 'E-mail') {
          label.textContent = '电子邮箱';
        } else if (text === 'First Name') {
          label.textContent = '名字';
        } else if (text === 'Last Name') {
          label.textContent = '姓氏';
        } else if (text === 'Phone') {
          label.textContent = '电话';
        } else if (text.includes('Use this token to authenticate with our API')) {
          label.textContent = '使用此令牌验证我们的API：';
        } else if (text.includes('Example fetch projects data')) {
          label.textContent = '示例获取项目数据：';
        }
      });
      
      // 直接定位按钮
      document.querySelectorAll('.account-page button, button.lsf-button-ls').forEach(button => {
        const text = button.textContent.trim();
        if (text === 'Copy') {
          button.textContent = '复制';
        } else if (text === 'Renew') {
          button.textContent = '更新';
        } else if (text === 'Delete') {
          button.textContent = '删除';
        } else if (text === 'Save') {
          button.textContent = '保存';
        } else if (text === 'Choose file' || text.includes('Choose')) {
          button.textContent = '选择文件';
        } else if (text === 'Upload Files' || text.includes('Upload')) {
          button.textContent = '上传文件';
        } else if (text === 'Documentation') {
          button.textContent = '文档';
        }
      });
      
      // 处理文件输入框
      document.querySelectorAll('input[type="file"]').forEach(input => {
        if (input.value === 'Choose' || input.value.includes('Choose file')) {
          input.value = '选择文件';
        }
      });
      
      // 翻译组织部分
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
      
      // 翻译注册信息
      document.querySelectorAll('.user__info footer p').forEach(p => {
        if (p.textContent.includes("Registered")) {
          p.textContent = p.textContent
            .replace("Registered", "注册于")
            .replace("user ID", "用户ID");
        }
      });
      
      // 翻译链接和其他文本
      document.querySelectorAll('a, p, span, div').forEach(element => {
        const text = element.textContent.trim();
        
        // 检查完整匹配
        if (templateTranslations[text]) {
          element.textContent = templateTranslations[text];
          return;
        }
        
        // 检查部分匹配
        Object.keys(templateTranslations).forEach(key => {
          if (text.includes(key) && key.length > 3) {
            element.textContent = text.replace(key, templateTranslations[key]);
          }
        });
      });
    } catch (e) {
      console.error('Account settings direct translation error:', e);
    }
  }
  
  // 修改全面翻译页面函数，增加额外的处理
  function translateFullPage() {
    console.log("开始全面翻译页面...");
    
    // 1. 先使用特定的React组件选择器
    translateReactComponents();
    
    // 2. 特别处理账户设置页面
    translateAccountSettings();
    
    // 3. 新增：直接处理账户设置页面的HTML元素
    translateAccountSettingsPage();
    
    // 4. 使用XPath查询特定文本
    translateKeyTerms();
    
    // 5. 递归遍历整个DOM树
    translateDOMTree(document.body);
    
    // 6. 针对特殊类型的节点进行处理
    translateSpecialElements();
  }
  
  // 新增处理特殊元素的函数
  function translateSpecialElements() {
    // 处理页面顶部导航菜单
    document.querySelectorAll('a[href*="account"], a[href*="settings"]').forEach(a => {
      if (a.textContent.trim() === 'Account & Settings') {
        a.textContent = '账户与设置';
      }
    });
    
    // 处理退出登录链接
    document.querySelectorAll('a[href*="logout"]').forEach(a => {
      if (a.textContent.trim() === 'Log Out') {
        a.textContent = '退出登录';
      }
    });
    
    // 处理页面的提示信息
    document.querySelectorAll('.notification-message, .alert, .message').forEach(elem => {
      const text = elem.textContent;
      if (text.includes('Please check new notification settings in the Account & Settings page')) {
        elem.textContent = text.replace(
          'Please check new notification settings in the Account & Settings page',
          '请在账户与设置页面中查看新的通知设置'
        );
      }
    });
    
    // 处理项目描述字段
    document.querySelectorAll('input[placeholder="Optional description of your project"], textarea[placeholder="Optional description of your project"]').forEach(elem => {
      elem.placeholder = '项目的可选描述';
    });
    
    // 处理直接媒体上传的提示
    document.querySelectorAll('p, div, span').forEach(elem => {
      const text = elem.textContent;
      if (text.includes('Direct media uploads have limitations and we strongly recommend using')) {
        elem.textContent = text.replace(
          'Direct media uploads have limitations and we strongly recommend using',
          '直接媒体上传有限制，我们强烈建议使用'
        );
      }
      if (text.includes('Cloud Storage instead')) {
        elem.textContent = text.replace(
          'Cloud Storage instead',
          '云存储代替'
        );
      }
    });
  }
  
  // 监听DOM变化，自动翻译新元素
  function setupMutationObserver() {
    console.log("设置DOM变化监听器...");
    
    const observer = new MutationObserver(mutations => {
      // 跟踪是否有新元素添加或属性变化
      let hasNewNodes = false;
      let hasAttributeChanges = false;
      
      mutations.forEach(mutation => {
        // 处理新添加的节点
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          hasNewNodes = true;
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            const node = mutation.addedNodes[i];
            // 如果是元素节点，递归翻译它
            if (node.nodeType === Node.ELEMENT_NODE) {
              translateDOMTree(node);
              
              // 特别检查是否是账户设置相关元素
              if (node.classList && Array.from(node.classList).some(cls => 
                cls.includes('account') || 
                cls.includes('settings') || 
                cls.includes('profile') ||
                cls.includes('token') ||
                cls.includes('form'))) {
                translateAccountSettings();
              }
              
              // 特别检查是否是React组件
              if (node.classList && node.classList.length > 0) {
                translateReactComponents();
              }
            }
          }
        }
        
        // 处理属性变化
        if (mutation.type === 'attributes') {
          hasAttributeChanges = true;
          const node = mutation.target;
          if (node.nodeType === Node.ELEMENT_NODE) {
            const attr = mutation.attributeName;
            if (['placeholder', 'title', 'aria-label', 'value', 'alt', 'data-original-title'].includes(attr) && node.hasAttribute(attr)) {
              const value = node.getAttribute(attr);
              if (value && value.trim() && templateTranslations[value.trim()]) {
                node.setAttribute(attr, templateTranslations[value.trim()]);
              } else if (value && value.trim()) {
                // 尝试部分匹配
                Object.keys(templateTranslations).forEach(key => {
                  if (value.includes(key) && key.length > 3) {
                    node.setAttribute(attr, value.replace(key, templateTranslations[key]));
                  }
                });
              }
            }
          }
        }
      });
      
      // 如果有新节点或属性变化，重新扫描页面的某些部分
      if (hasNewNodes || hasAttributeChanges) {
        // 仅在需要时进行这些昂贵的操作
        setTimeout(() => {
          translateReactComponents();
          translateAccountSettings();
          translateKeyTerms();
        }, 100);
      }
    });
    
    // 配置观察选项
    const config = { 
      childList: true,       // 观察子节点变化
      subtree: true,         // 观察所有后代节点
      attributes: true,      // 观察属性变化
      characterData: true    // 观察文本内容变化
    };
    
    // 开始观察整个文档
    observer.observe(document.body, config);
  }
  
  // 定期重新扫描页面，以防某些内容在DOM变化监听器启动前已加载或其他原因未被翻译
  function setupPeriodicRescan() {
    console.log("设置定期重新扫描...");
    
    // 初始翻译延迟100毫秒，确保页面已加载
    setTimeout(() => {
      translateFullPage();
      
      // 之后在几个时间点重新运行，确保捕获延迟加载的内容
      setTimeout(translateFullPage, 500);
      setTimeout(translateFullPage, 1000);
      setTimeout(translateFullPage, 2000);
      
      // 然后每5秒重新扫描一次
      setInterval(translateFullPage, 5000);
    }, 100);
  }
  
  // 强化initTranslation函数，确保页面加载后立即启动翻译
  function initTranslation() {
    console.log("初始化翻译功能...");
    
    // 优先添加页面加载时的翻译
    translateFullPage();
    
    // 特别处理账户设置页面的加载
    if (location.href.includes('account') || location.href.includes('settings')) {
      console.log("检测到账户设置页面，应用特殊翻译...");
      translateAccountSettingsPage();
    }
    
    // 页面加载完成后翻译
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      translateFullPage();
      setupMutationObserver();
      setupPeriodicRescan();
      
      // 立即再运行一次，确保覆盖所有元素
      setTimeout(translateFullPage, 100);
      
      // 账户设置页面特殊处理
      if (location.href.includes('account') || location.href.includes('settings')) {
        setTimeout(translateAccountSettingsPage, 100);
        setTimeout(translateAccountSettingsPage, 500);
        setTimeout(translateAccountSettingsPage, 1000);
      }
    } else {
      // 等待页面加载完成
      window.addEventListener('DOMContentLoaded', () => {
        translateFullPage();
        setupMutationObserver();
        setupPeriodicRescan();
        
        // DOM加载后立即再运行一次
        setTimeout(translateFullPage, 100);
        
        // 账户设置页面特殊处理
        if (location.href.includes('account') || location.href.includes('settings')) {
          setTimeout(translateAccountSettingsPage, 100);
          setTimeout(translateAccountSettingsPage, 500);
        }
      });
      
      window.addEventListener('load', () => {
        translateFullPage();
        // 页面完全加载后再次翻译，确保捕获所有元素
        setTimeout(translateFullPage, 500);
        
        // 账户设置页面特殊处理
        if (location.href.includes('account') || location.href.includes('settings')) {
          setTimeout(translateAccountSettingsPage, 100);
          setTimeout(translateAccountSettingsPage, 500);
          setTimeout(translateAccountSettingsPage, 1000);
          setTimeout(translateAccountSettingsPage, 2000);
        }
      });
    }
    
    // 监听URL变化（SPA应用）
    let lastUrl = location.href;
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        console.log('URL变化，重新翻译页面');
        // URL变化后立即翻译，然后再延迟翻译几次
        translateFullPage();
        setTimeout(translateFullPage, 500);
        
        // 账户设置页面特殊处理
        if (url.includes('account') || url.includes('settings')) {
          translateAccountSettingsPage();
          setTimeout(translateAccountSettingsPage, 500);
          setTimeout(translateAccountSettingsPage, 1000);
        }
      }
    }).observe(document, {subtree: true, childList: true});
    
    // 监听点击事件
    document.addEventListener('click', () => {
      // 点击后立即执行翻译，捕获可能的弹出框或动态加载内容
      setTimeout(translateFullPage, 100);
      setTimeout(translateFullPage, 500);
      
      // 账户设置页面特殊处理
      if (location.href.includes('account') || location.href.includes('settings')) {
        setTimeout(translateAccountSettingsPage, 100);
        setTimeout(translateAccountSettingsPage, 500);
      }
    });
  }
  
  // 启动翻译功能
  initTranslation();
})(); 