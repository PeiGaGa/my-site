<template>
  <div class="pc-container">
    <header class="pc-header" :class="{ 'is-hidden': isHeaderHidden }">
      <PcNav />
    </header>
    <main class="pc-main" :class="{ compact: isHeaderHidden }">
      <router-view />
    </main>
    <SiteFooter />
  </div>
  

</template>

<script setup>
import SiteFooter from "@/components/SiteFooter.vue";
import PcNav from "@/components/PcNav.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isHeaderHidden = ref(false);
const lastScrollY = ref(0);
let ticking = false;

function onScroll() {
  const currentY = window.scrollY || 0;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const isScrollingDown = currentY > lastScrollY.value;
      const passedThreshold = currentY > 20;
      // Hide when scrolling down past threshold; show when scrolling up
      if (isScrollingDown && passedThreshold) {
        isHeaderHidden.value = true;
      } else {
        isHeaderHidden.value = false;
      }
      lastScrollY.value = currentY;
      ticking = false;
    });
    ticking = true;
  }
}

onMounted(() => {
  lastScrollY.value = window.scrollY || 0;
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.pc-container { width: 100%; margin: 0 auto; padding: 0; }
.pc-header { height: var(--pc-header-height); display:flex; align-items:center; justify-content:center; position:fixed; top:0; left:0; right:0; z-index:10; transition: transform 200ms ease; will-change: transform; }
.pc-header.is-hidden { transform: translateY(-100%); }
.pc-main { min-height: calc(100vh - 20rem); padding: 0 3.75rem; padding-top: var(--pc-header-height); transition: padding-top 200ms ease; } /* 320px = 20rem, 60px = 3.75rem */
.pc-main.compact { padding-top: 0; }
/* nav styles moved to PcNav.vue */

/* PcLayout is only used >=1024px; below this the MobileLayout takes over */
@media (max-width: 1024px) {
}
</style>


