<template>
  <nav class="pc-nav">
    <div class="pc-nav__left">
      <router-link to="/" class="logo">
        <div class="logo-main">连深海洋</div>
        <div class="logo-sub">LIANSHEN MARINE</div>
      </router-link>
    </div>
    <div class="pc-nav__right">
      <ul class="pc-nav__menu">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/about">关于我们</router-link></li>
        <li><router-link to="/farming">养殖模式</router-link></li>
        <li><router-link to="/research">科研平台</router-link></li>
        <li><router-link to="/products">产品中心</router-link></li>
        <li><router-link to="/news">新闻动态</router-link></li>
        <li><router-link to="/contact">联系合作</router-link></li>
      </ul>
      <button class="hamburger" aria-label="打开菜单">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

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
</style>


