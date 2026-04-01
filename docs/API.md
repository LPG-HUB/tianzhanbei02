# API文档

## API基础配置

### API基础URL
API基础URL从环境变量获取，默认值为 `http://localhost:8080/api`。

### 请求格式
- 所有请求使用 JSON 格式
- 请求头：`Content-Type: application/json`
- 认证：使用 Bearer Token，放在 Authorization 头中

### 响应格式
所有API响应使用统一的 `ApiResponse` 格式：

```json
{
  "success": true,           // 操作是否成功
  "message": "操作成功",      // 响应消息
  "data": {}                // 响应数据
}
```

### 错误处理
- 请求拦截器：添加认证token和时间戳
- 响应拦截器：统一处理错误，显示错误提示
- 错误类型：网络错误、服务器错误、业务逻辑错误

## 认证API

### 用户登录
- **URL**：`/auth/login`
- **方法**：`POST`
- **参数**：
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **响应**：
  ```json
  {
    "success": true,
    "message": "登录成功",
    "data": {
      "token": "string",
      "user": {
        "id": "string",
        "name": "string",
        "email": "string"
      }
    }
  }
  ```

### 用户注册
- **URL**：`/auth/register`
- **方法**：`POST`
- **参数**：
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```
- **响应**：
  ```json
  {
    "success": true,
    "message": "注册成功",
    "data": {
      "id": "string",
      "name": "string",
      "email": "string"
    }
  }
  ```

### 获取当前用户信息
- **URL**：`/auth/me`
- **方法**：`GET`
- **认证**：需要
- **响应**：
  ```json
  {
    "success": true,
    "message": "获取成功",
    "data": {
      "id": "string",
      "name": "string",
      "email": "string"
    }
  }
  ```

## 行程管理API

### 导入行程
- **URL**：`/trip/import`
- **方法**：`POST`
- **认证**：需要
- **参数**：
  ```json
  {
    "travelPlan": {
      "id": "string",
      "title": "string",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "status": "string",
      "source": "string",
      "description": "string",
      "days": [
        {
          "label": "string",
          "date": "YYYY-MM-DD",
          "slots": [
            {
              "time": "HH:mm",
              "end": "HH:mm",
              "text": "string",
              "note": "string"
            }
          ]
        }
      ],
      "budget": {
        "total": 0,
        "currency": "string",
        "breakdown": {
          "accommodation": 0,
          "transportation": 0,
          "food": 0,
          "activities": 0,
          "shopping": 0,
          "other": 0
        }
      },
      "transportation": {
        "primary": "string",
        "secondary": "string",
        "notes": "string"
      }
    },
    "userId": "string",
    "mergeWithExisting": false,
    "targetTripId": null
  }
  ```
- **响应**：
  ```json
  {
    "success": true,
    "message": "导入成功",
    "data": {
      "trip": {
        "id": "string",
        "title": "string",
        "startDate": "YYYY-MM-DD",
        "endDate": "YYYY-MM-DD",
        "status": "string",
        "source": "string"
      }
    }
  }
  ```

### 获取行程列表
- **URL**：`/trip/list`
- **方法**：`GET`
- **认证**：需要
- **参数**：
  - `userId`: 用户ID
  - `status`: 行程状态（可选）
- **响应**：
  ```json
  {
    "success": true,
    "message": "获取成功",
    "data": [
      {
        "id": "string",
        "title": "string",
        "startDate": "YYYY-MM-DD",
        "endDate": "YYYY-MM-DD",
        "status": "string",
        "source": "string"
      }
    ]
  }
  ```

### 获取行程详情
- **URL**：`/trip/:id`
- **方法**：`GET`
- **认证**：需要
- **响应**：
  ```json
  {
    "success": true,
    "message": "获取成功",
    "data": {
      "id": "string",
      "title": "string",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "status": "string",
      "source": "string",
      "description": "string",
      "days": [
        {
          "label": "string",
          "date": "YYYY-MM-DD",
          "slots": [
            {
              "time": "HH:mm",
              "end": "HH:mm",
              "text": "string",
              "note": "string"
            }
          ]
        }
      ]
    }
  }
  ```

### 更新行程
- **URL**：`/trip/:id`
- **方法**：`PUT`
- **认证**：需要
- **参数**：与导入行程相同
- **响应**：与导入行程相同

### 删除行程
- **URL**：`/trip/:id`
- **方法**：`DELETE`
- **认证**：需要
- **响应**：
  ```json
  {
    "success": true,
    "message": "删除成功",
    "data": null
  }
  ```

## AI聊天API

### AI聊天对话
- **URL**：`/rag/chat`
- **方法**：`POST`
- **参数**：
  ```json
  {
    "message": "string",
    "sessionId": "string"
  }
  ```
- **响应**：
  ```json
  {
    "success": true,
    "message": "成功",
    "data": "string"
  }
  ```

### 生成行程
- **URL**：`/plan/generate`
- **方法**：`POST`
- **参数**：
  ```json
  {
    "enhancedPrompt": "string"
  }
  ```
- **响应**：
  ```json
  {
    "success": true,
    "message": "生成成功",
    "data": {
      "id": "string",
      "title": "string",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "days": [
        {
          "label": "string",
          "date": "YYYY-MM-DD",
          "slots": [
            {
              "time": "HH:mm",
              "end": "HH:mm",
              "text": "string"
            }
          ]
        }
      ]
    }
  }
  ```

## 目的地API

### 获取目的地列表
- **URL**：`/destination/list`
- **方法**：`GET`
- **参数**：
  - `query`: 搜索关键词（可选）
  - `country`: 国家（可选）
  - `tags`: 标签（可选）
  - `minRating`: 最低评分（可选）
  - `maxBudget`: 最高预算（可选）
  - `season`: 季节（可选）
  - `page`: 页码（可选，默认1）
  - `pageSize`: 每页数量（可选，默认10）
- **响应**：
  ```json
  {
    "success": true,
    "message": "获取成功",
    "data": {
      "destinations": [
        {
          "id": "string",
          "name": "string",
          "nameEn": "string",
          "description": "string",
          "image": "string",
          "location": {
            "country": "string",
            "province": "string",
            "city": "string",
            "coordinates": {
              "lat": 0,
              "lng": 0
            }
          },
          "tags": ["string"],
          "rating": 0,
          "reviewCount": 0
        }
      ],
      "total": 0,
      "page": 0,
      "pageSize": 0
    }
  }
  ```

### 获取目的地详情
- **URL**：`/destination/:id`
- **方法**：`GET`
- **响应**：
  ```json
  {
    "success": true,
    "message": "获取成功",
    "data": {
      "id": "string",
      "name": "string",
      "nameEn": "string",
      "description": "string",
      "image": "string",
      "images": ["string"],
      "location": {
        "country": "string",
        "province": "string",
        "city": "string",
        "coordinates": {
          "lat": 0,
          "lng": 0
        }
      },
      "tags": ["string"],
      "rating": 0,
      "reviewCount": 0,
      "highlights": ["string"],
      "bestSeason": "string",
      "recommendedDuration": 0,
      "budget": {
        "low": 0,
        "medium": 0,
        "high": 0
      },
      "transportation": ["string"],
      "attractions": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "image": "string",
          "rating": 0,
          "recommendedDuration": 0,
          "ticketPrice": {
            "adult": 0,
            "child": 0,
            "currency": "string"
          },
          "openingHours": "string",
          "address": "string",
          "coordinates": {
            "lat": 0,
            "lng": 0
          }
        }
      ]
    }
  }
  ```

## 数据模型

### 基础接口

#### Slot
```typescript
interface Slot {
  time: string;          // 开始时间，格式: "HH:mm"
  end: string;           // 结束时间，格式: "HH:mm"
  text: string;          // 活动内容
  note?: string;         // 备注（前端使用）
}
```

#### Day
```typescript
interface Day {
  label: string;         // 天标签，如"第1天 · 上海"
  date: string;          // 日期，格式: "YYYY-MM-DD"
  slots: Slot[];         // 时间段列表
}
```

#### BudgetBreakdown
```typescript
interface BudgetBreakdown {
  accommodation?: number;  // 住宿
  transportation?: number; // 交通
  food?: number;          // 餐饮
  activities?: number;    // 活动
  shopping?: number;      // 购物
  other?: number;         // 其他
}
```

#### Budget
```typescript
interface Budget {
  total: number;         // 总预算
  currency: string;      // 货币单位，默认"CNY"
  breakdown: BudgetBreakdown; // 预算细分
}
```

#### Transportation
```typescript
interface Transportation {
  primary?: string;      // 主要交通方式
  secondary?: string;    // 次要交通方式
  notes?: string;        // 交通备注
}
```

### 行程相关接口

#### FrontendTrip
```typescript
interface FrontendTrip {
  id: string;            // 行程ID
  title: string;         // 行程标题
  start: string;         // 开始日期，格式: "YYYY-MM-DD"（前端字段名）
  end: string;           // 结束日期，格式: "YYYY-MM-DD"（前端字段名）
  status: string;        // 状态: "ongoing", "completed", "draft"
  source: string;        // 来源: "ai", "manual"
  note?: string;         // 备注（前端字段名）
  description?: string;  // 描述（后端字段名，前端也支持）
  days?: Day[];          // 天数列表
  budget?: Budget;       // 预算信息
  transportation?: Transportation; // 交通信息
  createdAt?: string;    // 创建时间
  updatedAt?: string;    // 更新时间
}
```

#### BackendTravelPlan
```typescript
interface BackendTravelPlan {
  id: string;            // 行程ID
  title: string;         // 行程标题
  startDate: string;     // 开始日期（后端字段名）
  endDate: string;       // 结束日期（后端字段名）
  status: string;        // 状态
  source: string;        // 来源
  description?: string;  // 描述（后端字段名）
  days?: Day[];          // 天数列表
  budget?: Budget;       // 预算信息
  transportation?: Transportation; // 交通信息
}
```

#### Trip
```typescript
interface Trip extends FrontendTrip {
  // 扩展字段用于转换
  startDate?: string;    // 后端字段名（可选）
  endDate?: string;      // 后端字段名（可选）
}
```

### 用户相关接口

#### User
```typescript
interface User {
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  isAuthenticated: boolean;
}
```

### AI聊天相关接口

#### ChatMessage
```typescript
interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  status: 'sending' | 'sent' | 'error';
}
```

#### AIConversation
```typescript
interface AIConversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}
```

### 目的地相关接口

#### Destination
```typescript
interface Destination {
  id: string;                    // 目的地ID
  name: string;                   // 目的地名称
  nameEn?: string;                // 英文名称
  description: string;            // 描述
  image: string;                  // 封面图片URL
  images?: string[];              // 更多图片URL数组
  location: {
    country: string;              // 国家
    province?: string;            // 省份/州
    city: string;                 // 城市
    coordinates?: {
      lat: number;                // 纬度
      lng: number;                // 经度
    }
  };
  tags?: string[];                // 标签（如：['美食', '购物', '历史文化']）
  rating?: number;                // 评分（0-5）
  reviewCount?: number;            // 评论数
  highlights?: string[];          // 亮点/特色
  bestSeason?: string;            // 最佳旅游季节
  recommendedDuration?: number;   // 推荐游玩天数
  budget?: {
    low: number;                  // 低预算
    medium: number;               // 中等预算
    high: number;                 // 高预算
  };
  transportation?: string[];      // 交通方式
  attractions?: Attraction[];    // 景点列表
  createdAt?: string;             // 创建时间
  updatedAt?: string;             // 更新时间
}
```

#### Attraction
```typescript
interface Attraction {
  id: string;                     // 景点ID
  name: string;                   // 景点名称
  description: string;            // 描述
  image?: string;                 // 景点图片
  rating?: number;                // 评分
  recommendedDuration?: number;   // 推荐游玩时长（小时）
  ticketPrice?: {
    adult: number;                // 成人票
    child?: number;               // 儿童票
    currency?: string;            // 货币
  };
  openingHours?: string;          // 开放时间
  address?: string;               // 地址
  coordinates?: {
    lat: number;
    lng: number;
  };
}
```
