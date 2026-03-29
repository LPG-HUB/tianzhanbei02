# 高德地图集成说明

## 概述

本项目已成功集成高德地图API，用于目的地模块的地图展示和交互功能。

## 文件结构

```
src/
├── config/
│   └── amap.config.ts          # 高德地图配置文件
├── components/
│   └── AMapDestination.vue     # 高德地图目的地组件
├── utils/
│   └── amap.ts                 # 高德地图API工具类
└── views/
    ├── DestView.vue            # 目的地列表页（已集成高德地图）
    └── DestinationDetailView.vue  # 目的地详情页（已集成高德地图）
```

## 配置步骤

### 1. 获取高德地图API Key

1. 访问[高德开放平台](https://lbs.amap.com/)
2. 注册并登录账号
3. 进入控制台，创建应用
4. 添加Web端(JS API)密钥
5. 复制生成的Key

### 2. 配置API Key

有两种方式配置API Key：

#### 方式一：使用环境变量（推荐）

1. 在项目根目录创建 `.env` 文件（如果不存在）
2. 添加以下内容：

```env
VITE_AMAP_KEY=your_actual_api_key_here
```

3. 将 `your_actual_api_key_here` 替换为您实际获取的API Key

#### 方式二：直接修改配置文件

打开 `src/config/amap.config.ts` 文件，修改 `getAmapKey` 函数返回值：

```typescript
const getAmapKey = () => {
  // 直接返回您的API Key
  return 'your_actual_api_key_here'
}
```

### 3. 配置安全域名

为了确保API Key的安全性，建议在高德开放平台配置安全域名：

1. 登录高德开放平台控制台
2. 找到对应的应用
3. 在"设置"中添加您的域名白名单

### 4. 重启开发服务器

配置完成后，需要重启开发服务器使环境变量生效：

```bash
# 停止当前服务器 (Ctrl+C)
# 然后重新启动
npm run dev
```

## 功能说明

### 1. 地图展示

- **目的地列表页**：展示所有目的地的分布情况
- **目的地详情页**：展示单个目的地的具体位置

### 2. 地图交互

- 点击标记查看目的地详细信息
- 地图自动缩放和平移到选中位置
- 显示目的地名称、描述和评分

### 3. 可用功能

- 地理编码（地址转坐标）
- 逆地理编码（坐标转地址）
- 周边搜索
- 距离计算
- 自定义标记
- 信息窗体

## 组件使用

### AMapDestination 组件

```vue
<template>
  <AMapDestination
    :destinations="destinations"
    height="500px"
    :zoom="4"
    @destination-click="handleDestinationClick"
  />
</template>

<script setup lang="ts">
import AMapDestination from '@/components/AMapDestination.vue'
import type { Destination } from '@/api/types/travel'

const destinations = ref<Destination[]>([])

function handleDestinationClick(destination: Destination) {
  console.log('选中目的地:', destination)
}
</script>
```

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| destinations | Destination[] | [] | 目的地数组 |
| height | string | '400px' | 地图高度 |
| zoom | number | 4 | 地图缩放级别 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| destination-click | destination: Destination | 目的地被点击时触发 |

## API工具函数

### loadAMapScript()

加载高德地图API脚本。

```typescript
import { loadAMapScript } from '@/utils/amap'

await loadAMapScript()
```

### geocodeAddress(address)

将地址转换为坐标。

```typescript
import { geocodeAddress } from '@/utils/amap'

const coordinates = await geocodeAddress('北京市朝阳区')
console.log(coordinates) // { lng: 116.397428, lat: 39.90923 }
```

### reverseGeocode(lng, lat)

将坐标转换为地址。

```typescript
import { reverseGeocode } from '@/utils/amap'

const address = await reverseGeocode(116.397428, 39.90923)
console.log(address) // '北京市朝阳区...'
```

### calculateDistance(point1, point2)

计算两点间距离（米）。

```typescript
import { calculateDistance } from '@/utils/amap'

const distance = calculateDistance(
  { lng: 116.397428, lat: 39.90923 },
  { lng: 121.473701, lat: 31.230416 }
)
console.log(distance) // 1068396.5 (米)
```

### searchNearby(center, keywords, radius)

搜索周边地点。

```typescript
import { searchNearby } from '@/utils/amap'

const results = await searchNearby(
  { lng: 116.397428, lat: 39.90923 },
  '餐厅',
  1000
)
console.log(results) // 返回周边餐厅列表
```

## 自定义配置

### 修改地图样式

在 `src/config/amap.config.ts` 中修改 `mapStyles` 配置：

```typescript
mapStyles: {
  normal: 'amap://styles/normal',
  dark: 'amap://styles/dark',
  light: 'amap://styles/light',
  fresh: 'amap://styles/fresh',
  grey: 'amap://styles/grey',
  graffiti: 'amap://styles/graffiti'
}
```

### 修改默认地图配置

```typescript
defaultMapConfig: {
  zoom: 4,
  center: [104.1954, 35.8617],
  viewMode: '2D',
  mapStyle: 'amap://styles/normal',
  features: ['bg', 'road', 'building', 'point']
}
```

## 注意事项

1. **API Key安全**：不要将API Key提交到公共代码仓库
2. **配额限制**：注意高德地图API的调用配额限制
3. **HTTPS**：生产环境建议使用HTTPS协议
4. **浏览器兼容性**：确保目标浏览器支持高德地图API

## 常见问题

### Q: 地图无法显示？

A: 检查以下几点：
1. API Key是否正确配置
2. 网络是否正常
3. 浏览器控制台是否有错误信息

### Q: 标记不显示？

A: 确保目的地数据包含正确的坐标信息：
```typescript
{
  location: {
    coordinates: {
      lat: 39.9042,
      lng: 116.4074
    }
  }
}
```

### Q: 如何切换地图样式？

A: 修改 `amap.config.ts` 中的 `mapStyle` 配置，或在组件中动态设置：
```typescript
map.setMapStyle('amap://styles/dark')
```

## 技术支持

- 高德地图官方文档：https://lbs.amap.com/api/javascript-api/summary
- 高德开放平台：https://lbs.amap.com/
- 问题反馈：通过项目Issue提交问题

## 更新日志

### v1.0.0 (2024-01)
- 初始版本
- 集成高德地图API
- 实现目的地地图展示功能
- 实现地理编码和逆地理编码
- 实现周边搜索功能
