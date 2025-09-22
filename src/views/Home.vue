<template>
  <section class="hero">
    <h1>企业官网</h1>
    <p>一句话卖点介绍</p>
    <div class="cta">
      <a class="btn primary">立即体验</a>
      <a class="btn">了解更多</a>
    </div>
  </section>
  <ViewportDemo />
  
</template>

<script setup>
import ViewportDemo from '../components/ViewportDemo.vue'
</script>

<style scoped>
.hero { padding: 48px 0; }
h1 { font-size: clamp(24px, 3.5vw, 48px); line-height: 1.2; }
p { font-size: clamp(14px, 2vw, 18px); color: #666; }
.cta { margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap; }
.btn { padding: 10px 16px; border: 1px solid #ddd; border-radius: 6px; }
.primary { background: #1677ff; color: #fff; border-color: #1677ff; }
@media (min-width: 1024px) {
  .hero { padding: 80px 0; }
}
</style>


