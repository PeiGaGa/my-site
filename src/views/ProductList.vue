<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import ex from '@/assets/images/ex.png'
import copy from '@/assets/images/copy.png'

// 导入Swiper样式
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const swiperModules = [Pagination, Navigation]

// Swiper实例引用
const imageSwiperRef = ref(null)
const contentSwiperRef = ref(null)
const currentSlide = ref(0)
const isSyncing = ref(false)

// 处理图片轮播初始化
const onImageSwiperInit = (swiper) => {
  imageSwiperRef.value = swiper
}

// 处理内容轮播初始化
const onContentSwiperInit = (swiper) => {
  contentSwiperRef.value = swiper
}

// 处理分页器点击
const handlePaginationClick = (index) => {
  if (imageSwiperRef.value) {
    imageSwiperRef.value.slideTo(index)
  }
  if (contentSwiperRef.value) {
    contentSwiperRef.value.slideTo(index)
  }
  currentSlide.value = index
}

// 处理图片轮播切换
const onImageSlideChange = (swiper) => {
  if (isSyncing.value) return
  currentSlide.value = swiper.activeIndex
  if (contentSwiperRef.value) {
    isSyncing.value = true
    contentSwiperRef.value.slideTo(swiper.activeIndex)
    setTimeout(() => {
      isSyncing.value = false
    }, 100)
  }
}

// 处理内容轮播切换
const onContentSlideChange = (swiper) => {
  if (isSyncing.value) return
  currentSlide.value = swiper.activeIndex
  if (imageSwiperRef.value) {
    isSyncing.value = true
    imageSwiperRef.value.slideTo(swiper.activeIndex)
    setTimeout(() => {
      isSyncing.value = false
    }, 100)
  }
}

// 轮播数据
const slides = ref([
  {
    id: 1,
    image: ex,
    title: '整条鱼（带头去脏）',
    specs: [
      { label: '保质期：', value: '冰鲜产品15天 / 冷冻产品24个月' },
      { label: '三文鱼品种：', value: '大西洋海水紅' },
      { label: '产品形态：', value: '鲜品 / 冻品' },
      { label: '储存条件：', value: '冰鲜产品0-4℃冷保存 / 冷冻产品-1-25℃冷冻保存' },
      { label: '产品规格：', value: '5kg+' }
    ],
    usage: {
      title: '使用方法',
      content: [
        { label: '冰鲜产品：', value: '可根据产品应用需求、直接分割-分割满足生食加工条件' },
        { label: '冷冻产品：', value: '0-4℃低温解冻,流水温水解冻' }
      ]
    }
  },
  {
    id: 2,
    image: ex,
    title: '整条鱼（带头去脏）',
    specs: [
      { label: '保质期：', value: '冰鲜产品15天 / 冷冻产品24个月' },
      { label: '三文鱼品种：', value: '大西洋海水紅' },
      { label: '产品形态：', value: '鲜品 / 冻品' },
      { label: '储存条件：', value: '冰鲜产品0-4℃冷保存 / 冷冻产品-1-25℃冷冻保存' },
      { label: '产品规格：', value: '5kg+' }
    ],
    usage: {
      title: '使用方法',
      content: [
        { label: '冰鲜产品：', value: '可根据产品应用需求、直接分割-分割满足生食加工条件' },
        { label: '冷冻产品：', value: '0-4℃低温解冻,流水温水解冻' }
      ]
    }
  },
  {
    id: 3,
    image: ex,
    title: '整条鱼（带头去脏）',
    specs: [
      { label: '保质期：', value: '冰鲜产品15天 / 冷冻产品24个月' },
      { label: '三文鱼品种：', value: '大西洋海水紅' },
      { label: '产品形态：', value: '鲜品 / 冻品' },
      { label: '储存条件：', value: '冰鲜产品0-4℃冷保存 / 冷冻产品-1-25℃冷冻保存' },
      { label: '产品规格：', value: '5kg+' }
    ],
    usage: {
      title: '使用方法',
      content: [
        { label: '冰鲜产品：', value: '可根据产品应用需求、直接分割-分割满足生食加工条件' },
        { label: '冷冻产品：', value: '0-4℃低温解冻,流水温水解冻' }
      ]
    }
  },
  {
    id: 4,
    image: ex,
    title: '整条鱼（带头去脏）',
    specs: [
      { label: '保质期：', value: '冰鲜产品15天 / 冷冻产品24个月' },
      { label: '三文鱼品种：', value: '大西洋海水紅' },
      { label: '产品形态：', value: '鲜品 / 冻品' },
      { label: '储存条件：', value: '冰鲜产品0-4℃冷保存 / 冷冻产品-1-25℃冷冻保存' },
      { label: '产品规格：', value: '5kg+' }
    ],
    usage: {
      title: '使用方法',
      content: [
        { label: '冰鲜产品：', value: '可根据产品应用需求、直接分割-分割满足生食加工条件' },
        { label: '冷冻产品：', value: '0-4℃低温解冻,流水温水解冻' }
      ]
    }
  },
  {
    id: 5,
    image: ex,
    title: '整条鱼（带头去脏）',
    specs: [
      { label: '保质期：', value: '冰鲜产品15天 / 冷冻产品24个月' },
      { label: '三文鱼品种：', value: '大西洋海水紅' },
      { label: '产品形态：', value: '鲜品 / 冻品' },
      { label: '储存条件：', value: '冰鲜产品0-4℃冷保存 / 冷冻产品-1-25℃冷冻保存' },
      { label: '产品规格：', value: '5kg+' }
    ],
    usage: {
      title: '使用方法',
      content: [
        { label: '冰鲜产品：', value: '可根据产品应用需求、直接分割-分割满足生食加工条件' },
        { label: '冷冻产品：', value: '0-4℃低温解冻,流水温水解冻' }
      ]
    }
  }
])
</script>

