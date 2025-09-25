<template>
  <section class="hero" :style="{ backgroundImage: `url(${ex})` }">
    <h1>连深海洋</h1>
    <p>开创中国深远海三文鱼新纪元</p>
    <div class="cta">
      <router-link class="btn primary" to="/products">产品中心</router-link>
      <router-link class="btn" to="/news">新闻动态</router-link>
    </div>
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
import ex from '@/assets/images/ex.png'
</script>

<style scoped>
.hero { padding: 48px 20px; min-height: 70vh; background-position:center; background-size:cover; background-repeat:no-repeat; display:flex; flex-direction:column; justify-content:center; color:#fff; }
h1 { font-size: clamp(28px, 6vw, 72px); line-height: 1.1; margin:0; text-shadow:0 2px 12px rgba(0,0,0,0.35); }
p { font-size: clamp(14px, 2vw, 20px); color: #fff; text-shadow:0 2px 10px rgba(0,0,0,0.3); }
.cta { margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap; }
.btn { padding: 10px 16px; border: 1px solid #ddd; border-radius: 6px; }
.primary { background: #1677ff; color: #fff; border-color: #1677ff; }
.section { padding: 40px 0; }
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
.card { background:#f7f8fa; border:1px solid #eee; border-radius:8px; padding:16px; text-align:center; }
.news { display:grid; gap:8px; }
.contact-grid { display:grid; gap:12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.contact-card { border:1px solid #eee; border-radius:8px; padding:16px; }
@media (min-width: 1024px) {
  .hero { padding: 80px 60px; min-height: 88vh; }
}
</style>


