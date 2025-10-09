<template>
  <nav class="m-nav">
    <div class="m-nav__left">
      <router-link :to="getLocalizedPath('/')" class="logo">
        <div class="logo-main">连深海洋</div>
        <div class="logo-sub">LIANSHEN MARINE</div>
      </router-link>
    </div>
    <div class="m-nav__right">
      <div class="language-switch">
        <button 
          class="lang-btn" 
          :class="{ active: currentLanguage === 'zh-cn' }"
          @click="switchLanguage('zh-cn')"
        >
          CN
        </button>
        <span class="lang-divider">|</span>
        <button 
          class="lang-btn" 
          :class="{ active: currentLanguage === 'en' }"
          @click="switchLanguage('en')"
        >
          EN
        </button>
      </div>
      <button class="hamburger" aria-label="打开菜单" @click="openMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- 抽屉菜单（移动端）: Teleport 到 body，避免层级/遮挡问题 -->
  <teleport to="body">
    <transition name="drawer-fade">
      <div v-if="isMenuOpen" class="drawer-overlay" @click="closeMenu"></div>
    </transition>
    <transition name="drawer-slide">
      <aside v-if="isMenuOpen" class="drawer" role="dialog" aria-modal="true">
        <div class="drawer__header">
          <button class="drawer__close" aria-label="关闭菜单" @click="closeMenu">×</button>
        </div>
        <ul class="drawer__menu">
          <li><router-link @click="closeMenu" :to="getLocalizedPath('/')">首页</router-link></li>
          <li><router-link @click="closeMenu" :to="getLocalizedPath('/about')">关于我们</router-link></li>
          <li><router-link @click="closeMenu" :to="getLocalizedPath('/farming')">养殖模式</router-link></li>
          <li><router-link @click="closeMenu" :to="getLocalizedPath('/research')">科研平台</router-link></li>
          <li><router-link @click="closeMenu" :to="getLocalizedPath('/products')">产品中心</router-link></li>
          <li><router-link @click="closeMenu" :to="getLocalizedPath('/news')">新闻动态</router-link></li>
          <li><router-link @click="closeMenu" :to="getLocalizedPath('/contact')">联系合作</router-link></li>
        </ul>
        <div class="drawer__lang">
          <button 
            class="lang-btn" 
            :class="{ active: currentLanguage === 'zh-cn' }"
            @click="switchLanguageAndClose('zh-cn')"
          >简体</button>
          <span class="lang-divider">|</span>
          <button 
            class="lang-btn" 
            :class="{ active: currentLanguage === 'en' }"
            @click="switchLanguageAndClose('en')"
          >English</button>
        </div>
      </aside>
    </transition>
  </teleport>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

export default {
  name: 'MobileNav',
  setup() {
    const { currentLanguage, switchLanguage, addLanguageToPath } = useLanguage()
    const isMenuOpen = ref(false)
    
    const getLocalizedPath = (path) => {
      return addLanguageToPath(path, currentLanguage.value)
    }
    const openMenu = () => {
      isMenuOpen.value = true
      document.documentElement.style.overflow = 'hidden'
    }
    const closeMenu = () => {
      isMenuOpen.value = false
      document.documentElement.style.overflow = ''
    }
    const switchLanguageAndClose = (lang) => {
      switchLanguage(lang)
      closeMenu()
    }

    // 避免意外滚动残留
    onBeforeUnmount(() => {
      document.documentElement.style.overflow = ''
    })
    
    return {
      currentLanguage,
      switchLanguage,
      getLocalizedPath,
      isMenuOpen,
      openMenu,
      closeMenu,
      switchLanguageAndClose
    }
  }
}
</script>

<style scoped>
.m-nav { 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  padding: 0 1rem; /* 16px */ 
  height: var(--m-header-height); 
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  position: relative;
  z-index: 20;
}

.m-nav__left { 
  flex: 0 0 auto; 
  min-width: 0; /* 允许内容收缩 */
}

.m-nav__right { 
  flex: 0 0 auto; 
  display: flex;
  align-items: center;
}

.logo { 
  color: #fff; 
  text-decoration: none; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0; /* 允许内容收缩 */
}