<template>
  <section class="page-hero" role="img" aria-label="product hero">
    <img class="page-hero-img" :src="ex" alt="产品中心" />
    <div class="page-hero-mask"></div>
    <h1 class="page-hero-title">产品中心</h1>
  </section>
  <section class="page">
    <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
    <div class="header-left">
      <h1 class="title">产品中心</h1>
      <div class="title-underline"></div>
    </div>
    <div class="divider dashed"></div>

    <!-- 产品轮播 -->
    <div class="product-swiper-container">
      <!-- 图片轮播区域 -->
      <div class="image-swiper-container">
        <Swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :space-between="0"
          :pagination="false"
          :navigation="false"
          @swiper="onImageSwiperInit"
          @slideChange="onImageSlideChange"
          class="image-swiper"
        >
          <SwiperSlide v-for="slide in slides" :key="slide.id" class="swiper-slide-custom">
            <div class="slide-image">
              <img :src="slide.image" :alt="slide.title" />
            </div>
          </SwiperSlide>
        </Swiper>
        
        <!-- 分页器固定在图片下方 -->
        <div class="swiper-pagination-custom">
          <div class="dots">
            <span 
              v-for="(slide, index) in slides" 
              :key="index"
              class="dot"
              :class="{ 'swiper-pagination-bullet-active-custom': index === currentSlide }"
              @click="handlePaginationClick(index)"
            ></span>
          </div>
          <div class="numbers">
            <span 
              v-for="(slide, index) in slides" 
              :key="index"
              @click="handlePaginationClick(index)"
              :class="{ 'active': index === currentSlide }"
            >{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
        </div>
      </div>
      
      <!-- 内容轮播区域 -->
      <Swiper
        :modules="swiperModules"
        :slides-per-view="1"
        :space-between="0"
        :pagination="false"
        :navigation="false"
        @swiper="onContentSwiperInit"
        @slideChange="onContentSlideChange"
        class="content-swiper"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.id" class="swiper-slide-custom">
          <div class="slide-content">
            <!-- 规格与使用方式 -->
            <div class="slide-specs">
              <!-- 产品标题 - 占满一行 -->
              <div class="product-title">
                {{ slide.title }}
              </div>
              
              <div class="specs-content">
                <div class="left">
                  <ul class="kv">
                    <li v-for="spec in slide.specs" :key="spec.label">
                      <span>{{ spec.label }}</span><span>{{ spec.value }}</span>
                    </li>
                  </ul>
                </div>
                <div class="right">
                  <div class="caption">{{ slide.usage.title }}</div>
                  <div class="usage-list">
                    <div v-for="(item, index) in slide.usage.content" :key="index" class="usage-item">
                      <span class="usage-label">{{ item.label }}</span>
                      <span class="usage-value">{{ item.value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- 海上加工中心 - 独立部分，不参与轮播 -->
    <div class="processing">
      <div class="section-caption">海上加工中心</div>
      <div class="processing-intro">
        <div class="left">
          <img :src="ex" alt="加工中心图片" />
        </div>
        <div class="right">
          <h3 class="processing-title">全球首个三文鱼"海上加工中心"</h3>
          <div class="processing-line"></div>
          <div class="metrics">
            <div class="metric"><b>双加工线</b><span>持续稳定</span></div>
            <div class="metric"><b>100吨</b><span>单日最大产能</span></div>
            <div class="metric"><b>5吨</b><span>冷链仓储能力</span></div>
          </div>
          <p class="processing-text">加工流程贴近养殖海域减少运输损耗，确保每条鱼从养殖到成品更鲜更快。</p>
        </div>
      </div>
      <div class="corner-icon"><img class="header-icon" :src="copy" alt="copy" /></div>
    </div>

    <!-- 营销布局 -->
    <div class="marketing">
      <div class="section-caption">营销布局</div>
      <div class="map">
        <img :src="ex" alt="全球营销网络示意" />
      </div>
      <div class="sub-caption">加工与冷链物流体系</div>
      <p class="note">以加工提效、冷链保鲜为核心，构建覆盖国内外的加工与冷链网络，提升产品交付效率与品质稳定性。</p>
    </div>
  </section>
</template>

<style scoped>
.page-hero { position: relative; width:100vw; margin-left: calc(50% - 50vw); height: 56vh; min-height: 320px; max-height: 680px; overflow:hidden; }
.page-hero-img { width:100%; height:100%; object-fit:cover; display:block; }
.page-hero-mask { position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.45) 100%); }
.page-hero-title { position:absolute; left:50%; top:60%; transform: translate(-50%, -50%); margin:0; color:#fff; font-weight:800; letter-spacing:2px; font-size: 40px; text-align:center; white-space:nowrap; }

@media (min-width: 768px) {
  .page-hero-title { font-size: 80px; }
}

@media (min-width: 1200px) {
  .page-hero-title { font-size: 112px; }
}

@media (min-width: 1025px) {
  .page-hero { margin-top: calc(var(--pc-header-height) * -1); }
}
.page { padding: 40px 0; }
.icon-row { display:flex; justify-content:flex-end; }
.header-left { display:flex; flex-direction:column; }
.title { font-size: 22px; margin: 0; }
.title-underline { width:40px; height:3px; background:#f5a34b; margin:6px 0 12px; }
.header-icon { width:24px; height:24px; object-fit:contain; opacity:.8; }

.divider { height: 0; border-top: 2px dashed #e5e6eb; margin: 12px 0 24px; }
.section-caption { 
  font-size:14px; 
  margin-bottom: 30px; 
  font-weight: 600;
  position: relative;
  padding-bottom: 8px;
}
.section-caption::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    #dcdfe6 0,
    #dcdfe6 4px,
    transparent 4px,
    transparent 8px
  );
}

/* 产品轮播 */
.product-swiper-container { position: relative; margin-top: 16px; }
.image-swiper-container { position: relative; }
.image-swiper { width: 100%; }
.content-swiper { width: 100%; }
.swiper-slide-custom { height: auto; }
.slide-content { display: flex; flex-direction: column; gap: 16px; }
.slide-image { position: relative; }
.slide-image img { width: 100%; height: auto; display: block; border-radius: 2px; }

/* 产品标题 */
.product-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
  position: relative;
  display: inline-block;
}
.product-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: #f5a34b;
}
.slide-specs { display: flex; flex-direction: column; gap: 20px; }
.specs-content { display: grid; grid-template-columns: 1fr; gap: 24px; }
.specs-content .left, .specs-content .right { padding-top: 14px; }
.slide-specs .caption { 
  font-weight: 600; 
  margin-bottom: 12px; 
  font-size: 16px;
  color: #333;
}
.kv { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; color: #4a5568; }
.kv li { display: flex; align-items: flex-start; }
.kv b { 
  margin-right: 8px; 
  color: #333; 
  font-weight: 600; 
  min-width: 100px;
  flex-shrink: 0;
}
.kv span { color: #4a5568; line-height: 1.6; }

/* 使用方法样式 */
.usage-list { display: flex; flex-direction: column; gap: 8px; }
.usage-item { display: flex; align-items: flex-start; }
.usage-label { 
  color: #333; 
  min-width: 100px;
  flex-shrink: 0;
}
.usage-value { 
  color: #4a5568; 
  line-height: 1.6;
}

/* 自定义分页器 */
.swiper-pagination-custom { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap: 16px; 
  margin-top: 12px; 
  padding: 8px 0;
}
.swiper-pagination-custom .dots { display: flex; gap: 8px; }
.swiper-pagination-custom .dot { 
  width: 8px; 
  height: 8px; 
  border-radius: 50%; 
  background: #cfd3dc; 
  display: inline-block; 
  cursor: pointer;
  transition: all 0.3s ease;
}
.swiper-pagination-custom .dot:hover { 
  background: #a0aec0; 
  transform: scale(1.2);
}
.swiper-pagination-custom .dot.swiper-pagination-bullet-active-custom { 
  background: #f5a34b; 
  transform: scale(1.3);
}
.swiper-pagination-custom .numbers { 
  display: flex; 
  gap: 12px; 
  color: #8a9099; 
  font-size: 14px; 
  font-weight: 500;
}
.swiper-pagination-custom .numbers span { 
  cursor: pointer; 
  transition: all 0.3s ease;
  padding: 4px 8px;
  border-radius: 4px;
}
.swiper-pagination-custom .numbers span:hover { 
  color: #4a5568; 
  background: #f7f8fa;
}
.swiper-pagination-custom .numbers span.active { 
  color: #f5a34b; 
  background: #fef7ed;
  font-weight: 600;
}

/* 海上加工中心 */
.processing { margin-top:28px; position:relative; }
.processing-intro { display:grid; grid-template-columns: 1fr; gap:24px; align-items:start; }
.processing .left img { 
  width: 100%; 
  max-width: 700px; 
  height: auto; 
  display: block; 
  border-radius: 2px; 
  aspect-ratio: 700/580;
}
.processing .right { padding-top:14px; }
.processing-title { margin:0; font-size:16px; }
.processing-line { height:3px; background:#f5a34b; width:40px; margin:10px 0 12px; }
.metrics { display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; margin-bottom:8px; }
.metric { background:#f7f8fa; border:1px solid #eef0f4; border-radius:6px; padding:10px; text-align:center; }
.metric b { display:block; color:#1f2937; }
.metric span { color:#6b7280; font-size:12px; }
.processing-text { margin:0; line-height:1.8; color:#4a5568; }
.corner-icon { position:absolute; right:0; bottom:-12px; }

/* 营销布局 */
.marketing { margin-top:28px; }
.map img { width:100%; height:auto; display:block; border-radius:2px; }
.sub-caption { color:#6b7785; font-size:18px; margin:12px 0 6px; font-weight: 600;}
.note { margin:0; color:#4a5568; line-height:1.8; }

@media (min-width: 768px) {
  .product-title {
    font-size: 18px;
  }
  .specs-content { grid-template-columns: 1fr 1fr; gap: 40px; }
  .processing-intro { grid-template-columns: 700px 1fr; gap:40px; }
  .processing .left img { 
    width: 100%; 
    height: auto; 
    display: block; 
    border-radius: 2px; 
    max-width: 700px;
    aspect-ratio: 700/580;
  }
  
  /* 桌面端优化规格信息布局 */
  .kv { gap: 10px; }
  .usage-list { gap: 10px; }
}

@media (min-width: 1024px) {
  .processing-intro { grid-template-columns: 700px 1fr; gap:50px; }
  .processing .left img { 
    width: 100%; 
    height: auto; 
    display: block; 
    border-radius: 2px; 
    max-width: 700px;
    aspect-ratio: 700/580;
  }
}
</style>


