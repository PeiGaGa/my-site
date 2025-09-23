<template>
  <div class="m-container">
    <header class="m-header">
      <MobileNav />
    </header>
    <main class="m-main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
  
</template>

<script setup>
import SiteFooter from "@/components/SiteFooter.vue";
import MobileNav from "@/components/MobileNav.vue";
</script>

<style scoped>
.m-container { padding: 0; }
.m-header { height: 48px; display:flex; align-items:center; }
.m-main { min-height: calc(100vh - 96px); padding: 0 16px; }
/* nav styles moved to MobileNav.vue */

/* Footer styles moved into SiteFooter.vue */
</style>


