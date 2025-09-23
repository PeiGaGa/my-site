<template>
  <div class="m-container">
    <header class="m-header">
      <nav class="m-nav">
        <router-link to="/">首页</router-link>
        <router-link to="/products">产品</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/contact">联系</router-link>
      </nav>
    </header>
    <main class="m-main">
      <router-view />
    </main>
    <footer class="m-footer">© Company</footer>
  </div>
  
</template>

<style scoped>
.m-container { padding: 0 16px; }
.m-header, .m-footer { height: 48px; display:flex; align-items:center; }
.m-main { min-height: calc(100vh - 96px); }
.m-nav { display:flex; gap:12px; font-size:14px; }
.m-nav a { color:#333; text-decoration:none; }
.m-nav a.router-link-active { color:#1677ff; }
</style>


