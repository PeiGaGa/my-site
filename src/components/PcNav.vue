<template>
  <nav class="pc-nav">
    <div class="pc-nav__left">
      <router-link to="/" class="logo">连深海洋</router-link>
    </div>
    <ul class="pc-nav__center">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/about">关于我们</router-link></li>
      <li><router-link to="/farming">养殖模式</router-link></li>
      <li><router-link to="/research">科研平台</router-link></li>
      <li><router-link to="/products">产品中心</router-link></li>
      <li><router-link to="/news">新闻动态</router-link></li>
      <li><router-link to="/contact">联系合作</router-link></li>
    </ul>
    <div class="pc-nav__right">
      <button class="lang">中/EN</button>
    </div>
  </nav>
</template>

<style scoped>
.pc-nav { display:flex; align-items:center; justify-content:space-between; width:100%; padding:0 40px; height:64px; }
.pc-nav__left { flex:0 0 auto; }
.pc-nav__center { flex:1 1 auto; display:flex; justify-content:center; gap:28px; list-style:none; margin:0; padding:0; }
.pc-nav__right { flex:0 0 auto; display:flex; align-items:center; gap:16px; }
.logo { font-weight:700; letter-spacing:2px; color:#fff; text-decoration:none; }
.pc-nav__center a { color:#fff; text-decoration:none; font-size:14px; }
.pc-nav__center a.router-link-active { position:relative; }
.pc-nav__center a.router-link-active::after { content:""; position:absolute; left:0; right:0; bottom:-8px; height:2px; background:#fff; opacity:0.9; }
.lang { background:transparent; border:1px solid rgba(255,255,255,0.6); color:#fff; padding:4px 10px; border-radius:14px; cursor:pointer; }
</style>


