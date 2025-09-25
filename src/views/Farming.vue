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
    <div class="divider dashed"></div>

    <!-- 陆海接力模式（顶部分区） -->
    <div class="section section-top">
      <div class="container">
      <div class="formula">
        <span class="pill">陆基培育</span>
        <span class="plus">+</span>
        <span class="pill">海区养鱼</span>
        <span class="equal">=</span>
        <span class="pill main">陆海接力养殖新模式</span>
      </div>

      <div class="features">
        <div class="feature">
          <div class="icon">↔</div>
          <div class="f-title">突破空间限制</div>
          <div class="f-desc">环境适应性强</div>
        </div>
        <div class="feature">
          <div class="icon">⚙</div>
          <div class="f-title">自动化程度高</div>
          <div class="f-desc">能实现全年连续生产，单位产量高</div>
        </div>
        <div class="feature">
          <div class="icon">★</div>
          <div class="f-title">标准化养殖</div>
          <div class="f-desc">产品规格统一、无污染风险，质量与安全可有效保障</div>
        </div>
      </div>
      </div>
    </div>

  <!-- 陆基苗种基地 -->
  <section class="section">
    <div class="container base-grid">
      <div class="base-photo-wrap">
        <img class="photo" src="/src/assets/images/ex.png" alt="陆基苗种基地" />
      </div>
      <div class="base-text">
        <h2 class="sub">连云港市赣榆区苗种基地</h2>
        <p>
          园区布局合理，拥有现代化循环水育苗与暂养车间，单体车间净高达
          6.25 米，总建筑面积超 2.3 万平方米，设计年育苗 1800 万尾。
        </p>
        <p>
          目前在常年稳定运行，具备苗种快速培育、暂养与分级转运能力，可为
          深远海养殖提供持续、稳定的鱼种保障。
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
.divider { height: 0; border-top: 2px solid #e5e6eb; margin: 12px 0 24px; }
.no-vw .divider, .divider.no-vw { border-top-width: 2px; }
.divider.dashed { border-top-style: dashed; }

.section { padding: 56px 0; }
.section-top .container { display:flex; flex-direction:column; align-items:center; }

/* 公式条 */
.formula { display: flex; align-items: center; justify-content:center; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
.pill {
  background: #f6a21a;
  color: #fff;
  padding: 8px 14px;
  border-radius: 4px;
  font-weight: 600;
}
.pill.main { background: #f07d00; }
.plus, .equal { font-size: 18px; color: #999; }

/* 特性栅格 */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  background: #f7f7f7;
  border: 1px solid #eee;
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
}
.feature { text-align: center; padding: 24px 12px; background: #fff; }
.icon { font-size: 28px; color: #bbb; margin-bottom: 8px; }
.f-title { font-weight: 600; margin-bottom: 6px; }
.f-desc { color: #666; font-size: 14px; }

/* 基地左右布局 */
.base-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: center; }
.base-photo-wrap { border-left: 6px solid #e68600; padding-left: 12px; }
.photo { width: 100%; height: auto; display: block; }
.sub { margin: 0 0 12px; font-size: clamp(20px, 2.6vw, 28px); }
.base-text p { color: #555; line-height: 1.8; }

/* 两列卡片区域 */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.col { display: flex; flex-direction: column; gap: 16px; align-items: center;}
.card { background: #fff; border: 1px solid #eee; padding: 20px; width: 80%;}
.col .photo + .card { margin-top: -40px; box-shadow: 0 10px 24px rgba(0,0,0,.08); }
.card-title { position: relative; margin: 0 0 12px; font-size: 18px; }
.card-title::after { content: ""; position: absolute; left: 0; bottom: -6px; width: 56px; height: 3px; background: #e68600; }
.card-list { margin: 14px 0 0; padding-left: 18px; color: #555; }

@media (max-width: 1023px) {
  .features { grid-template-columns: 1fr; }
  .base-grid { grid-template-columns: 1fr; }
  .two-col { grid-template-columns: 1fr; }
}
</style>


