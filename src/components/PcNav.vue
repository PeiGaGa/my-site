<template>
  <nav class="pc-nav">
    <div class="pc-nav__left">
      <router-link :to="getLocalizedPath('/')" class="logo">
        <div class="logo-main">连深海洋</div>
        <div class="logo-sub">LIANSHEN MARINE</div>
      </router-link>
    </div>
    <div class="pc-nav__right">
      <ul class="pc-nav__menu">
        <li><router-link :to="getLocalizedPath('/')">首页</router-link></li>
        <li><router-link :to="getLocalizedPath('/about')">关于我们</router-link></li>
        <li><router-link :to="getLocalizedPath('/farming')">养殖模式</router-link></li>
        <li><router-link :to="getLocalizedPath('/research')">科研平台</router-link></li>
        <li><router-link :to="getLocalizedPath('/products')">产品中心</router-link></li>
        <li><router-link :to="getLocalizedPath('/news')">新闻动态</router-link></li>
        <li><router-link :to="getLocalizedPath('/contact')">联系合作</router-link></li>
      </ul>
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
  name: 'PcNav',
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
.pc-nav { 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  width: 100%; 
  padding: 0 2rem; /* 32px */ 
  height: var(--pc-header-height); 
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.pc-nav__left { 
  flex: 0 0 auto; 
  margin-left: 1.5rem;
}

.logo { 
  color: #fff; 
  text-decoration: none; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-main { 
  font-weight: 700; 
  font-size: 2rem; /* 32px */
  letter-spacing: 0.125rem; /* 2px */ 
  line-height: 1;
}

.logo-sub { 
  font-size: 0.9rem; /* 12.8px */
  font-weight: 500; 
  letter-spacing: 0.0625rem; /* 1px */
  opacity: 0.9;
  margin-top: 0.125rem; /* 2px */
}

.pc-nav__right { 
  flex: 0 0 auto; 
  display: flex; 
  align-items: center;
}

.pc-nav__menu { 
  list-style: none; 
  margin: 0; 
  padding: 0;
  display: flex;
  width: 46rem;
  justify-content: space-between;
}

.pc-nav__menu a { 
  color: #fff; 
  text-decoration: none; 
  font-size: 1rem; /* 14px */ 
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.pc-nav__menu a:hover {
  opacity: 0.8;
}

.pc-nav__menu a.router-link-active { 
  position: relative; 
  font-weight: 500;
}

.pc-nav__menu a.router-link-active::after { 
  content: ""; 
  position: absolute; 
  left: 0; 
  right: 0; 
  bottom: -0.625rem; /* -10px */
  height: 0.125rem; /* 2px */ 
  background: #fff; 
  opacity: 0.9; 
}

.hamburger { 
  width: 2.5rem; /* 40px */
  height: 2rem; /* 32px */ 
  display: grid; 
  place-items: center; 
  background: transparent; 
  border: none; 
  padding: 0; 
  cursor: pointer;
  margin-left: 2rem;
  margin-right: 1rem;
}

.hamburger span { 
  display: block; 
  width: 1.5rem; /* 24px */
  height: 0.125rem; /* 2px */
  background: #fff; 
  margin: 0.25rem 0; /* 4px */ 
  transition: all 0.3s ease;
}

.language-switch {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  margin-left: 1rem;
}

.lang-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
  opacity: 0.7;
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
  margin: 0 0.25rem;
  font-size: 0.875rem;
}
</style>


