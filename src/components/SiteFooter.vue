<template>
  <footer class="m-footer">
    <div class="m-foot-wrap">
      <!-- Top Section -->
      <div class="top-section">
        <div class="m-brand">
          <div class="logo">连深海洋</div>
          <div class="sub">LIANSHEN MARINE</div>
        </div>
        <nav class="m-links">
          <div class="col">
            <router-link to="/" @click="scrollToTop">首页</router-link>
            <router-link to="/about" @click="scrollToTop">关于我们</router-link>
            <router-link to="/farming" @click="scrollToTop">养殖模式</router-link>
          </div>
          <div class="col">
            <router-link to="/research" @click="scrollToTop">科研平台</router-link>
            <router-link to="/products" @click="scrollToTop">产品中心</router-link>
            <router-link to="/news" @click="scrollToTop">新闻动态</router-link>
          </div>
          <div class="col">
            <a href="/about#join" @click="scrollToTop">加入我们</a>
            <router-link to="/contact" @click="scrollToTop">联系合作</router-link>
          </div>
        </nav>
        <div class="m-social">
          <span>Follow our social media</span>
          <div class="icons">
            <a href="#" aria-label="wechat" class="wechat-icon">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M8.5 12c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5z" fill="currentColor"/>
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.3 1.1 4.7L2 22l5.3-1.1C8.7 21.6 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="weibo" class="weibo-icon">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 17.9c-4.4-.4-7.9-4-7.9-8.4 0-4.4 3.5-8 7.9-8.4v16.8zm2 0V3.1c4.4.4 7.9 4 7.9 8.4 0 4.4-3.5 8-7.9 8.4z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="linkedin" class="linkedin-icon">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="youtube" class="youtube-icon">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M23.5 6.5c-.3-1.1-1.2-1.8-2.3-1.8C19.4 4.5 12 4.5 12 4.5s-7.4 0-9.2.2c-1.1.1-2 .7-2.3 1.8C.2 8.4.2 12 .2 12s0 3.6.2 5.5c.3 1.1 1.2 1.8 2.3 1.8 1.8.2 9.2.2 9.2.2s7.4 0 9.2-.2c1.1-.1 2-.7 2.3-1.8.2-1.9.2-5.5.2-5.5s0-3.6-.2-5.5zM9.5 15.5V8.5l6 3.5-6 3.5z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="m-divider" />
      
      <!-- Search and Copy Section -->
      <div class="search-copy-section">
        <div class="m-search">
          <input placeholder="请输入关键字..." />
          <span>→</span>
        </div>
        <div class="m-copy">
          <span>Copyright 2025 © lianshen marine</span>
          <div class="links">
            <a href="#">使用条款</a>
            <a href="#">网站地图</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
function scrollToTop() {
  try {
    const candidates = [
      document.scrollingElement,
      document.documentElement,
      document.body,
      document.querySelector('.pc-main'),
      document.querySelector('.m-main')
    ].filter(Boolean);
    candidates.forEach((el) => {
      try { el.scrollTop = 0; } catch (_) {}
    });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  } catch (e) {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.m-footer { 
  background: #1e242e; 
  color: #c9d0da; 
  padding: 32px 0 24px;
}

.m-foot-wrap { 
  max-width: 1280px; 
  margin: 0 auto; 
  padding: 0 78px;
}

/* Top Section */
.top-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
}

.m-brand .logo { 
  font-size: 20px; 
  color: #fff; 
  font-weight: 700; 
}

.m-brand .sub { 
  font-size: 14px; 
  color: #9aa6b2; 
  margin-top: 2px; 
  letter-spacing: 0.5px;
}

.m-links { 
  display: flex; 
  flex-wrap: wrap; 
}

.m-links .col { 
  display: flex; 
  flex-direction: column; 
  gap: 12px; 
  min-width: 70px; 
  margin-right: 31px;
}

.m-links .col a{ 
  font-size: 9px; 
}

.m-links a { 
  color: #c9d0da; 
  text-decoration: none; 
  font-size: 13px; 
  transition: color 0.2s ease;
}

.m-links a.router-link-active, 
.m-links a:hover { 
  color: #fff; 
}

.m-social { 
  display: flex; 
  flex-direction: column;
  gap: 8px;
}

.m-social span {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  text-align: start;
}

.m-social .icons { 
  display: flex;
  justify-content: start;
}

.m-social .icons a { 
  color: #fff; 
  width: 28px; 
  height: 28px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  background: #2a3140; 
  border-radius: 4px; 
  text-decoration: none;
  transition: background-color 0.2s ease;
  margin-right: 16px;
}

.m-social .icons a:hover {
  background: #3a4150;
}

/* Divider */
.m-divider { 
  height: 1px; 
  background: #303847; 
  margin: 16px 0;
}

/* Search and Copy Section */
.search-copy-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  gap: 16px;
  flex-wrap: wrap; /* 防止超小屏溢出，仍保持与PC相同的一行结构为首选 */
}

