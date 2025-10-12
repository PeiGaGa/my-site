<script setup>
import copy from '@/assets/images/copy.png'
import ex from '@/assets/images/ex.png'
</script>

<template>
  <section class="hero" role="img" aria-label="farming hero">
    <img class="hero-img" :src="ex" alt="养殖模式" />
    <div class="hero-mask"></div>
    <h1 class="hero-title">养殖模式</h1>
  </section>
  <section class="page">
    <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
    <div class="header-left">
      <h1 class="title">养殖模式</h1>
      <div class="title-underline"></div>
    </div>

    <!-- 陆海接力模式（顶部分区） -->
    <div class="section section-top">
      <div class="container">
      <div class="formula">
        <span class="pill">陆基培苗</span>
        <span class="plus">+</span>
        <span class="pill">海区养鱼</span>
        <span class="equal">=</span>
        <span class="pill">陆海接力养殖新模式</span>
      </div>

      <div class="divider dashed"></div>

      <div class="features">
        <div class="feature">
          <div class="icon">↔</div>
          <div class="f-title">突破空间限制</div>
          <div class="f-desc">环境适应性强</div>
        </div>
        <div class="feature">
          <div class="icon">📈</div>
          <div class="f-title">自动化程度高</div>
          <div class="f-desc">能实现全年连续生产</div>
          <div class="f-desc">单位产量高</div>
        </div>
        <div class="feature">
          <div class="icon">🛡️</div>
          <div class="f-title">流程标准化</div>
          <div class="f-desc">产品规格统一、无污染风险</div>
          <div class="f-desc">质量与安全都有较高保障</div>
        </div>
      </div>
      </div>
    </div>

  <!-- 陆基苗种基地 -->
  <section class="section">
    <div class="container">
      <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
      <div class="header-left">
        <h2 class="title">陆基苗种基地</h2>
      </div>
    </div>
    <div class="container base-grid">
      <div class="base-photo-wrap">
        <div class="divider dashed"></div>
        <img class="photo" src="/src/assets/images/ex.png" alt="陆基苗种基地" />
      </div>
      <div class="base-text">
        <div class="divider dashed"></div>
        <h2 class="sub">连云港市赣榆区苗种基地</h2>
        <div class="title-underline"></div>
        <p>
          连云港市是我国首批14个沿海开放城市之一，是新亚欧大陆桥东方桥头堡，全国性综合交通枢纽城市，国际性港口城市。赣榆区地处沿海，素有"黄海明珠"之称，海岸线长62.5公里，滩涂面积23万亩，浅海面积108万亩，近海渔场7000平方公里。2023年，赣榆区被列入国家沿海渔港经济区试点。
        </p>
        <p>
          连申海洋赣榆水产苗种繁育与现代化养殖示范中心位于赣榆区海头镇，总投资约15亿元，面积约2000亩。规划建设102个工厂化循环水养殖苗种车间、蓄水区、养殖尾水处理区、水质检测中心等，规划总建筑面积约22万平方米，总养殖水体18万立方米。
        </p>
      </div>
    </div>
  </section>

  <!-- 深远海养殖+黄海冷水团 -->
  <section class="section">
    <div class="container">
      <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
      <div class="header-left">
        <h2 class="title">深远海养殖</h2>
      </div>
      <div class="divider dashed"></div>
    </div>
    <div class="container two-col">
      <div class="col">
        <img class="photo" src="/src/assets/images/ex.png" alt="苏海1号" />
        <div class="card">
          <h3 class="card-title">三文鱼养殖工船“苏海1号”</h3>
          <ul class="card-list">
            <li>全球首艘三文鱼养殖工程船，面向深远海环境设计。</li>
            <li>船体全长约 249 米，型宽 45 米，型深 21.6 米，养殖水体超 3 万立方米。</li>
            <li>采用全封闭、循环水工艺，搭载分级、投饵、清洗等自动化装备。</li>
            <li>核心水处理系统集成臭氧、紫外消杀与生物滤池，确保水质稳定。</li>
            <li>智能化监控平台实现溶氧、温盐、流速与鱼群行为的实时感知与联动控制。</li>
            <li>抗风浪等级高，适应 12 级风和 10 米以上浪高的作业海况。</li>
            <li>支持全年稳定养殖与加工转运，显著提升单位产量与成活率。</li>
            <li>与陆基苗种基地形成“陆海接力”，缩短周转时间，提高养成效率。</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <img class="photo" src="/src/assets/images/ex.png" alt="黄海冷水团" />
        <div class="card">
          <h3 class="card-title">黄海冷水团</h3>
          <ul class="card-list">
            <li>世界罕见的海盆型冷水体，位于黄海中部海域。</li>
            <li>覆盖面积约 13 万平方公里，冷水体储量约 5000 立方公里。</li>
            <li>冷水团核心层年均温度 4.6℃-9.3℃，季节温差小、稳定性强。</li>
            <li>夏季表层升温时，深层仍保持低温与高溶氧，适宜冷水性鱼类生长。</li>
            <li>水体清洁透明、富含营养盐，为优质三文鱼提供天然生态条件。</li>
            <li>与工程船的移动式作业结合，可因时因地选择最优海况与水层。</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  </section>
