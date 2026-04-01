# 组件文档

## 布局组件

### AppLayout

#### 概述
AppLayout 是应用的根布局组件，包含了页面的基本结构。

#### 功能
- 提供统一的页面布局结构
- 包含 Header 和 Footer 组件
- 支持响应式设计

#### 使用方式
```vue
<template>
  <AppLayout>
    <!-- 页面内容 -->
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
</script>
```

### AppHeader

#### 概述
AppHeader 是应用的顶部导航栏组件。

#### 功能
- 显示应用 Logo
- 提供主导航菜单
- 显示用户认证信息
- 支持移动端菜单

#### Props
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| isAuthenticated | boolean | 用户是否已认证 | false |
| userDisplayName | string | 用户显示名称 | - |
| userInitial | string | 用户头像首字母 | - |
| isMobileMenuOpen | boolean | 移动端菜单是否打开 | false |

#### Emits
| 事件名 | 参数 | 描述 |
| --- | --- | --- |
| toggle-mobile-menu | - | 切换移动端菜单 |
| logout | - | 用户登出 |

### AppFooter

#### 概述
AppFooter 是应用的底部组件。

#### 功能
- 显示版权信息
- 提供快速链接
- 响应式设计

#### 使用方式
```vue
<template>
  <AppFooter />
</template>

<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
</script>
```

## 功能组件

### DestinationMap

#### 概述
DestinationMap 是目的地地图组件，基于 Leaflet 实现。

#### 功能
- 显示目的地位置
- 支持地图缩放和移动
- 标记目的地位置

#### 使用方式
```vue
<template>
  <DestinationMap 
    :destination="destination"
    :center="[31.2304, 121.4737]"
    :zoom="12"
  />
</template>

<script setup lang="ts">
import DestinationMap from '@/components/DestinationMap.vue'
</script>
```

#### Props
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| destination | Destination | 目的地数据 | - |
| center | [number, number] | 地图中心点坐标 | - |
| zoom | number | 地图缩放级别 | 10 |

## 页面组件

### HomeView

#### 概述
HomeView 是应用的首页组件。

#### 功能
- 展示应用介绍
- 提供主要功能入口
- 引导用户使用平台

#### 核心内容
- Hero 区域：展示应用的核心价值主张
- 五大核心模块：介绍平台的主要功能

### AIView

#### 概述
AIView 是 AI 智能规划页面组件。

#### 功能
- 提供 AI 聊天界面
- 支持自然语言对话式规划
- 显示聊天历史记录
- 支持 Markdown 格式渲染

#### 核心功能
- 发送消息：与 AI 进行对话
- 生成行程：基于对话生成旅行行程
- 保存对话：保存聊天历史记录

### AuthView

#### 概述
AuthView 是用户认证和个人中心页面组件。

#### 功能
- 用户注册
- 用户登录
- 个人资料管理
- 密码修改

### DestView

#### 概述
DestView 是目的地列表页面组件。

#### 功能
- 目的地搜索与筛选
- 目的地列表展示
- 地图可视化展示

#### 核心功能
- 搜索：根据关键词搜索目的地
- 筛选：根据标签、评分等筛选目的地
- 排序：支持多种排序方式

### DestinationDetailView

#### 概述
DestinationDetailView 是目的地详情页面组件。

#### 功能
- 展示目的地详细信息
- 显示目的地的景点和亮点
- 提供地图位置信息

#### 核心内容
- 目的地基本信息
- 景点列表
- 交通信息
- 最佳旅游时间

### TripView

#### 概述
TripView 是行程管理页面组件。

#### 功能
- 行程列表展示
- 行程创建与编辑
- 行程状态管理

#### 核心功能
- 创建行程：添加新的旅行行程
- 编辑行程：修改现有行程信息
- 删除行程：删除不需要的行程
- 筛选：按状态筛选行程（草稿、进行中、已完成）

### TripDetailView

#### 概述
TripDetailView 是行程详情页面组件。

#### 功能
- 展示行程详细信息
- 编辑行程内容
- 管理行程天数和活动

#### 核心功能
- 行程概览：显示行程基本信息
- 行程天数：管理行程的每一天
- 活动安排：添加和编辑每天的活动
- 预算管理：设置和查看行程预算

### PolicyView

#### 概述
PolicyView 是旅行政策页面组件。

#### 功能
- 展示旅行政策信息
- 政策搜索与筛选

### LoginView

#### 概述
LoginView 是用户登录页面组件。

#### 功能
- 用户登录表单
- 密码重置功能

### NotFoundView

#### 概述
NotFoundView 是 404 错误页面组件。

#### 功能
- 显示页面不存在提示
- 提供返回首页链接

## 图标组件

### IconCommunity

#### 概述
社区图标组件。

### IconDocumentation

#### 概述
文档图标组件。

### IconEcosystem

#### 概述
生态系统图标组件。

### IconSupport

#### 概述
支持图标组件。

### IconTooling

#### 概述
工具图标组件。

## 使用示例

### 页面组件使用示例

```vue
<template>
  <AppLayout>
    <div class="trip-container">
      <div class="container">
        <h1>行程管理</h1>
        <div class="trip-actions">
          <el-button type="primary" @click="createTrip">创建新行程</el-button>
        </div>
        <div class="trip-tabs">
          <el-tabs v-model="activeTab">
            <el-tab-pane label="全部" name="all">
              <TripList :trips="trips" @select-trip="selectTrip" />
            </el-tab-pane>
            <el-tab-pane label="进行中" name="ongoing">
              <TripList :trips="ongoingTrips" @select-trip="selectTrip" />
            </el-tab-pane>
            <el-tab-pane label="已完成" name="completed">
              <TripList :trips="completedTrips" @select-trip="selectTrip" />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
import { useTravelStore } from '@/stores/travel.store'
import { ref, computed } from 'vue'

const travelStore = useTravelStore()
const activeTab = ref('all')

const trips = computed(() => travelStore.trips)
const ongoingTrips = computed(() => travelStore.ongoingTrips)
const completedTrips = computed(() => travelStore.completedTrips)

function createTrip() {
  // 创建新行程逻辑
}

function selectTrip(tripId: string) {
  // 选择行程逻辑
}
</script>
```
