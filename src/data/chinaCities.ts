/**
 * 中国主要城市旅游目的地数据
 * 包含省会城市、计划单列市、热门旅游城市等
 */

import type { Destination } from '@/api/types/travel'

/**
 * 中国主要城市目的地数据列表
 */
export const chinaCities: Destination[] = [
  // ========== 直辖市 ==========
  {
    id: 'shanghai',
    name: '上海',
    nameEn: 'Shanghai',
    description: '国际化大都市，东方巴黎，融合了传统与现代的魅力',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '上海',
      city: '上海',
      coordinates: { lat: 31.2304, lng: 121.4737 }
    },
    tags: ['购物', '美食', '历史文化', '现代都市'],
    rating: 4.8,
    reviewCount: 12580,
    highlights: ['外滩', '东方明珠', '豫园', '南京路'],
    bestSeason: '春秋两季',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'beijing',
    name: '北京',
    nameEn: 'Beijing',
    description: '中国首都，历史文化名城，拥有丰富的文化遗产',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '北京',
      city: '北京',
      coordinates: { lat: 39.9042, lng: 116.4074 }
    },
    tags: ['历史文化', '古建筑', '博物馆', '皇家园林'],
    rating: 4.9,
    reviewCount: 15230,
    highlights: ['故宫', '长城', '天坛', '颐和园'],
    bestSeason: '春秋两季',
    recommendedDuration: 5,
    budget: { low: 3000, medium: 6000, high: 12000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'tianjin',
    name: '天津',
    nameEn: 'Tianjin',
    description: '渤海明珠，近代历史名城',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '天津',
      city: '天津',
      coordinates: { lat: 39.3434, lng: 117.3616 }
    },
    tags: ['历史文化', '美食', '现代都市'],
    rating: 4.5,
    reviewCount: 6800,
    highlights: ['古文化街', '五大道', '天津眼', '滨海图书馆'],
    bestSeason: '春秋两季',
    recommendedDuration: 2,
    budget: { low: 1500, medium: 3000, high: 6000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'chongqing',
    name: '重庆',
    nameEn: 'Chongqing',
    description: '山城，火锅之都',
    image: 'https://images.unsplash.com/photo-1537511133960-3c9c3ff5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '重庆',
      city: '重庆',
      coordinates: { lat: 29.4316, lng: 106.9123 }
    },
    tags: ['美食', '山城风光', '历史文化', '现代都市'],
    rating: 4.8,
    reviewCount: 11000,
    highlights: ['洪崖洞', '解放碑', '磁器口', '武隆'],
    bestSeason: '春秋两季',
    recommendedDuration: 4,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁', '轻轨']
  },

  // ========== 华东地区 ==========
  {
    id: 'nanjing',
    name: '南京',
    nameEn: 'Nanjing',
    description: '六朝古都，历史文化名城',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '江苏',
      city: '南京',
      coordinates: { lat: 32.0603, lng: 118.7969 }
    },
    tags: ['历史文化', '古建筑', '博物馆'],
    rating: 4.7,
    reviewCount: 8200,
    highlights: ['中山陵', '夫子庙', '明孝陵', '南京博物院'],
    bestSeason: '春秋两季',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'hangzhou',
    name: '杭州',
    nameEn: 'Hangzhou',
    description: '西湖美景，人间天堂',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '浙江',
      city: '杭州',
      coordinates: { lat: 30.2741, lng: 120.1551 }
    },
    tags: ['自然风光', '历史文化', '园林', '美食'],
    rating: 4.7,
    reviewCount: 10500,
    highlights: ['西湖', '灵隐寺', '西溪湿地', '宋城'],
    bestSeason: '春秋两季',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'suzhou',
    name: '苏州',
    nameEn: 'Suzhou',
    description: '园林之城，东方水城',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '江苏',
      city: '苏州',
      coordinates: { lat: 31.2989, lng: 120.5853 }
    },
    tags: ['园林', '历史文化', '水乡', '古典建筑'],
    rating: 4.7,
    reviewCount: 8900,
    highlights: ['拙政园', '周庄', '虎丘', '留园'],
    bestSeason: '春秋两季',
    recommendedDuration: 2,
    budget: { low: 1800, medium: 3500, high: 7000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'qingdao',
    name: '青岛',
    nameEn: 'Qingdao',
    description: '海滨城市，啤酒之都',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '山东',
      city: '青岛',
      coordinates: { lat: 36.0671, lng: 120.3826 }
    },
    tags: ['海滨', '啤酒', '欧式建筑', '海鲜'],
    rating: 4.6,
    reviewCount: 8500,
    highlights: ['栈桥', '崂山', '五四广场', '啤酒博物馆'],
    bestSeason: '夏季',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'xiamen',
    name: '厦门',
    nameEn: 'Xiamen',
    description: '海上花园，文艺小城',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '福建',
      city: '厦门',
      coordinates: { lat: 24.4798, lng: 118.0894 }
    },
    tags: ['海滨', '文艺', '岛屿', '休闲'],
    rating: 4.7,
    reviewCount: 9200,
    highlights: ['鼓浪屿', '厦门大学', '南普陀寺', '曾厝垵'],
    bestSeason: '全年',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁', '公交']
  },
  {
    id: 'dalian',
    name: '大连',
    nameEn: 'Dalian',
    description: '北方明珠，浪漫之都',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '辽宁',
      city: '大连',
      coordinates: { lat: 38.9140, lng: 121.6147 }
    },
    tags: ['海滨', '欧式建筑', '海鲜', '休闲'],
    rating: 4.6,
    reviewCount: 7800,
    highlights: ['星海广场', '老虎滩', '金石滩', '有轨电车'],
    bestSeason: '夏季',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁', '地铁']
  },

  // ========== 华南地区 ==========
  {
    id: 'guangzhou',
    name: '广州',
    nameEn: 'Guangzhou',
    description: '羊城，美食之都，千年商都',
    image: 'https://images.unsplash.com/photo-1537511133960-3c9c3ff5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '广东',
      city: '广州',
      coordinates: { lat: 23.1291, lng: 113.2644 }
    },
    tags: ['美食', '购物', '现代都市', '历史文化'],
    rating: 4.7,
    reviewCount: 9800,
    highlights: ['广州塔', '陈家祠', '沙面', '长隆'],
    bestSeason: '全年',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'shenzhen',
    name: '深圳',
    nameEn: 'Shenzhen',
    description: '创新之都，现代科技城市',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '广东',
      city: '深圳',
      coordinates: { lat: 22.5431, lng: 114.0579 }
    },
    tags: ['现代都市', '购物', '科技', '主题公园'],
    rating: 4.6,
    reviewCount: 8500,
    highlights: ['欢乐谷', '世界之窗', '华侨城', '大梅沙'],
    bestSeason: '全年',
    recommendedDuration: 3,
    budget: { low: 2500, medium: 4500, high: 9000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'sanya',
    name: '三亚',
    nameEn: 'Sanya',
    description: '热带滨海城市，度假天堂',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '海南',
      city: '三亚',
      coordinates: { lat: 18.4066, lng: 109.8421 }
    },
    tags: ['海滨度假', '热带风光', '水上运动', '休闲'],
    rating: 4.7,
    reviewCount: 9500,
    highlights: ['亚龙湾', '天涯海角', '南山寺', '蜈支洲岛'],
    bestSeason: '冬季',
    recommendedDuration: 5,
    budget: { low: 3000, medium: 6000, high: 12000 },
    transportation: ['飞机']
  },
  {
    id: 'guilin',
    name: '桂林',
    nameEn: 'Guilin',
    description: '山水甲天下',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '广西',
      city: '桂林',
      coordinates: { lat: 25.2742, lng: 110.2901 }
    },
    tags: ['自然风光', '山水', '摄影', '休闲'],
    rating: 4.6,
    reviewCount: 8900,
    highlights: ['漓江', '阳朔', '象鼻山', '龙脊梯田'],
    bestSeason: '4-10 月',
    recommendedDuration: 4,
    budget: { low: 1800, medium: 3500, high: 7000 },
    transportation: ['飞机', '高铁']
  },

  // ========== 华中地区 ==========
  {
    id: 'wuhan',
    name: '武汉',
    nameEn: 'Wuhan',
    description: '江城，九省通衢',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '湖北',
      city: '武汉',
      coordinates: { lat: 30.5928, lng: 114.3055 }
    },
    tags: ['历史文化', '美食', '高校', '江湖风光'],
    rating: 4.6,
    reviewCount: 7500,
    highlights: ['黄鹤楼', '东湖', '户部巷', '武汉大学'],
    bestSeason: '春秋两季',
    recommendedDuration: 3,
    budget: { low: 1800, medium: 3500, high: 7000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'changsha',
    name: '长沙',
    nameEn: 'Changsha',
    description: '娱乐之都，美食之城',
    image: 'https://images.unsplash.com/photo-1537511133960-3c9c3ff5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '湖南',
      city: '长沙',
      coordinates: { lat: 28.2282, lng: 112.9388 }
    },
    tags: ['美食', '娱乐', '历史文化', '休闲'],
    rating: 4.6,
    reviewCount: 8200,
    highlights: ['橘子洲', '岳麓山', '天心阁', '坡子街'],
    bestSeason: '春秋两季',
    recommendedDuration: 3,
    budget: { low: 1800, medium: 3500, high: 7000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'zhangjiajie',
    name: '张家界',
    nameEn: 'Zhangjiajie',
    description: '奇峰异石，阿凡达取景地',
    image: 'https://images.unsplash.com/photo-1537511133960-3c9c3ff5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '湖南',
      city: '张家界',
      coordinates: { lat: 29.1167, lng: 110.4833 }
    },
    tags: ['自然风光', '山峰', '摄影', '世界遗产'],
    rating: 4.8,
    reviewCount: 9200,
    highlights: ['武陵源', '天门山', '袁家界', '金鞭溪'],
    bestSeason: '春秋两季',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁']
  },

  // ========== 华北地区 ==========
  {
    id: 'xian',
    name: '西安',
    nameEn: "Xian",
    description: '古都，兵马俑所在地',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '陕西',
      city: '西安',
      coordinates: { lat: 34.3416, lng: 108.9398 }
    },
    tags: ['历史文化', '古建筑', '博物馆', '美食'],
    rating: 4.7,
    reviewCount: 9870,
    highlights: ['兵马俑', '大雁塔', '古城墙', '回民街'],
    bestSeason: '春秋两季',
    recommendedDuration: 4,
    budget: { low: 2500, medium: 5000, high: 10000 },
    transportation: ['飞机', '高铁']
  },
  {
    id: 'taiyuan',
    name: '太原',
    nameEn: 'Taiyuan',
    description: '龙城，晋商文化发源地',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '山西',
      city: '太原',
      coordinates: { lat: 37.8706, lng: 112.5489 }
    },
    tags: ['历史文化', '古建筑', '晋商文化'],
    rating: 4.4,
    reviewCount: 5200,
    highlights: ['晋祠', '平遥古城', '乔家大院', '双塔寺'],
    bestSeason: '春秋两季',
    recommendedDuration: 3,
    budget: { low: 1500, medium: 3000, high: 6000 },
    transportation: ['飞机', '高铁']
  },
  {
    id: 'shijiazhuang',
    name: '石家庄',
    nameEn: 'Shijiazhuang',
    description: '火车拉来的城市',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '河北',
      city: '石家庄',
      coordinates: { lat: 38.0428, lng: 114.5149 }
    },
    tags: ['历史文化', '红色旅游'],
    rating: 4.3,
    reviewCount: 4500,
    highlights: ['赵州桥', '西柏坡', '正定古城', '苍岩山'],
    bestSeason: '春秋两季',
    recommendedDuration: 2,
    budget: { low: 1200, medium: 2500, high: 5000 },
    transportation: ['飞机', '高铁']
  },

  // ========== 东北地区 ==========
  {
    id: 'shenyang',
    name: '沈阳',
    nameEn: 'Shenyang',
    description: '东方鲁尔，工业重镇',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '辽宁',
      city: '沈阳',
      coordinates: { lat: 41.8057, lng: 123.4315 }
    },
    tags: ['历史文化', '工业旅游', '满清文化'],
    rating: 4.5,
    reviewCount: 6800,
    highlights: ['沈阳故宫', '张氏帅府', '北陵', '中街'],
    bestSeason: '夏季',
    recommendedDuration: 2,
    budget: { low: 1500, medium: 3000, high: 6000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'harbin',
    name: '哈尔滨',
    nameEn: 'Harbin',
    description: '冰城，东方莫斯科',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '黑龙江',
      city: '哈尔滨',
      coordinates: { lat: 45.8038, lng: 126.5340 }
    },
    tags: ['冰雪', '欧式建筑', '俄式风情', '啤酒'],
    rating: 4.6,
    reviewCount: 7500,
    highlights: ['中央大街', '索菲亚教堂', '冰雪大世界', '太阳岛'],
    bestSeason: '冬季',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'changchun',
    name: '长春',
    nameEn: 'Changchun',
    description: '北国春城，电影城',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '吉林',
      city: '长春',
      coordinates: { lat: 43.8171, lng: 125.3235 }
    },
    tags: ['电影文化', '历史文化', '工业旅游'],
    rating: 4.4,
    reviewCount: 5800,
    highlights: ['伪满皇宫', '长影世纪城', '净月潭', '南湖公园'],
    bestSeason: '夏季',
    recommendedDuration: 2,
    budget: { low: 1500, medium: 3000, high: 6000 },
    transportation: ['飞机', '高铁', '轻轨']
  },

  // ========== 西南地区 ==========
  {
    id: 'chengdu',
    name: '成都',
    nameEn: 'Chengdu',
    description: '熊猫故乡，美食之都',
    image: 'https://images.unsplash.com/photo-1537511133960-3c9c3ff5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '四川',
      city: '成都',
      coordinates: { lat: 30.5728, lng: 104.0668 }
    },
    tags: ['美食', '熊猫', '休闲', '文化'],
    rating: 4.8,
    reviewCount: 11200,
    highlights: ['大熊猫基地', '宽窄巷子', '锦里', '春熙路'],
    bestSeason: '全年',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'kunming',
    name: '昆明',
    nameEn: 'Kunming',
    description: '春城，四季如春',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '云南',
      city: '昆明',
      coordinates: { lat: 25.0406, lng: 102.7125 }
    },
    tags: ['自然风光', '气候宜人', '少数民族', '花卉'],
    rating: 4.6,
    reviewCount: 7200,
    highlights: ['石林', '滇池', '大理古城', '丽江'],
    bestSeason: '全年',
    recommendedDuration: 5,
    budget: { low: 2500, medium: 5000, high: 10000 },
    transportation: ['飞机', '高铁']
  },
  {
    id: 'lijiang',
    name: '丽江',
    nameEn: 'Lijiang',
    description: '古城风光，纳西族文化',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '云南',
      city: '丽江',
      coordinates: { lat: 26.8721, lng: 100.2278 }
    },
    tags: ['古城', '少数民族', '历史文化', '休闲'],
    rating: 4.7,
    reviewCount: 8800,
    highlights: ['丽江古城', '玉龙雪山', '泸沽湖', '束河古镇'],
    bestSeason: '全年',
    recommendedDuration: 4,
    budget: { low: 2500, medium: 5000, high: 10000 },
    transportation: ['飞机', '高铁']
  },
  {
    id: 'guiyang',
    name: '贵阳',
    nameEn: 'Guiyang',
    description: '林城，避暑之都',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '贵州',
      city: '贵阳',
      coordinates: { lat: 26.6470, lng: 106.6302 }
    },
    tags: ['自然风光', '避暑', '少数民族', '美食'],
    rating: 4.5,
    reviewCount: 6500,
    highlights: ['青岩古镇', '黔灵山', '花溪公园', '甲秀楼'],
    bestSeason: '夏季',
    recommendedDuration: 3,
    budget: { low: 1800, medium: 3500, high: 7000 },
    transportation: ['飞机', '高铁']
  },

  // ========== 西北地区 ==========
  {
    id: 'lanzhou',
    name: '兰州',
    nameEn: 'Lanzhou',
    description: '黄河之都，牛肉面之乡',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '甘肃',
      city: '兰州',
      coordinates: { lat: 36.0611, lng: 103.8343 }
    },
    tags: ['美食', '黄河文化', '历史文化'],
    rating: 4.4,
    reviewCount: 5500,
    highlights: ['中山桥', '白塔山', '甘肃省博物馆', '黄河母亲雕像'],
    bestSeason: '夏季',
    recommendedDuration: 2,
    budget: { low: 1500, medium: 3000, high: 6000 },
    transportation: ['飞机', '高铁']
  },
  {
    id: 'xining',
    name: '西宁',
    nameEn: 'Xining',
    description: '夏都，青藏门户',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '青海',
      city: '西宁',
      coordinates: { lat: 36.6171, lng: 101.7782 }
    },
    tags: ['高原风光', '避暑', '藏族文化', '宗教'],
    rating: 4.5,
    reviewCount: 5800,
    highlights: ['塔尔寺', '青海湖', '东关清真大寺', '日月山'],
    bestSeason: '夏季',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁']
  },
  {
    id: 'yinchuan',
    name: '银川',
    nameEn: 'Yinchuan',
    description: '塞上江南，西夏古都',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '宁夏',
      city: '银川',
      coordinates: { lat: 38.4872, lng: 106.2309 }
    },
    tags: ['历史文化', '西夏文化', '沙漠风光'],
    rating: 4.4,
    reviewCount: 4800,
    highlights: ['西夏王陵', '沙湖', '镇北堡影视城', '贺兰山'],
    bestSeason: '夏季',
    recommendedDuration: 2,
    budget: { low: 1500, medium: 3000, high: 6000 },
    transportation: ['飞机', '高铁']
  },
  {
    id: 'urumqi',
    name: '乌鲁木齐',
    nameEn: 'Urumqi',
    description: '亚心之都，丝路明珠',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '新疆',
      city: '乌鲁木齐',
      coordinates: { lat: 43.8256, lng: 87.6168 }
    },
    tags: ['少数民族', '丝路文化', '自然风光', '美食'],
    rating: 4.5,
    reviewCount: 6200,
    highlights: ['天山天池', '大巴扎', '红山公园', '南山牧场'],
    bestSeason: '夏季',
    recommendedDuration: 3,
    budget: { low: 2500, medium: 5000, high: 10000 },
    transportation: ['飞机', '高铁']
  },
  {
    id: 'lasa',
    name: '拉萨',
    nameEn: 'Lhasa',
    description: '日光城，雪域高原',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '西藏',
      city: '拉萨',
      coordinates: { lat: 29.6500, lng: 91.1409 }
    },
    tags: ['藏族文化', '宗教', '高原风光', '朝圣'],
    rating: 4.9,
    reviewCount: 8500,
    highlights: ['布达拉宫', '大昭寺', '八廓街', '纳木错'],
    bestSeason: '夏季',
    recommendedDuration: 5,
    budget: { low: 3500, medium: 7000, high: 14000 },
    transportation: ['飞机', '火车']
  },

  // ========== 其他地区 ==========
  {
    id: 'zhengzhou',
    name: '郑州',
    nameEn: 'Zhengzhou',
    description: '商都，铁路枢纽',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '河南',
      city: '郑州',
      coordinates: { lat: 34.7466, lng: 113.6253 }
    },
    tags: ['历史文化', '商文化', '少林寺'],
    rating: 4.4,
    reviewCount: 5800,
    highlights: ['少林寺', '河南博物院', '黄河风景区', '嵩山'],
    bestSeason: '春秋两季',
    recommendedDuration: 3,
    budget: { low: 1500, medium: 3000, high: 6000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'jinan',
    name: '济南',
    nameEn: 'Jinan',
    description: '泉城，四面荷花三面柳',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '山东',
      city: '济南',
      coordinates: { lat: 36.6512, lng: 117.1209 }
    },
    tags: ['泉水', '历史文化', '自然风光'],
    rating: 4.5,
    reviewCount: 6500,
    highlights: ['趵突泉', '大明湖', '千佛山', '五龙潭'],
    bestSeason: '春秋两季',
    recommendedDuration: 2,
    budget: { low: 1500, medium: 3000, high: 6000 },
    transportation: ['飞机', '高铁', '公交']
  },
  {
    id: 'nanchang',
    name: '南昌',
    nameEn: 'Nanchang',
    description: '英雄城，革命摇篮',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '江西',
      city: '南昌',
      coordinates: { lat: 28.6829, lng: 115.8579 }
    },
    tags: ['红色旅游', '历史文化', '湖泊风光'],
    rating: 4.4,
    reviewCount: 5500,
    highlights: ['滕王阁', '八一广场', '鄱阳湖', '庐山'],
    bestSeason: '春秋两季',
    recommendedDuration: 2,
    budget: { low: 1500, medium: 3000, high: 6000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'fuzhou',
    name: '福州',
    nameEn: 'Fuzhou',
    description: '榕城，温泉之都',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '福建',
      city: '福州',
      coordinates: { lat: 26.0745, lng: 119.2965 }
    },
    tags: ['温泉', '历史文化', '自然风光'],
    rating: 4.5,
    reviewCount: 5800,
    highlights: ['三坊七巷', '鼓山', '西湖公园', '温泉公园'],
    bestSeason: '全年',
    recommendedDuration: 2,
    budget: { low: 1500, medium: 3000, high: 6000 },
    transportation: ['飞机', '高铁', '地铁']
  },
  {
    id: 'haikou',
    name: '海口',
    nameEn: 'Haikou',
    description: '椰城，热带滨海城市',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '海南',
      city: '海口',
      coordinates: { lat: 20.0444, lng: 110.1999 }
    },
    tags: ['海滨', '热带风光', '休闲', '美食'],
    rating: 4.5,
    reviewCount: 6200,
    highlights: ['骑楼老街', '假日海滩', '火山口公园', '万绿园'],
    bestSeason: '冬季',
    recommendedDuration: 3,
    budget: { low: 2000, medium: 4000, high: 8000 },
    transportation: ['飞机', '高铁']
  },
  {
    id: 'nanning',
    name: '南宁',
    nameEn: 'Nanning',
    description: '绿城，壮乡首府',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: {
      country: '中国',
      province: '广西',
      city: '南宁',
      coordinates: { lat: 22.8170, lng: 108.3665 }
    },
    tags: ['少数民族', '绿城', '美食', '边境风情'],
    rating: 4.4,
    reviewCount: 5500,
    highlights: ['青秀山', '德天瀑布', '南湖公园', '扬美古镇'],
    bestSeason: '全年',
    recommendedDuration: 3,
    budget: { low: 1800, medium: 3500, high: 7000 },
    transportation: ['飞机', '高铁']
  }
]