.logo-main { 
  font-weight: 700; 
  font-size: clamp(14px, 4vw, 18px); 
  letter-spacing: 1px; 
  line-height: 1;
  white-space: nowrap;
}

.logo-sub { 
  font-size: clamp(8px, 2.5vw, 12px); 
  font-weight: 400; 
  letter-spacing: 0.5px; 
  opacity: 0.9;
  margin-top: 1px;
  white-space: nowrap;
}

.hamburger { 
  width: 2rem; /* 32px */
  height: 2rem; /* 32px */ 
  display: grid; 
  place-items: center; 
  background: transparent; 
  border: none; 
  padding: 0; 
  cursor: pointer;
  flex-shrink: 0; /* 防止汉堡菜单被压缩 */
}

.hamburger span { 
  display: block; 
  width: 1.25rem; /* 20px */
  height: 0.125rem; /* 2px */
  background: #fff; 
  margin: 0.1875rem 0; /* 3px */ 
  transition: all 0.3s ease;
}

.language-switch {
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
}

.lang-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
  cursor: pointer;
  padding: 0.125rem 0.25rem;
  border-radius: 0.125rem;
  transition: all 0.2s ease;
  opacity: 0.7;
  min-width: 1.5rem;
  text-align: center;
}

.lang-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

.lang-btn.active {
  opacity: 1;
  background: rgba(255, 255, 255, 0.2);
  font-weight: 600;
}

.lang-divider {
  color: #fff;
  opacity: 0.5;
  margin: 0 0.125rem;
  font-size: 0.75rem;
}

/* 抽屉与遮罩 */
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998; /* 提高层级，确保可点 */
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 78vw; /* 类似示例的宽度 */
  max-width: 20rem;
  background: #fff;
  z-index: 9999; /* 高于蒙层 */
  padding: 1.25rem 1rem calc(env(safe-area-inset-bottom, 0px) + 1rem) 1.25rem; /* 底部留白并适配安全区 */
  box-shadow: -8px 0 24px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.drawer__header {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 右对齐关闭按钮 */
  padding-bottom: 0.25rem;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.drawer__close {
  background: transparent;
  border: none;
  color: #111;
  width: 2.5rem;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
  cursor: pointer;
}

.drawer__menu {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0; /* 与顶部留白 */
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.drawer__menu a {
  color: #000;
  text-decoration: none;
  font-size: 1rem;
  display: block; /* 扩大可点击区域为整行 */
  padding: 0.75rem 0; /* 提升触控高度 */
  min-height: 44px; /* 推荐的最小触控尺寸 */
}

.drawer__lang {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding-top: 0.5rem;
}

/* 过渡动画 */
.drawer-fade-enter-active, .drawer-fade-leave-active { transition: opacity 0.25s ease; }
.drawer-fade-enter-from, .drawer-fade-leave-to { opacity: 0; }

.drawer-slide-enter-active, .drawer-slide-leave-active { transition: transform 0.3s ease; }
.drawer-slide-enter-from, .drawer-slide-leave-to { transform: translateX(100%); }

/* 小屏幕优化 */
@media (max-width: 375px) {
  .m-nav {
    padding: 0 0.75rem; /* 12px */
  }
  
  .logo-main {
    font-size: 0.875rem; /* 14px */
  }
  
  .logo-sub {
    font-size: 0.5rem; /* 8px */
  }
  
  .language-switch {
    margin-right: 0.5rem;
  }
  
  .lang-btn {
    font-size: 0.625rem; /* 10px */
    padding: 0.0625rem 0.125rem;
    min-width: 1.25rem;
  }
  
  .lang-divider {
    font-size: 0.625rem;
    margin: 0 0.0625rem;
  }
}

/* 中等屏幕 */
@media (min-width: 376px) and (max-width: 414px) {
  .logo-main {
    font-size: 1rem; /* 16px */
  }
  
  .logo-sub {
    font-size: 0.625rem; /* 10px */
  }
}

/* 大屏幕移动设备 */
@media (min-width: 415px) and (max-width: 1023px) {
  .logo-main {
    font-size: 1.125rem; /* 18px */
  }
  
  .logo-sub {
    font-size: 0.75rem; /* 12px */
  }
}
</style>


