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
.pc-header { height: var(--pc-header-height); display:flex; align-items:center; justify-content:center; position:fixed; top:0; left:0; right:0; z-index:10; }
.pc-main { min-height: calc(100vh - 320px); padding: 0 60px; padding-top: var(--pc-header-height); }
/* nav styles moved to PcNav.vue */

/* PcLayout is only used >=1024px; below this the MobileLayout takes over */
@media (max-width: 1024px) {
}
</style>


