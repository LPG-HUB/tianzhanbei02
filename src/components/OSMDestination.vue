<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import type { Destination } from '@/api/types/travel'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

interface Props {
  destinations: Destination[]
  height?: string
  zoom?: number
}

const props = withDefaults(defineProps<Props>(), {
  height: '400px',
  zoom: 4
})

const emit = defineEmits<{
  destinationClick: [destination: Destination]
}>()

const mapContainer = ref<HTMLElement | null>(null)
let map: L.Map | null = null
let markers: L.Marker[] = []

// 初始化地图
function initMap() {
  if (!mapContainer.value) {
    console.error('地图容器不存在')
    return
  }

  try {
    console.log('开始初始化 OSM 地图...')
    console.log('容器尺寸:', mapContainer.value.offsetWidth, 'x', mapContainer.value.offsetHeight)
    
    // 创建地图实例（使用 OSM）
    map = L.map(mapContainer.value, {
      center: [35.8617, 104.1954], // 中国中心点
      zoom: props.zoom,
      zoomControl: false, // 禁用默认缩放控件
      preferCanvas: true // 优先使用 Canvas 渲染
    })

    console.log('地图实例创建成功')

    // 添加 OSM 图层 - 使用多个子域名提高加载速度
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      subdomains: 'abc'
    }).addTo(map)
    
    console.log('OSM 图层添加成功')

    // 添加缩放控件到右下角
    L.control.zoom({
      position: 'bottomright'
    }).addTo(map)
    
    console.log('缩放控件添加成功')

    // 添加目的地标记
    addMarkers()

    console.log('OSM 地图初始化完成')
  } catch (error) {
    console.error('初始化 OSM 地图失败:', error)
  }
}

// 添加标记
function addMarkers() {
  if (!map || !props.destinations.length) return

  // 清除现有标记
  clearMarkers()

  props.destinations.forEach(dest => {
    if (dest.location.coordinates) {
      const { lat, lng } = dest.location.coordinates
      
      // 创建标记
      const marker = L.marker([lat, lng])
      
      // 创建弹出内容
      const popupContent = `
        <div style="min-width: 200px;">
          <h3 style="margin: 0 0 8px; font-size: 16px; color: #222;">${dest.name}</h3>
          <p style="margin: 0 0 8px; font-size: 14px; color: #666;">${dest.description}</p>
          ${dest.rating ? `<p style="margin: 0; font-weight: 600; color: #f59e0b;">评分：${dest.rating.toFixed(1)}</p>` : ''}
        </div>
      `
      
      // 绑定弹出窗口
      marker.bindPopup(popupContent)
      
      // 添加点击事件
      marker.on('click', () => {
        emit('destinationClick', dest)
      })
      
      if (map) {
        map.addLayer(marker)
      }
      markers.push(marker)
    }
  })
}

// 清除标记
function clearMarkers() {
  markers.forEach(marker => {
    if (map) {
      map.removeLayer(marker)
    }
  })
  markers = []
}

// 监听目的地变化
watch(() => props.destinations, () => {
  addMarkers()
}, { deep: true })

// 组件挂载时初始化地图
onMounted(() => {
  // 延迟初始化确保容器已渲染
  setTimeout(() => {
    initMap()
  }, 100)
})

// 组件卸载时清理
onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
})

// 暴露方法给父组件
defineExpose({
  addMarkers,
  clearMarkers
})
</script>

<template>
  <div class="osm-destination" :style="{ height }">
    <div ref="mapContainer" class="map-container"></div>
  </div>
</template>

<style scoped>
.osm-destination {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #f0f0f0;
}

.map-container {
  width: 100%;
  height: 100%;
  min-height: 300px; /* 确保最小高度 */
}

/* 修复 Leaflet 标记点阴影问题 */
:deep(.leaflet-marker-icon) {
  background: transparent;
  border: none;
}

:deep(.leaflet-marker-shadow) {
  display: none;
}

/* 弹出窗口样式 */
:deep(.leaflet-popup-content-wrapper) {
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

:deep(.leaflet-popup-content) {
  margin: 0;
  padding: 12px;
  min-width: 200px;
}

:deep(.leaflet-popup-tip-container) {
  margin-top: -1px;
}
</style>
