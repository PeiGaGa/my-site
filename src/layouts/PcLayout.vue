<template>
  <div class="pc-container">
    <header class="pc-header" :class="{ 'is-hidden': isHeaderHidden, 'is-transparent': isTransparent }">
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
  // 路由切换后重新观察 hero
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
  // 当 hero 顶部区域可见时，头部使用透明样式
  const header = document.querySelector('.pc-header');
  const topOffset = header ? header.offsetHeight : 0;
  heroObserver = new IntersectionObserver((entries) => {
    const entry = entries[0];
    isTransparent.value = !!entry.isIntersecting;
  }, { root: null, threshold: 0, rootMargin: `-${topOffset}px 0px 0px 0px` });
  heroObserver.observe(hero);
}
</script>

<style scoped>
.pc-container { width: 100%; margin: 0 auto; padding: 0; }
.pc-header { height: var(--pc-header-height); display:flex; align-items:center; justify-content:center; position:fixed; top:0; left:0; right:0; z-index:10; transition: transform 200ms ease, background-color 200ms ease, backdrop-filter 200ms ease; will-change: transform; }
.pc-header { background: rgba(0,0,0,0.85); backdrop-filter: saturate(120%) blur(8px); -webkit-backdrop-filter: saturate(120%) blur(8px); border-bottom: 1px solid rgba(255,255,255,0.06); }
.pc-header.is-transparent { background: transparent; backdrop-filter: none; -webkit-backdrop-filter: none; border-bottom-color: transparent; }
.pc-header.is-hidden { transform: translateY(-100%); }
.pc-main { min-height: calc(100vh - 20rem); padding: 0 3.75rem; padding-top: 0; transition: padding-top 200ms ease; }
.pc-main { padding-top: var(--pc-header-height); }
.pc-main.compact { padding-top: 0; }
/* nav styles moved to PcNav.vue */

/* PcLayout is only used >=1024px; below this the MobileLayout takes over */
@media (max-width: 1024px) {
}
</style>


