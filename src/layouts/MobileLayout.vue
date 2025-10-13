<template>
  <div class="m-container">
    <header class="m-header" :class="{ 'is-hidden': isHeaderHidden, 'is-transparent': isTransparent }">
      <MobileNav />
    </header>
    <main class="m-main" :class="{ compact: isHeaderHidden, 'with-offset': !isTransparent }">
      <router-view />
    </main>
    <SiteFooter />
  </div>
  
</template>

<script setup>
import SiteFooter from "@/components/SiteFooter.vue";
import MobileNav from "@/components/MobileNav.vue";
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useLanguage } from "@/composables/useLanguage";

const isHeaderHidden = ref(false);
const lastScrollY = ref(0);
let ticking = false;
const isTransparent = ref(true);
let heroObserver = null;
const route = useRoute();

// 初始化语言管理
const { initializeLanguage } = useLanguage();

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
  // 初始化语言设置
  initializeLanguage();
  setupHeroObserver();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  if (heroObserver) {
    heroObserver.disconnect();
    heroObserver = null;
  }
});

watch(() => route.fullPath, async () => {
  await nextTick();
  setupHeroObserver();
});

function setupHeroObserver() {
  if (heroObserver) heroObserver.disconnect();
  const hero = document.querySelector('.hero, .page-hero, [data-hero], section[role="img"]');
  if (!hero) {
    isTransparent.value = false;
    return;
  }
  heroObserver = new IntersectionObserver((entries) => {
    const entry = entries[0];
    isTransparent.value = entry.isIntersecting && (window.scrollY || 0) < 40;
  }, { root: null, threshold: 0.01 });
  heroObserver.observe(hero);
}
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
  transition: transform 200ms ease, background-color 200ms ease, backdrop-filter 200ms ease; 
  will-change: transform;
  width: 100%;
  box-sizing: border-box;
}

.m-header { background: rgba(0,0,0,0.85); backdrop-filter: saturate(120%) blur(8px); -webkit-backdrop-filter: saturate(120%) blur(8px); border-bottom: 1px solid rgba(255,255,255,0.06); }
.m-header.is-transparent { background: transparent; backdrop-filter: none; -webkit-backdrop-filter: none; border-bottom-color: transparent; }

.m-header.is-hidden { 
  transform: translateY(-100%); 
}

.m-main { 
  min-height: calc(100vh - 6rem); /* 96px */ 
  padding: 0 1rem; /* 16px */ 
  padding-top: 0; 
  transition: padding-top 200ms ease;
  width: 100%;
  box-sizing: border-box;
}

.m-main.with-offset { padding-top: var(--m-header-height); }
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


