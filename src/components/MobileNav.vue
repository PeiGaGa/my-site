<template>
  <nav class="m-nav">
    <div class="m-nav__left">
      <router-link to="/" class="logo">
        <div class="logo-main">连深海洋</div>
        <div class="logo-sub">LIANSHEN MARINE</div>
      </router-link>
    </div>
    <div class="m-nav__right">
      <button class="hamburger" aria-label="打开菜单">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

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


