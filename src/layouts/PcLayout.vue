<template>
  <div class="pc-container">
    <header class="pc-header">
      <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-link to="/farming">养殖模式</router-link>
        <router-link to="/research">科研平台</router-link>
        <router-link to="/products">产品中心</router-link>
        <router-link to="/news">新闻动态</router-link>
        <router-link to="/contact">联系合作</router-link>
      </nav>
    </header>
    <main class="pc-main">
      <router-view />
    </main>
    <footer class="pc-footer">© Company</footer>
  </div>
  
</template>

<style scoped>
.pc-container { max-width: 1200px; margin: 0 auto; padding: 0; }
.pc-header, .pc-footer { height: 64px; display:flex; align-items:center; }
.pc-header { justify-content: center; }
.pc-main { min-height: calc(100vh - 128px); padding: 0 60px; }
.nav { display:flex; gap:16px; }
.nav a { color:#333; text-decoration:none; }
.nav a.router-link-active { color:#1677ff; }
</style>


