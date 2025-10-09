<template>
  <section class="hero" role="img" aria-label="home hero">
    <Swiper
      class="hero-swiper"
      :modules="modules"
      :loop="true"
      :speed="700"
      :autoplay="{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      :pagination="false"
      :a11y="{ enabled: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
        <img class="hero-img" :src="slide.src" :alt="slide.alt" />
      </SwiperSlide>
    </Swiper>
    <div class="hero-controls">
      <span class="hero-prev" role="button" aria-label="上一张" @click="goPrev">《</span>
      <div class="hero-right">
        <span class="hero-counter">{{ currentPadded }}/{{ totalPadded }}</span>
        <span class="hero-next" role="button" aria-label="下一张" @click="goNext">》</span>
      </div>
    </div>
    <div class="hero-mask"></div>
    <h1 class="hero-title">连深海洋</h1>
  </section>

  <section class="section">
    <h2>关于连深</h2>
    <p>企业简介、使命愿景与核心价值观概述。</p>
  </section>

  <section class="section">
    <h2>养殖模式</h2>
    <p>陆海接力、深远海工船、黄海冷水团等创新模式。</p>
  </section>

  <section class="section">
    <h2>科研平台</h2>
    <p>科研项目与平台能力展示。</p>
  </section>

  <section class="section">
    <h2>产品中心</h2>
    <div class="cards">
      <div class="card" v-for="i in 4" :key="i">主力产品 {{ i }}</div>
    </div>
  </section>

  <section class="section">
    <h2>新闻动态</h2>
    <ul class="news">
      <li v-for="i in 3" :key="i">
        <router-link :to="{ name: 'news-detail', params: { id: i } }">热门新闻 {{ i }}</router-link>
      </li>
    </ul>
  </section>

  <section class="section">
    <h2>联系我们</h2>
    <div class="contact-grid">
      <div class="contact-card">
        <h3>加盟合作</h3>
        <p>批发采购、渠道加盟 联系人：张主管 13800000000</p>
      </div>
      <div class="contact-card">
        <h3>科研合作</h3>
        <p>高校/机构合作 联系人：王老师 13900000000</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ex from '@/assets/images/ex.png'
import copy from '@/assets/images/copy.png'
import { computed, ref } from 'vue'

const slides = [
  { src: ex, alt: '连深海洋 一' },
  { src: copy, alt: '连深海洋 二' },
]

const modules = [Autoplay, Pagination, A11y]

const swiperRef = ref(null)
const currentIndex = ref(1)
const total = slides.length
const currentPadded = computed(() => String(currentIndex.value).padStart(2, '0'))
const totalPadded = computed(() => String(total).padStart(2, '0'))

function onSwiper(instance) {
  swiperRef.value = instance
  // 初始索引（loop 模式下 activeIndex 从 0 开始）
  currentIndex.value = normalizeRealIndex(instance)
}

function onSlideChange(instance) {
  currentIndex.value = normalizeRealIndex(instance)
}

function normalizeRealIndex(instance) {
  const real = (instance?.realIndex ?? 0) + 1
  return real <= 0 ? 1 : real
}

function goNext() {
  swiperRef.value?.slideNext()
}

function goPrev() {
  swiperRef.value?.slidePrev()
}
</script>

<style scoped>
.hero { position: relative; width:100vw; margin-left: calc(50% - 50vw); height: 56vh; min-height: 20rem; max-height: 42.5rem; overflow:hidden; } /* 320px, 680px */
.hero-swiper { width:100%; height:100%; }
.hero-img { width:100%; height:100%; object-fit:cover; display:block; }
.hero-mask { position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.45) 100%); }
.hero-title { position:absolute; left:50%; top:60%; transform: translate(-50%, -50%); margin:0; color:#fff; font-weight:800; letter-spacing:0.125rem; font-size: 2.5rem; text-align:center; white-space:nowrap; } /* 2px, 40px */

/* 自定义底部控制条（左：上一张；右：页码+下一张） */
.hero-controls { position:absolute; left:0; right:0; bottom: 1rem; display:flex; align-items:center; justify-content: space-between; padding: 0 1rem; z-index: 2; padding: 0 2.5rem;}
.hero-right { display:flex; align-items:center; gap: 0.5rem; }
.hero-counter { color:#fff; font-weight:600; letter-spacing:0.05em; text-shadow: 0 1px 2px rgba(0,0,0,0.35); }
.hero-next, .hero-prev { border:0; background: transparent; color:#fff; padding: 0; border-radius: 0; cursor: pointer; font-size: 1.25rem; line-height: 1; text-shadow: 0 1px 2px rgba(0,0,0,0.35); }
.hero-next:hover, .hero-prev:hover { opacity: 0.85; }

@media (min-width: 768px) {
  .hero-title { font-size: 5rem; } /* 80px */
}

@media (min-width: 1200px) {
  .hero-title { font-size: 7rem; } /* 112px */
}

@media (min-width: 1025px) {
  .hero { margin-top: calc(var(--pc-header-height) * -1); }
}
.section { padding: 2.5rem 0; } /* 40px */
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr)); gap: 0.75rem; } /* 160px, 12px */
.card { background:#f7f8fa; border:1px solid #eee; border-radius:0.5rem; padding:1rem; text-align:center; } /* 8px, 16px */
.news { display:grid; gap:0.5rem; } /* 8px */
.contact-grid { display:grid; gap:0.75rem; grid-template-columns: repeat(auto-fit, minmax(13.75rem, 1fr)); } /* 12px, 220px */
.contact-card { border:1px solid #eee; border-radius:0.5rem; padding:1rem; } /* 8px, 16px */
@media (min-width: 1024px) {
}
</style>


