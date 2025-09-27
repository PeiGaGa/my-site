<template>
  <div class="m-container">
    <header class="m-header" :class="{ 'is-hidden': isHeaderHidden }">
      <MobileNav />
    </header>
    <main class="m-main" :class="{ compact: isHeaderHidden }">
      <router-view />
    </main>
    <SiteFooter />
  </div>
  
</template>

<script setup>
import SiteFooter from "@/components/SiteFooter.vue";
import MobileNav from "@/components/MobileNav.vue";
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
.m-container { 
  padding: 0; 
  width: 100%;
  overflow-x: hidden; /* 防止横向滚动 */
}

.m-header { 
  height: var(--m-header-height); 
  display: flex; 
  align-items: center; 
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  z-index: 10; 
  transition: transform 200ms ease; 
  will-change: transform;
  width: 100%;
  box-sizing: border-box;
}

.m-header.is-hidden { 
  transform: translateY(-100%); 
}

.m-main { 
  min-height: calc(100vh - 6rem); /* 96px */ 
  padding: 0 1rem; /* 16px */ 
  padding-top: var(--m-header-height); 
  transition: padding-top 200ms ease;
  width: 100%;
  box-sizing: border-box;
}

.m-main.compact { 
  padding-top: 0; 
}

/* 小屏幕优化 */
@media (max-width: 375px) {
  .m-main {
    padding: 0 0.75rem; /* 12px */
    padding-top: var(--m-header-height);
  }
  
  .m-main.compact {
    padding-top: 0;
  }
}

/* 中等屏幕 */
@media (min-width: 376px) and (max-width: 414px) {
  .m-main {
    padding: 0 1rem; /* 16px */
  }
}

/* 大屏幕移动设备 */
@media (min-width: 415px) and (max-width: 1023px) {
  .m-main {
    padding: 0 1.25rem; /* 20px */
  }
}

/* nav styles moved to MobileNav.vue */
/* Footer styles moved into SiteFooter.vue */
</style>


