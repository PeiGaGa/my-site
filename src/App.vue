<script setup>
import { useResponsive } from './composables/useResponsive'
import PcLayout from './layouts/PcLayout.vue'
import MobileLayout from './layouts/MobileLayout.vue'

const { isMobile } = useResponsive(1024)
</script>

<template>
  <component :is="isMobile ? MobileLayout : PcLayout" />
</template>


<style>
:root { 
  --pc-header-height: 7rem; /* 112px */
  --m-header-height: 4.5rem; /* 72px */
  font-size: 16px; /* 设置根字体大小为 16px，1rem = 16px */
}

html, body, #app { margin: 0; padding: 0; }
*, *::before, *::after { box-sizing: border-box; }

/* 响应式根字体大小设置 - 更精细的断点控制 */
/* 超小屏幕 (≤320px) */
@media (max-width: 320px) {
  :root {
    font-size: 12px; /* 超小屏幕使用更小的根字体 */
  }
}

/* 小屏幕 (321px - 480px) */
@media (min-width: 321px) and (max-width: 480px) {
  :root {
    font-size: 13px; /* 小屏幕 */
  }
}

/* 中等屏幕 (481px - 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  :root {
    font-size: 14px; /* 中等屏幕 */
  }
}

/* 平板屏幕 (769px - 1023px) */
@media (min-width: 769px) and (max-width: 1023px) {
  :root {
    font-size: 15px; /* 平板屏幕 */
  }
}

/* PC屏幕 (1024px - 1199px) */
@media (min-width: 1024px) and (max-width: 1199px) {
  :root {
    font-size: 16px; /* 标准PC屏幕 */
  }
}

/* 大屏幕 (1200px - 1439px) */
@media (min-width: 1200px) and (max-width: 1439px) {
  :root {
    font-size: 17px; /* 大屏幕 */
  }
}

/* 超大屏幕 (≥1440px) */
@media (min-width: 1440px) {
  :root {
    font-size: 18px; /* 超大屏幕 */
  }
}
</style>
