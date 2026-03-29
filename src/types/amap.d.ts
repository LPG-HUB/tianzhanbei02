/**
 * 高德地图API类型定义
 */

declare global {
  interface Window {
    AMap: typeof AMapNamespace
  }
}

// 导出 AMapNamespace 供外部使用
export { AMapNamespace }

// 实际实现
declare const AMap: typeof AMapNamespace

namespace AMapNamespace {
  // 地图类
  export class Map {
    constructor(container: string | HTMLElement, options: MapOptions)
    setCenter(lnglat: LngLat): void
    setZoom(zoom: number): void
    getZoom(): number
    getCenter(): LngLat
    setMapStyle(style: string): void
    destroy(): void
    addControl(control: any): void
    remove(control: any): void
    add(overlay: any): void
    remove(overlay: any): void
    clearMap(): void
    on(event: string, handler: Function): void
    off(event: string, handler?: Function): void
    emit(event: string, ...args: any[]): void
  }

  // 经纬度类
  export class LngLat {
    constructor(lng: number, lat: number)
    getLng(): number
    getLat(): number
    distance(other: LngLat): number
    equals(other: LngLat): boolean
    toString(): string
    toArray(): [number, number]
  }

  // 像素类
  export class Pixel {
    constructor(x: number, y: number)
    getX(): number
    getY(): number
    equals(other: Pixel): boolean
    add(other: Pixel): Pixel
    sub(other: Pixel): Pixel
    toArray(): [number, number]
  }

  // 标记类
  export class Marker {
    constructor(options?: MarkerOptions)
    setPosition(position: LngLat | [number, number]): void
    getPosition(): LngLat
    setTitle(title: string): void
    getTitle(): string
    setContent(content: string | HTMLElement): void
    getContent(): string | HTMLElement
    setMap(map: Map): void
    getMap(): Map
    show(): void
    hide(): void
    isVisible(): boolean
    setAnimation(animation: string): void
    on(event: string, handler: Function): void
    off(event: string, handler?: Function): void
  }

  // 信息窗体类
  export class InfoWindow {
    constructor(options?: InfoWindowOptions)
    setContent(content: string | HTMLElement): void
    getContent(): string | HTMLElement
    setPosition(position: LngLat | [number, number]): void
    getPosition(): LngLat
    setSize(size: Size): void
    getSize(): Size
    setOffset(offset: Pixel): void
    getOffset(): Pixel
    open(map: Map, position?: LngLat | [number, number]): void
    close(): void
    isOpen(): boolean
  }

  // 尺寸类
  export class Size {
    constructor(width: number, height: number)
    getWidth(): number
    getHeight(): number
    equals(other: Size): boolean
    toArray(): [number, number]
  }

  // 地理编码类
  export class Geocoder {
    constructor(options?: GeocoderOptions)
    getLocation(address: string, callback: (status: string, result: GeocodeResult) => void): void
    getAddress(location: LngLat | [number, number], callback: (status: string, result: RegeocodeResult) => void): void
  }

  // 地点搜索类
  export class PlaceSearch {
    constructor(options?: PlaceSearchOptions)
    search(keyword: string, callback: (status: string, result: SearchResult) => void): void
    searchNearBy(keyword: string, center: LngLat | [number, number], radius: number, callback: (status: string, result: SearchResult) => void): void
  }

  // 自动补全类
  export class AutoComplete {
    constructor(options?: AutoCompleteOptions)
    search(keyword: string, callback: (status: string, result: AutoCompleteResult) => void): void
  }

  // 缩放工具条
  export class ToolBar {
    constructor(options?: ToolBarOptions)
  }

  // 比例尺
  export class Scale {
    constructor(options?: ScaleOptions)
  }

  // 控制条
  export class ControlBar {
    constructor(options?: ControlBarOptions)
  }

  // 定位
  export class Geolocation {
    constructor(options?: GeolocationOptions)
    getCurrentPosition(callback: (status: string, result: GeolocationResult) => void): void
  }

