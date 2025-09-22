<template>
  <div class="m-container">
    <header class="m-header">M Header</header>
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
</style>


