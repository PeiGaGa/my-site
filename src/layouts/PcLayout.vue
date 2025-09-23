<template>
  <div class="pc-container">
    <header class="pc-header">
      <PcNav />
    </header>
    <main class="pc-main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
  

</template>

<script setup>
import SiteFooter from "@/components/SiteFooter.vue";
import PcNav from "@/components/PcNav.vue";
</script>

<style scoped>
.pc-container { width: 100%; margin: 0 auto; padding: 0; }
.pc-header { height: 64px; display:flex; align-items:center; }
.pc-header { justify-content: center; }
.pc-main { min-height: calc(100vh - 320px); padding: 0 60px; }
/* nav styles moved to PcNav.vue */

/* PcLayout is only used >=1024px; below this the MobileLayout takes over */
@media (max-width: 1024px) {
}
</style>