</template>

<style scoped>
.hero { position: relative; width:100vw; margin-left: calc(50% - 50vw); height: 56vh; min-height: 320px; max-height: 680px; overflow:hidden; }
.hero-img { width:100%; height:100%; object-fit:cover; display:block; }
.hero-mask { position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.45) 100%); }
.hero-title { position:absolute; left:50%; top:60%; transform: translate(-50%, -50%); margin:0; color:#fff; font-weight:800; letter-spacing:2px; font-size: 40px; text-align:center; white-space:nowrap; }

@media (min-width: 768px) {
  .hero-title { font-size: 80px; }
}

@media (min-width: 1200px) {
  .hero-title { font-size: 112px; }
}

@media (min-width: 1025px) {
  .hero { margin-top: calc(var(--pc-header-height) * -1); }
}
.page { padding: 40px 0; }
.icon-row { display:flex; justify-content:flex-end; }
.header-left { display:flex; flex-direction:column; }
.title { font-size: 22px; margin: 0; }
.title-underline { width:40px; height:3px; background:#f5a34b; margin:6px 0 12px; }
.header-icon { width:24px; height:24px; object-fit:contain; opacity:.8; }
.divider { height: 0; border-top: 2px solid #e5e6eb; margin: 12px 0 24px; width: 100%; }
.no-vw .divider, .divider.no-vw { border-top-width: 2px; }
.divider.dashed { border-top-style: dashed; border-top-color: #c5c5c5; }

.section { padding: 56px 0; }
.section-top .container { display:flex; flex-direction:column; align-items:center; background: #eee; padding: 70px 100px 30px 100px;}

/* 公式条 */
.formula { display: flex; align-items: center; justify-content:center; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
.pill {
  background: #f07d00;
  color: #fff;
  padding: 8px 14px;
  border-radius: 4px;
  font-weight: 600;
}
.plus, .equal { font-size: 18px; color: #999; }

/* 特性栅格 */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  border: 1px solid #eee;
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.features::before,
.features::after {
  content: '';
  position: absolute;
  top: 20px;
  bottom: 20px;
  width: 1px;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 4px,
    #c5c5c5 4px,
    #c5c5c5 8px
  );
}

.features::before {
  left: calc(33.333% - 10px);
}

.features::after {
  right: calc(33.333% - 10px);
}
.feature { 
  text-align: center; 
  padding: 24px 12px; 
  border-radius: 4px;
}
.icon { font-size: 28px; color: #bbb; margin-bottom: 8px; }
.f-title { font-weight: 600; margin-bottom: 6px; font-size: 16px; }
.f-desc { color: #666; font-size: 14px; margin-bottom: 4px; line-height: 1.4; }
.f-desc:last-child { margin-bottom: 0; }

/* 基地左右布局 */
.base-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: flex-start; margin-top: 20px; }
.base-photo-wrap .divider { margin: 0 0 12px 0; width: 100%; }
.photo { width: 100%; height: auto; display: block; }
.sub { margin: 0 0 12px; font-size: clamp(20px, 2.6vw, 28px); }
.base-text .divider { margin: 0 0 12px 0; width: 100%; }
.base-text p { color: #555; line-height: 1.8; margin-bottom: 16px; }
.base-text p:last-child { margin-bottom: 0; }

/* 两列卡片区域 */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.col { display: flex; flex-direction: column; gap: 16px; align-items: center;}
.card { background: #fff; border: 1px solid #eee; padding: 20px; width: 80%;}
.col .photo + .card { margin-top: -40px; box-shadow: 0 10px 24px rgba(0,0,0,.08); }
.card-title { position: relative; margin: 0 0 12px; font-size: 18px; }
.card-title::after { content: ""; position: absolute; left: 0; bottom: -6px; width: 56px; height: 3px; background: #e68600; }
.card-list { 
  margin: 14px 0 0; 
  padding-left: 0; 
  color: #555; 
  width: 100%; 
  max-width: 680px; 
  height: 720px; 
  overflow-y: auto;
  box-sizing: border-box;
  list-style: none;
}
.card-list li { 
  margin-bottom: 12px; 
  line-height: 1.6; 
  padding-left: 0;
}
.card-list li:last-child { 
  margin-bottom: 0; 
}
.two-col .photo { 
  width: 100%; 
  max-width: 780px; 
  height: 476px; 
  object-fit: cover; 
}

/* 中等屏幕 */
@media (max-width: 1200px) and (min-width: 1024px) {
  .card-list { 
    max-width: 600px; 
    height: 650px; 
  }
  .two-col .photo { 
    max-width: 700px; 
    height: 430px; 
  }
}

/* 小屏幕桌面 */
@media (max-width: 1023px) and (min-width: 900px) {
  .card-list { 
    max-width: 500px; 
    height: 600px; 
  }
  .two-col .photo { 
    max-width: 600px; 
    height: 380px; 
  }
}

/* 平板端 */
@media (max-width: 899px) and (min-width: 768px) {
  .page { padding: 30px 0; }
  .section { padding: 40px 0; }
  .title { font-size: 20px; }
  .title-underline { width: 35px; }
  .header-icon { width: 22px; height: 22px; }
  
  .features { 
    grid-template-columns: 1fr; 
    gap: 16px;
    padding: 16px;
  }
  .features::before,
  .features::after { display: none; }
  .feature { 
    padding: 20px 16px; 
    margin-bottom: 8px;
  }
  .section-top .container { 
    padding: 50px 60px 20px 60px; 
  }
  
  .base-grid { 
    grid-template-columns: 1fr; 
    gap: 20px; 
    margin-top: 15px;
  }
  .base-photo-wrap .divider { margin: 0 0 10px 0; }
  .sub { font-size: 24px; }
  .base-text .divider { margin: 0 0 10px 0; }
  
  .two-col { 
    grid-template-columns: 1fr; 
    gap: 20px; 
  }
  .card { 
    width: 90%; 
    padding: 18px; 
  }
  .card-title { font-size: 17px; }
  .card-list { 
    width: 100%; 
    height: 600px; 
    max-width: 100%; 
  }
  .two-col .photo { 
    width: 100%; 
    height: 400px; 
    max-width: 100%; 
  }
}

/* 移动端 */
@media (max-width: 767px) {
  .page { padding: 20px 0; }
  .section { padding: 30px 0; }
  .title { font-size: 18px; }
  .title-underline { width: 30px; height: 2px; }
  .header-icon { width: 20px; height: 20px; }
  .divider { margin: 8px 0 16px; }
  
  .features { 
    grid-template-columns: 1fr; 
    gap: 12px;
    padding: 12px;
    margin: 0 16px;
  }
  .features::before,
  .features::after { display: none; }
  .feature { 
    padding: 16px 12px; 
    margin-bottom: 6px;
  }
  .icon { font-size: 24px; margin-bottom: 6px; }
  .f-title { font-size: 15px; margin-bottom: 4px; }
  .f-desc { font-size: 13px; margin-bottom: 3px; }
  
  .section-top .container { 
    padding: 30px 20px 15px 20px; 
  }
  .formula { 
    gap: 8px; 
    margin-bottom: 20px; 
  }
  .pill { 
    padding: 6px 10px; 
    font-size: 14px; 
  }
  .plus, .equal { font-size: 16px; }
  
  .base-grid { 
    grid-template-columns: 1fr; 
    gap: 16px; 
    margin-top: 10px;
  }
  .base-photo-wrap .divider { margin: 0 0 8px 0; }
  .sub { font-size: 20px; }
  .base-text .divider { margin: 0 0 8px 0; }
  .base-text p { 
    font-size: 14px; 
    line-height: 1.6; 
    margin-bottom: 12px;
  }
  
  .two-col { 
    grid-template-columns: 1fr; 
    gap: 16px; 
  }
  .col { 
    gap: 12px; 
  }
  .card { 
    width: 95%; 
    padding: 16px; 
  }
  .col .photo + .card { 
    margin-top: -30px; 
  }
  .card-title { 
    font-size: 16px; 
  }
  .card-title::after { 
    width: 40px; 
    height: 2px; 
  }
  .card-list { 
    width: 100%; 
    height: 500px; 
    max-width: 100%; 
    font-size: 14px; 
    padding-left: 0; 
  }
  .card-list li { 
    margin-bottom: 10px; 
    line-height: 1.5; 
  }
  .two-col .photo { 
    width: 100%; 
    height: 300px; 
    max-width: 100%; 
  }
}

/* 超小屏幕手机 */
@media (max-width: 480px) {
  .page { padding: 15px 0; }
  .section { padding: 25px 0; }
  .title { font-size: 16px; }
  .title-underline { width: 25px; }
  .header-icon { width: 18px; height: 18px; }
  
  .section-top .container { 
    padding: 20px 15px 10px 15px; 
  }
  .formula { 
    gap: 6px; 
    margin-bottom: 15px; 
  }
  .pill { 
    padding: 5px 8px; 
    font-size: 13px; 
  }
  .plus, .equal { font-size: 14px; }
  
  .features { 
    margin: 0 10px; 
    padding: 10px; 
  }
  .feature { 
    padding: 14px 10px; 
  }
  .icon { font-size: 22px; }
  .f-title { font-size: 14px; }
  .f-desc { font-size: 12px; }
  
  .sub { font-size: 18px; }
  .base-photo-wrap .divider { margin: 0 0 6px 0; }
  .base-text .divider { margin: 0 0 6px 0; }
  .base-text p { 
    font-size: 13px; 
    margin-bottom: 10px;
  }
  
  .card { 
    padding: 14px; 
  }
  .card-title { 
    font-size: 15px; 
  }
  .card-list { 
    width: 100%; 
    height: 400px; 
    max-width: 100%; 
    font-size: 13px; 
  }
  .card-list li { 
    margin-bottom: 8px; 
    line-height: 1.4; 
  }
  .two-col .photo { 
    width: 100%; 
    height: 250px; 
    max-width: 100%; 
  }
}
</style>


