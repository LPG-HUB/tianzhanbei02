# 旅迹 - 智能旅行平台

## 项目概述

旅迹是一个基于 Vue 3 的一站式智能旅行平台，旨在为用户提供全面的旅行服务，包括行程规划、目的地信息、用户管理等功能。通过集成 AI 智能规划、目的地百科、行程管理和旅行政策等核心模块，旅迹致力于让每一次旅行更清晰、更省心。

## 主要功能模块

### 1. 用户认证与个人中心
- 用户注册与登录
- 个人资料管理
- 认证状态管理

### 2. AI 智能规划
- 自然语言对话式规划
- 基于 AI 的行程生成
- 历史对话记录管理

### 3. 目的地管理
- 目的地搜索与浏览
- 目的地详情展示
- 地图可视化

### 4. 行程管理
- 行程创建与编辑
- 行程状态管理（草稿、进行中、已完成）
- 行程导入/导出

### 5. 旅行政策
- 旅行政策信息展示
- 政策查询与筛选

## 技术栈

### 前端技术栈
- Vue 3 - 渐进式 JavaScript 框架
- TypeScript - 类型安全的 JavaScript 超集
- Pinia - Vue 官方状态管理库
- Vue Router - Vue 官方路由管理器
- Element Plus - 基于 Vue 3 的 UI 组件库
- Axios - 基于 Promise 的 HTTP 客户端
- Marked - Markdown 解析器
- Leaflet - 交互式地图库

### 开发工具
- Vite - 下一代前端构建工具
- ESLint - 代码质量检查工具
- Prettier - 代码格式化工具
- Vue TypeScript - TypeScript 支持

## 项目结构

```
src/
├── api/                # API 相关配置和类型定义
│   ├── types/         # TypeScript 类型定义
│   └── axios.ts       # Axios 配置
├── assets/            # 静态资源文件
│   ├── base.css       # 基础样式
│   ├── logo.svg       # 项目 Logo
│   └── main.css       # 主样式文件
├── components/        # Vue 组件
│   ├── icons/         # 图标组件
│   ├── layout/        # 布局组件
│   └── ...            # 其他组件
├── router/            # 路由配置
│   └── index.ts       # 路由定义
├── stores/            # Pinia 状态管理
│   ├── counter.ts     # 计数器示例
│   ├── destination.store.ts # 目的地状态管理
│   └── travel.store.ts # 行程状态管理
├── utils/             # 工具函数
│   └── transform.ts   # 数据转换工具
├── views/             # 页面组件
│   ├── AIView.vue     # AI 智能规划页面
│   ├── AuthView.vue   # 认证页面
│   ├── DestView.vue   # 目的地页面
│   ├── HomeView.vue   # 首页
│   ├── TripView.vue   # 行程管理页面
│   └── ...            # 其他页面
├── App.vue            # 根组件
└── main.ts            # 应用入口
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT
