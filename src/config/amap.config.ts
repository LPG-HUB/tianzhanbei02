/**
 * 高德地图配置文件
 * 
 * 使用说明:
 * 1. 在高德开放平台申请Web端(JS API)密钥: https://lbs.amap.com/
 * 2. 将申请到的Key配置到环境变量 VITE_AMAP_KEY 中
 * 3. 在应用中通过import { AMAP_CONFIG } from '@/config/amap.config'使用
 */

// 从环境变量读取API Key，如果没有则使用默认值
const getAmapKey = () => {
  if (import.meta.env.VITE_AMAP_KEY) {
    return import.meta.env.VITE_AMAP_KEY
  }
  console.warn('未配置高德地图API Key，请在.env文件中设置VITE_AMAP_KEY')
  return 'YOUR_AMAP_KEY'
}

export const AMAP_CONFIG = {
  // 高德地图API Key（从环境变量读取）
  key: getAmapKey(),

  // API版本
  version: '2.0',

  // 需要加载的插件列表
  plugins: [
    'AMap.Scale',           // 比例尺
    'AMap.ToolBar',         // 工具条
    'AMap.ControlBar',      // 控制条
    'AMap.Geolocation',     // 定位
    'AMap.Geocoder',        // 地理编码
    'AMap.PlaceSearch',     // 地点搜索
    'AMap.AutoComplete',    // 输入提示
    'AMap.MarkerClusterer'  // 点聚合
  ],

  // 地图默认配置
  defaultMapConfig: {
    zoom: 4,
    center: [104.1954, 35.8617], // 中国中心点
    viewMode: '2D',
    mapStyle: 'amap://styles/normal',
    features: ['bg', 'road', 'building', 'point']
  },

  // 地图样式主题
  mapStyles: {
    normal: 'amap://styles/normal',      // 标准样式
    dark: 'amap://styles/dark',          // 暗色样式
    light: 'amap://styles/light',        // 亮色样式
    fresh: 'amap://styles/fresh',        // 清新样式
    grey: 'amap://styles/grey',          // 灰色样式
    graffiti: 'amap://styles/graffiti'  // 涂鸦样式
  },

  // 标记样式配置
  markerConfig: {
    defaultIcon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
    activeIcon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png',
    iconSize: [25, 34],
    iconOffset: [-12, -34]
  },

  // 搜索配置
  searchConfig: {
    city: '全国',
    pageSize: 20,
    pageIndex: 1
  }
}
