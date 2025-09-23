<template>
  <nav class="nav">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于我们</router-link>
    <router-link to="/farming">养殖模式</router-link>
    <router-link to="/research">科研平台</router-link>
    <router-link to="/products">产品中心</router-link>
    <router-link to="/news">新闻动态</router-link>
    <router-link to="/contact">联系合作</router-link>
  </nav>
</template>

<style scoped>
.nav { display:flex; gap:16px; }
.nav a { color:#333; text-decoration:none; }
.nav a.router-link-active { color:#1677ff; }
</style>


