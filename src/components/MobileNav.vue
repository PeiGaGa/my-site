<template>
  <nav class="m-nav">
    <router-link to="/">首页</router-link>
    <router-link to="/products">产品</router-link>
    <router-link to="/news">新闻</router-link>
    <router-link to="/contact">联系</router-link>
  </nav>
</template>

<style scoped>
.m-nav { display:flex; gap:12px; font-size:14px; }
.m-nav a { color:#333; text-decoration:none; }
.m-nav a.router-link-active { color:#1677ff; }
</style>


