<template>
  <nav class="m-nav">
    <router-link to="/" class="logo">连深海洋</router-link>
    <button class="hamburger" aria-label="打开菜单">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>

<style scoped>
.m-nav { display:flex; align-items:center; justify-content:space-between; padding:0 12px; height:48px; }
.logo { color:#111; text-decoration:none; font-weight:700; }
.hamburger { width:32px; height:32px; display:grid; place-items:center; background:transparent; border:none; padding:0; }
.hamburger span { display:block; width:20px; height:2px; background:#111; margin:3px 0; }
</style>


