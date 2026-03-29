<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import type { Destination } from '@/api/types/travel'
import { loadAMapScript, AMAP_CONFIG } from '@/utils/amap'
import type { AMapNamespace } from '@/types/amap'

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
let map: InstanceType<typeof AMapNamespace.Map> | null = null
let markers: InstanceType<typeof AMapNamespace.Marker>[] = []

// 初始化地图
async function initMap() {
  if (!mapContainer.value || typeof window === 'undefined') return

  try {
    await loadAMapScript()

    if (mapContainer.value) {
      // 创建地图实例
      const AMap = (window as any).AMap
      map = new AMap.Map(mapContainer.value, {
        ...AMAP_CONFIG.defaultMapConfig,
        zoom: props.zoom
      })

      // 添加缩放工具条
      const toolBar = new AMap.ToolBar({
        position: {
          top: '110px',
          right: '40px'
        }
      })
      map.addControl(toolBar)

      // 添加比例尺
      const scale = new AMap.Scale()
      map.addControl(scale)

      // 添加目的地标记
      addMarkers()
    }
  } catch (error) {
    console.error('初始化高德地图失败:', error)
  }
}

// 添加标记
function addMarkers() {
  if (!map || !props.destinations.length) return

  // 清除现有标记
  clearMarkers()

  const AMap = (window as any).AMap

  props.destinations.forEach(dest => {
    if (dest.location.coordinates) {
      // 创建标记
      const marker = new AMap.Marker({
        position: [dest.location.coordinates.lng, dest.location.coordinates.lat],
        title: dest.name,
        animation: 'AMAP_ANIMATION_DROP'
      })

      // 创建信息窗体
      const infoWindow = new AMap.InfoWindow({
        content: `
          <div class="amap-info-content">
            <h3>${dest.name}</h3>
            <p>${dest.description}</p>
            ${dest.rating ? `<p class="rating">评分: ${dest.rating.toFixed(1)}</p>` : ''}
          </div>
        `,
        offset: new AMap.Pixel(0, -30)
      })

      // 添加点击事件
      marker.on('click', () => {
        emit('destinationClick', dest)
        // 地图移动到标记位置
        if (dest.location.coordinates) {
          map.setCenter([dest.location.coordinates.lng, dest.location.coordinates.lat])
          map.setZoom(8)
        }
        infoWindow.open(map, marker.getPosition())
      })

      map.add(marker)
      markers.push(marker)
    }
  })
}

// 清除标记
function clearMarkers() {
  if (!map) return
  markers.forEach(marker => {
    map.remove(marker)
  })
  markers = []
}

// 监听目的地变化
watch(() => props.destinations, () => {
  addMarkers()
}, { deep: true })

// 组件挂载时初始化地图
onMounted(() => {
  initMap()
})

// 组件卸载时清理
onUnmounted(() => {
  if (map) {
    map.destroy()
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
  <div class="amap-destination" :style="{ height }">
    <div ref="mapContainer" class="map-container"></div>
  </div>
</template>

<style scoped>
.amap-destination {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.map-container {
  width: 100%;
  height: 100%;
}

/* 信息窗体样式 */
:deep(.amap-info-content) {
  min-width: 200px;
  padding: 12px;
}

:deep(.amap-info-content h3) {
  margin: 0 0 8px;
  font-size: 16px;
  color: #222;
}

:deep(.amap-info-content p) {
  margin: 0 0 8px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

:deep(.amap-info-content .rating) {
  margin: 0;
  font-weight: 600;
  color: #f59e0b;
}
</style>