.m-search { 
  position: relative; 
  max-width: 280px;
  display: flex;
  align-items: center;
}

.m-search input { 
  width: 100%; 
  height: 36px; 
  background: #151a22; 
  color: #e5ecf3; 
  border: 1px solid #303847; 
  border-radius: 4px; 
  padding: 0 40px 0 12px; 
  font-size: 13px;
}

.m-search input::placeholder { 
  color: #748094; 
}

.m-search span { 
  position: absolute; 
  right: 4px; 
  top: 4px; 
  height: 28px; 
  width: 28px; 
  border: 0; 
  border-radius: 3px; 
  color: #fff; 
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.m-search span:hover {
  background: #3a4150;
}

.m-copy { 
  display: flex; 
  flex-direction: row;
  align-items: center;
  color: #9aa6b2; 
  font-size: 11px; 
}

.m-copy span{ 
  margin-right: 30px;
}


.m-copy .links { 
  display: flex; 
  gap: 12px; 
}

.m-copy .links a { 
  color: #c9d0da; 
  text-decoration: none; 
  transition: color 0.2s ease;
  font-size: 11px;
}

.m-copy .links a:hover { 
  color: #fff; 
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .m-footer {
    height: 50vh;
  }
  
  .m-foot-wrap {
    padding: 0 100px;
  }
  
  .top-section {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  
  .m-brand .logo { 
    font-size: 42px; 
    white-space: nowrap;
  }
  
  .m-brand .sub {
    font-size: 13px;
    white-space: nowrap;
  }
  
  .m-links { 
    flex-wrap: nowrap;
    margin-left: 126px;
    margin-top: 14px;
  }
  
  .m-links a { 
    font-size: 14px; 
  }
  
  .m-social {
    box-sizing: content-box;
    text-align: right;
    padding-left: 6px;
    margin-top: 8px;
  }
  
  .m-social span {
    font-size: 21px;
    text-align: start;
  }
  
  .m-social .icons a {
    width: 48px;
    height: 48px;
    margin-right: 26px;
  }
  
  .m-divider {
    margin: 58px 0 0 0;
    height: 2px; 
    background: #ccc; 
  }
  
  .search-copy-section {
    justify-content: space-between;
    margin: 50px 0;
  }
  
  .m-search {
    max-width: 320px;
  }
  
  .m-search input {
    height: 40px;
    font-size: 14px;
  }
  
  .m-search span {
    height: 32px;
    width: 32px;
    top: 4px;
    right: 4px;
    background: #2a3140;
  }
  
  .m-copy {
    flex-direction: row;
    align-items: center;
    font-size: 12px;
  }

  .m-copy span{
    margin-right: 140px;
    font-size: 15px;
  }
  
  .m-copy .links {
    gap: 110px;
  }
  
  .m-copy .links a {
    font-size: 15px;
  }
}
</style>