  // 点聚合
  export class MarkerClusterer {
    constructor(map: Map, options?: MarkerClustererOptions)
    addMarkers(markers: Marker[]): void
    removeMarkers(markers: Marker[]): void
    clearMarkers(): void
    getMarkers(): Marker[]
    setMap(map: Map): void
  }
}

// 地图选项
export interface MapOptions {
  zoom?: number
  center?: [number, number]
  viewMode?: '2D' | '3D'
  pitch?: number
  rotation?: number
  mapStyle?: string
  features?: string[]
  showLabel?: boolean
  showIndoorMap?: boolean
  showBuildingBlock?: boolean
  skyColor?: string
}

// 标记选项
export interface MarkerOptions {
  position?: [number, number]
  title?: string
  content?: string | HTMLElement
  offset?: AMapNamespace.Pixel
  animation?: string
  map?: AMapNamespace.Map
  zIndex?: number
  angle?: number
  autoRotation?: boolean
  clickable?: boolean
  draggable?: boolean
  bubble?: boolean
}

// 信息窗体选项
export interface InfoWindowOptions {
  content?: string | HTMLElement
  isCustom?: boolean
  autoMove?: boolean
  closeWhenClickMap?: boolean
  offset?: AMapNamespace.Pixel
  size?: AMapNamespace.Size
  position?: [number, number]
  showShadow?: boolean
}

// 地理编码选项
export interface GeocoderOptions {
  city?: string
  radius?: number
  extensions?: 'base' | 'all'
}

// 地点搜索选项
export interface PlaceSearchOptions {
  type?: string
  city?: string
  citylimit?: boolean
  pageSize?: number
  pageIndex?: number
  extensions?: 'base' | 'all'
}

// 自动补全选项
export interface AutoCompleteOptions {
  city?: string
  input?: string | HTMLElement
  output?: string | HTMLElement
}

// 工具条选项
export interface ToolBarOptions {
  position?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
  ruler?: boolean
  direction?: boolean
  autoPosition?: boolean
}

// 比例尺选项
export interface ScaleOptions {
  position?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
}

// 控制条选项
export interface ControlBarOptions {
  position?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
  showControlBar?: boolean
  showZoomBar?: boolean
}

// 定位选项
export interface GeolocationOptions {
  enableHighAccuracy?: boolean
  timeout?: number
  maximumAge?: number
  convert?: boolean
  showButton?: boolean
  buttonPosition?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
  buttonOffset?: AMapNamespace.Pixel
  zoomToAccuracy?: boolean
  showMarker?: boolean
  showCircle?: boolean
  panToLocation?: boolean
}

// 点聚合选项
export interface MarkerClustererOptions {
  gridSize?: number
  maxZoom?: number
  averageCenter?: boolean
  minClusterSize?: number
  styles?: any[]
}

// 地理编码结果
export interface GeocodeResult {
  info: string
  geocodes: Geocode[]
}

// 逆地理编码结果
export interface RegeocodeResult {
  info: string
  regeocode: Regeocode
}

export interface Geocode {
  formattedAddress: string
  country: string
  province: string
  city: string
  district: string
  adcode: string
  level: string
  location: {
    lng: number
    lat: number
  }
}

export interface Regeocode {
  formattedAddress: string
  addressComponent: {
    country: string
    province: string
    city: string
    district: string
    adcode: string
    township: string
    street: string
    streetNumber: string
  }
  pois: POI[]
}

export interface POI {
  id: string
  name: string
  type: string
  tel: string
  distance: number
  address: string
  location: {
    lng: number
    lat: number
  }
}

// 搜索结果
export interface SearchResult {
  info: string
  poiList: {
    pois: POI[]
    count: number
  }
}

// 自动补全结果
export interface AutoCompleteResult {
  info: string
  tips: Tip[]
}

export interface Tip {
  name: string
  district: string
  adcode: string
  address: string
  location?: {
    lng: number
    lat: number
  }
}

// 定位结果
export interface GeolocationResult {
  info: string
  position: {
    lng: number
    lat: number
  }
  accuracy: number
  isConverted: boolean
}

export {}
