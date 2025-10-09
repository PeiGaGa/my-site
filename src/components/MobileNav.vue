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
      <button class="hamburger" aria-label="打开菜单">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
import { useLanguage } from '@/composables/useLanguage'

export default {
  name: 'MobileNav',
  setup() {
    const { currentLanguage, switchLanguage, addLanguageToPath } = useLanguage()
    
    const getLocalizedPath = (path) => {
      return addLanguageToPath(path, currentLanguage.value)
    }
    
    return {
      currentLanguage,
      switchLanguage,
      getLocalizedPath
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


