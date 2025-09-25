<template>
  <section class="hero" role="img" aria-label="home hero">
    <img class="hero-img" :src="ex" alt="连深海洋" />
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
import ex from '@/assets/images/ex.png'
</script>

<style scoped>
.hero { position: relative; width:100vw; margin-left: calc(50% - 50vw); height: 56vh; min-height: 320px; max-height: 680px; overflow:hidden; }
.hero-img { width:100%; height:100%; object-fit:cover; display:block; }
.hero-mask { position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.45) 100%); }
.hero-title { position:absolute; left:50%; top:60%; transform: translate(-50%, -50%); margin:0; color:#fff; font-weight:800; letter-spacing:2px; font-size: 40px; text-align:center; white-space:nowrap; }

@media (min-width: 768px) {
  .hero-title { font-size: 80px; }
}

@media (min-width: 1200px) {
  .hero-title { font-size: 112px; }
}

@media (min-width: 1025px) {
  .hero { margin-top: calc(var(--pc-header-height) * -1); }
}
.section { padding: 40px 0; }
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
.card { background:#f7f8fa; border:1px solid #eee; border-radius:8px; padding:16px; text-align:center; }
.news { display:grid; gap:8px; }
.contact-grid { display:grid; gap:12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.contact-card { border:1px solid #eee; border-radius:8px; padding:16px; }
@media (min-width: 1024px) {
}
</style>


