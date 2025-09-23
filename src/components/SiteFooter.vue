<template>
  <footer class="m-footer">
    <div class="m-foot-wrap">
      <div class="top-row">
        <div class="m-brand">
          <div class="logo">连深海洋</div>
          <div class="sub">LIANSHEN MARINE</div>
        </div>
        <nav class="m-links">
          <div class="col">
            <router-link to="/" @click="scrollToTop">首页</router-link>
            <router-link to="/about" @click="scrollToTop">关于我们</router-link>
            <router-link to="/farming" @click="scrollToTop">养殖模式</router-link>
          </div>
          <div class="col">
            <router-link to="/research" @click="scrollToTop">科研平台</router-link>
            <router-link to="/products" @click="scrollToTop">产品中心</router-link>
            <router-link to="/news" @click="scrollToTop">新闻动态</router-link>
          </div>
          <div class="col">
            <a href="/about#join" @click="scrollToTop">加入我们</a>
            <router-link to="/contact" @click="scrollToTop">联系合作</router-link>
          </div>
        </nav>
        <div class="m-social">
          <span>Follow our social media</span>
          <div class="icons">
            <a href="#" aria-label="wechat">🟢</a>
            <a href="#" aria-label="weibo">🟠</a>
            <a href="#" aria-label="linkedin">in</a>
            <a href="#" aria-label="youtube">▶</a>
          </div>
        </div>
      </div>
      <div class="m-divider" />
      <div class="m-search">
        <input placeholder="请输入关键字..." />
        <button>→</button>
      </div>
      <div class="m-copy">
        <span>Copyright 2025 © lianshen marine</span>
        <div class="links"><a href="#">使用条款</a><a href="#">网站地图</a></div>
      </div>
    </div>
  </footer>
</template>

<script setup>
function scrollToTop() {
  try {
    const candidates = [
      document.scrollingElement,
      document.documentElement,
      document.body,
      document.querySelector('.pc-main'),
      document.querySelector('.m-main')
    ].filter(Boolean);
    candidates.forEach((el) => {
      try { el.scrollTop = 0; } catch (_) {}
    });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  } catch (e) {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.m-footer { background:#1e242e; color:#c9d0da; }
.m-foot-wrap { padding: 24px 16px; display:flex; flex-direction:column; gap:16px; max-width: 1280px; margin: 0 auto; }
.m-brand .logo { font-size:20px; color:#fff; font-weight:800; }
.m-brand .sub { font-size:12px; color:#9aa6b2; margin-top:4px; }
.top-row { display:flex; flex-direction:column; gap:16px; }
.m-links { display:flex; flex-wrap:wrap; gap:12px 16px; }
.m-links .col { display:flex; flex-direction:column; gap:24px; min-width: 52px; }
.m-links a { color:#c9d0da; text-decoration:none; font-size:14px; }
.m-links a.router-link-active, .m-links a:hover { color:#fff; }
.m-social { display:flex; align-items:center; justify-content:space-between; }
.m-social .icons { display:flex; gap:12px; }
.m-social .icons a { color:#fff; width:28px; height:28px; display:flex; align-items:center; justify-content:center; background:#2a3140; border-radius:6px; text-decoration:none; }
.m-divider { height:1px; background:#303847; }
.m-search { position:relative; }
.m-search input { width:100%; height:40px; background:#151a22; color:#e5ecf3; border:1px solid #303847; border-radius:4px; padding:0 44px 0 12px; }
.m-search input::placeholder { color:#748094; }
.m-search button { position:absolute; right:6px; top:6px; height:28px; width:28px; border:0; border-radius:4px; background:#2a3140; color:#fff; }
.m-copy { display:flex; justify-content:space-between; align-items:center; color:#9aa6b2; font-size:12px; }
.m-copy .links { display:flex; gap:12px; }
.m-copy .links a { color:#c9d0da; text-decoration:none; }
.m-copy .links a:hover { color:#fff; }

@media (min-width: 1024px) {
  .top-row { flex-direction:row; align-items:flex-start; justify-content:space-between; }
  .m-brand .logo { font-size:28px; }
  .m-links { flex-wrap:nowrap; gap:48px; }
  .m-links a { font-size:15px; }
}
</style>


