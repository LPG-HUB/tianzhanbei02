# 技术栈文档

## Vue 3

### 概述
Vue 3 是一套用于构建用户界面的渐进式 JavaScript 框架。

### 核心特性
- **组合式 API (Composition API)**：提供更灵活的代码组织方式，支持逻辑复用和更好的类型推导
- **响应式系统升级**：基于 Proxy 的响应式系统，提供更好的性能和可扩展性
- **更好的 TypeScript 支持**：内置 TypeScript 类型定义，提供出色的类型推导
- **Fragment、Teleport、Suspense**：新的内置组件，扩展了组件的能力
- **更小的打包体积**：通过 tree-shaking 和按需编译，减小了最终打包体积

### 在项目中的应用
- 作为核心框架构建整个应用界面
- 使用组合式 API 组织页面逻辑
- 利用 Vue 3 的响应式系统管理组件状态

### 配置文件
- `tsconfig.app.json`：TypeScript 配置
- `vite.config.ts`：Vite 构建配置
- `App.vue`：根组件

## TypeScript

### 概述
TypeScript 是 JavaScript 的超集，添加了静态类型定义。

### 核心特性
- **类型安全**：在编译时发现类型错误，提高代码质量
- **更好的 IDE 支持**：提供智能提示、代码导航和重构功能
- **可扩展性**：支持自定义类型和接口定义
- **与 JavaScript 兼容**：可以直接使用现有的 JavaScript 库

### 在项目中的应用
- 为所有组件和工具函数添加类型定义
- 定义 API 数据模型和接口
- 使用泛型提高代码复用性

### 配置文件
- `tsconfig.json`：主 TypeScript 配置
- `tsconfig.app.json`：应用特定的 TypeScript 配置
- `tsconfig.node.json`：Node.js 特定的 TypeScript 配置

## Pinia

### 概述
Pinia 是 Vue 3 官方推荐的状态管理库，是 Vuex 的继任者。

### 核心特性
- **简洁的 API**：没有 mutations，只有 state、getters 和 actions
- **TypeScript 友好**：自动类型推导，无需手动定义类型
- **模块化设计**：支持创建多个 store，便于代码组织
- **轻量级**：体积小，性能优秀

### 在项目中的应用
- 管理用户状态
- 管理行程数据
- 管理 AI 对话历史
- 管理目的地数据

### 主要 Store
- `travel.store.ts`：管理行程相关状态
- `destination.store.ts`：管理目的地相关状态
- `counter.ts`：示例计数器 store

## Vue Router

### 概述
Vue Router 是 Vue.js 官方的路由管理器，用于构建单页应用。

### 核心特性
- **嵌套路由**：支持复杂的页面结构
- **路由参数**：支持动态路由和查询参数
- **导航守卫**：控制导航行为
- **路由懒加载**：提高应用性能

### 在项目中的应用
- 定义应用的路由结构
- 实现页面间的导航
- 支持动态路由（如目的地详情、行程详情）

### 配置文件
- `router/index.ts`：路由定义和配置

## Element Plus

### 概述
Element Plus 是基于 Vue 3 的企业级 UI 组件库。

### 核心特性
- **丰富的组件**：提供 100+ 个高质量组件
- **支持主题定制**：可自定义颜色、字体等
- **国际化支持**：内置多种语言
- **响应式设计**：适配各种屏幕尺寸

### 在项目中的应用
- 构建用户界面
- 实现表单、对话框、表格等常见组件
- 提供一致的视觉体验

### 相关依赖
- `@element-plus/icons-vue`：Element Plus 图标库

## Axios

### 概述
Axios 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 Node.js。

### 核心特性
- **支持 Promise API**：简化异步请求处理
- **拦截器**：支持请求和响应拦截
- **自动转换 JSON 数据**：无需手动处理 JSON 转换
- **取消请求**：支持取消正在进行的请求

### 在项目中的应用
- 与后端 API 通信
- 处理 HTTP 请求和响应
- 实现 API 错误处理

### 配置文件
- `api/axios.ts`：Axios 配置和拦截器

## Vite

### 概述
Vite 是下一代前端构建工具，提供极速的开发体验。

### 核心特性
- **极速冷启动**：基于 ES Modules 的开发服务器
- **按需编译**：只编译正在使用的代码
- **热模块替换 (HMR)**：实时更新修改的组件
- **优化的构建输出**：自动分割代码，减小打包体积

### 在项目中的应用
- 开发服务器
- 构建生产版本
- 代码优化和压缩

### 配置文件
- `vite.config.ts`：Vite 配置
- `package.json`：构建脚本

## Marked

### 概述
Marked 是一个快速的 Markdown 解析器和编译器，用 JavaScript 编写。

### 核心特性
- **快速**：高性能的解析器
- **可配置**：支持多种解析选项
- **可扩展**：支持自定义渲染器

### 在项目中的应用
- 解析 AI 聊天返回的 Markdown 内容
- 渲染富文本格式的消息

## Leaflet

### 概述
Leaflet 是一个开源的交互式地图库，轻量级且功能强大。

### 核心特性
- **轻量级**：只有约 38KB 的 JS
- **可扩展**：支持多种插件
- **跨平台**：兼容桌面和移动设备
- **支持多种地图图层**：支持 OpenStreetMap、Mapbox 等

### 在项目中的应用
- 在目的地页面展示地图
- 标记目的地位置

## 开发工具

### ESLint
- 代码质量检查工具
- 配置文件：`eslint.config.ts`

### Prettier
- 代码格式化工具
- 配置文件：`.prettierrc.json`

### OXLint
- 高性能的 JavaScript/TypeScript linter
- 配置文件：`.oxlintrc.json`

### VS Code
- 推荐的编辑器
- 配置文件：`.vscode/extensions.json`
