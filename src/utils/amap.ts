/**
 * 高德地图API工具类
 */

import { AMAP_CONFIG as config } from '@/config/amap.config'

// 导出配置供外部使用
export const AMAP_CONFIG = config

/**
 * 加载高德地图API脚本
 */
export function loadAMapScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // 如果已经加载过，直接返回
    if (window.AMap) {
      resolve()
      return
    }

    // 创建script标签
    const script = document.createElement('script')
    script.type = 'text/javascript'

    // 构建API URL
    const pluginsParam = config.plugins.join(',')
    script.src = `https://webapi.amap.com/maps?v=${config.version}&key=${config.key}&plugin=${pluginsParam}`

    script.onload = () => {
      resolve()
    }

    script.onerror = () => {
      reject(new Error('高德地图API加载失败'))
    }

    document.head.appendChild(script)
  })
}

/**
 * 地址转换为坐标
 */
export async function geocodeAddress(address: string): Promise<{ lng: number; lat: number } | null> {
  try {
    await loadAMapScript()

    return new Promise((resolve, reject) => {
      const geocoder = new AMap.Geocoder()
      geocoder.getLocation(address, (status: string, result: any) => {
        if (status === 'complete' && result.geocodes.length) {
          const location = result.geocodes[0].location
          resolve({
            lng: location.lng,
            lat: location.lat
          })
        } else {
          reject(new Error('地址解析失败'))
        }
      })
    })
  } catch (error) {
    console.error('地址解析错误:', error)
    return null
  }
}

/**
 * 坐标转换为地址
 */
export async function reverseGeocode(lng: number, lat: number): Promise<string | null> {
  try {
    await loadAMapScript()

    return new Promise((resolve, reject) => {
      const geocoder = new AMap.Geocoder()
      geocoder.getAddress([lng, lat], (status: string, result: any) => {
        if (status === 'complete' && result.regeocode) {
          resolve(result.regeocode.formattedAddress)
        } else {
          reject(new Error('逆地理编码失败'))
        }
      })
    })
  } catch (error) {
    console.error('逆地理编码错误:', error)
    return null
  }
}

/**
 * 计算两点间距离（米）
 */
export function calculateDistance(
  point1: { lng: number; lat: number },
  point2: { lng: number; lat: number }
): number {
  const p1 = new AMap.LngLat(point1.lng, point1.lat)
  const p2 = new AMap.LngLat(point2.lng, point2.lat)
  return p1.distance(p2)
}

/**
 * 搜索周边
 */
export async function searchNearby(
  center: { lng: number; lat: number },
  keywords: string,
  radius: number = 1000
): Promise<any[]> {
  try {
    await loadAMapScript()

    return new Promise((resolve, reject) => {
      const placeSearch = new AMap.PlaceSearch({
        type: keywords,
        pageSize: 20,
        pageIndex: 1,
        radius: radius
      })

      placeSearch.searchNearBy(
        keywords,
        [center.lng, center.lat],
        radius,
        (status: string, result: any) => {
          if (status === 'complete' && result.poiList) {
            resolve(result.poiList.pois)
          } else {
            reject(new Error('搜索失败'))
          }
        }
      )
    })
  } catch (error) {
    console.error('搜索错误:', error)
    return []
  }
}
