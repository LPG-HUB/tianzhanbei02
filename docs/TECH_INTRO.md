# 旅迹 - 技术介绍

## 项目概述
旅迹是一个基于 Vue 3 和 Spring Boot 的智能旅行平台，集成了 AI 智能规划、目的地信息、行程管理等核心功能，致力于为用户提供全面的旅行服务。

## 技术栈

### 前端技术栈
- **Vue 3** - 渐进式 JavaScript 框架，使用组合式 API 构建应用
- **TypeScript** - 类型安全的 JavaScript 超集，提供完整的类型支持
- **Pinia** - Vue 官方状态管理库，管理应用状态
- **Vue Router** - Vue 官方路由管理器，实现单页应用导航
- **Element Plus** - 基于 Vue 3 的企业级 UI 组件库
- **Axios** - 基于 Promise 的 HTTP 客户端，处理 API 请求
- **Marked** - Markdown 解析器，渲染 AI 返回的富文本内容
- **Leaflet** - 交互式地图库，展示目的地位置
- **Vite** - 下一代前端构建工具，提供极速的开发体验

### 后端技术栈
- **Spring Boot 3.2.5** - Java 后端框架，提供 RESTful API
- **Spring Data JPA** - 数据持久层框架，简化数据库操作
- **Spring AI** - AI 集成框架，集成 DeepSeek 大语言模型
- **MySQL** - 关系型数据库（可选）
- **H2** - 内存数据库（开发/测试环境）
- **PostgreSQL** - 关系型数据库（生产环境）

## 数据库使用

### 数据库配置
项目支持多种数据库，根据环境自动切换：

1. **开发环境**：使用 H2 内存数据库
   - 配置文件：application.properties
   - 优点：快速启动，无需额外安装
   - 适用场景：本地开发和测试

2. **生产环境**：使用 PostgreSQL
   - 配置文件：application-production.properties
   - 优点：高性能、高可靠性
   - 适用场景：生产部署（如 Railway 云平台）

3. **可选数据库**：支持 MySQL
   - 配置文件：application.properties
   - 优点：广泛使用、社区活跃
   - 适用场景：需要 MySQL 的特定场景

### 数据库切换方式
通过修改 application.properties 或 application-production.properties 中的以下配置切换数据库：

```properties
# PostgreSQL
spring.datasource.url=jdbc:postgresql://localhost:5432/travel_db
spring.datasource.driverClassName=org.postgresql.Driver

# MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/travel_db
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver

# H2
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
```

## 项目亮点

### 1. RAG 提示词优化
项目实现了基于 RAG（Retrieval-Augmented Generation）的提示词优化系统，主要特点：

- **智能提示词增强**：自动完善用户输入的旅行需求，补充常见要素（如预算、住宿偏好、交通方式等）
- **细化问题生成**：根据用户输入生成 3-4 个具体问题，帮助用户提供更多细节
- **上下文检索**：从知识库中检索相关的旅行信息，为 AI 提供更多上下文
- **置信度评分**：计算提示词的完整度和相关性，评估生成结果的质量
- **智能建议**：根据用户部分输入提供补全建议，帮助用户完善需求描述

### 2. AI 智能行程规划
- 基于 DeepSeek 大语言模型的智能对话式规划
- 自动生成详细的旅行行程，包括每日安排和活动时间表
- 支持不同群体类型（长者、亲子、情侣等）的个性化行程
- 自动计算预算细分，包括住宿、交通、餐饮等各项费用

### 3. 现代化前端架构
- 使用 Vue 3 组合式 API，代码组织更灵活
- 完整的 TypeScript 类型支持，提高代码质量
- Pinia 状态管理，轻松管理应用状态
- Element Plus 组件库，提供一致的用户体验

### 4. 灵活的数据库支持
- 支持多种数据库（H2、MySQL、PostgreSQL）
- 根据环境自动切换数据库配置
- 使用 Spring Data JPA 简化数据库操作

## 技术架构

### 前端架构
```
src/
├── api/           # API 请求配置
├── components/    # 可复用组件
├── router/        # 路由配置
├── stores/        # Pinia 状态管理
├── utils/         # 工具函数
└── views/         # 页面组件
```

### 后端架构
```
src/main/java/com/travel/
├── config/        # 配置类
├── controller/    # REST 控制器
├── dto/           # 数据传输对象
├── entity/        # JPA 实体
├── repository/    # 数据访问层
└── service/       # 业务逻辑层
```

## 开发环境

### 前端
- Node.js: ^20.19.0 || >=22.12.0
- 包管理器: npm

### 后端
- Java: 17
- Maven: 3.x
- 数据库: H2/MySQL/PostgreSQL（可选）

## 快速开始

### 前端
```bash
cd travel-platform-vue
npm install
npm run dev
```

### 后端
```bash
cd travel-platform-frontend/backend/travel-platform-backend
mvn spring-boot:run
```

## 部署

- 前端：可部署到 Netlify、Vercel 等静态托管平台
- 后端：支持部署到 Railway、Heroku 等 PaaS 平台
- 数据库：生产环境使用 PostgreSQL，通过 Railway 自动配置
