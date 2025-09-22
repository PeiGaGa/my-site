<template>
  <div class="pc-container">
    <header class="pc-header">PC Header</header>
    <main class="pc-main">
      <router-view />
    </main>
    <footer class="pc-footer">© Company</footer>
  </div>
  
</template>

<style scoped>
.pc-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.pc-header, .pc-footer { height: 64px; display:flex; align-items:center; }
.pc-main { min-height: calc(100vh - 128px); }
</style>


