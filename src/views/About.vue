<script setup>
import ex from '@/assets/images/ex.png'
import copy from '@/assets/images/copy.png'
</script>

<template>
  <section class="hero" role="img" aria-label="about hero">
    <img class="hero-img" :src="ex" alt="关于我们" />
    <div class="hero-mask"></div>
    <h1 class="hero-title">关于我们</h1>
  </section>
  <section class="page">
    <div class="container">
      <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
      <div class="header-left">
        <h1 class="title">关于连深</h1>
        <div class="title-underline"></div>
      </div>
      <div class="divider dashed"></div>

      <div class="section-caption">公司简介</div>

      <div class="about-intro">
        <div class="left">
          <div class="media">
            <img :src="ex" alt="公司全景图" />
          </div>
        </div>
        <div class="desc">
          <p>江苏连深海洋科技有限公司（以下简称"连深海洋"）由左至海南南沙开发建设公司、连云港市鲍鱼发海洋牧场园、大百汇实业曲集团联合投资成立，矢志走在中国远洋渔业发展的前沿阵地，作为主营渔业首个上市的投资平台战略平台，公司致力于建设中国深海养殖基地，构建现代海洋渔业产业链，努力开拓三大行业集群：全球首艘鲍鱼养殖工程船、中国最大三文鱼产品供应商、中国规模最大的三文鱼产业集群。</p>
          <p>公司以"科技兴渔、产业强国"为发展理念，聚焦三文鱼高度远洋海洋生态产业链建设，通过创新驱动、科技赋能，全力构建"一体两核六中心"的现代化产业格局，推动我国远洋海洋渔业高质量绿色、智能化、品牌化方向发展。</p>
          <div class="gallery">
            <img :src="ex" alt="图1" />
            <img :src="ex" alt="图2" />
            <img :src="ex" alt="图3" />
          </div>
        </div>
      </div>

      <div class="honors">
        <div class="section-caption">荣誉资质</div>
        <div class="honors-intro">
          <div class="left"></div>
          <div class="right">
            <div class="honors-gallery">
              <img :src="ex" alt="荣誉1" />
              <img :src="ex" alt="荣誉2" />
              <img :src="ex" alt="荣誉3" />
            </div>
          </div>
        </div>
      </div>

      <div class="duty">
        <div class="section-caption">企业责任</div>
        <div class="duty-intro">
          <div class="left"></div>
          <div class="right">
            <div class="duty-block">
              <p>连深海洋秉持对中国远海三文鱼产业的开拓精神，以创新科技为引擎，以守护海洋生态为根基。公司持续推进绿色养殖理念，构建可持续发展体系，致力于提升海洋生态环境的自我修复力，推动产业链降碳增效、绿色低碳循环。</p>
            </div>
            <div class="duty-block">
              <div class="duty-header">
                <span class="duty-title">守护疆域，生态优先：</span>
                <span class="duty-line"></span>
              </div>
              <p>连深海洋秉持对中国远海三文鱼产业的开拓精神，以创新科技为引擎，以守护海洋生态为根基。公司持续推进绿色养殖理念，构建可持续发展体系，致力于提升海洋生态环境的自我修复力，推动产业链降碳增效、绿色低碳循环。</p>
            </div>
            <div class="duty-block">
              <div class="duty-header">
                <span class="duty-title">科技赋能，责任为本：</span>
                <span class="duty-line"></span>
              </div>
              <p>我们以"科技兴渔、产业强国"为发展理念，聚焦三文鱼高度远洋海洋生态产业链建设，通过技术创新、装备升级与数字化能力建设，全面提升从育苗、养殖到加工、供应链运营的综合效率与安全水平。</p>
            </div>
            <div class="duty-block">
              <div class="duty-header">
                <span class="duty-title">产业共荣，责任共担：</span>
                <span class="duty-line"></span>
              </div>
              <p>面向"一个体两核六中心"的现代化产业格局，连深海洋积极联动上下游伙伴、科研院校与地方政府，推动海洋渔业高质量绿色、智能化、品牌化发展，实现企业价值与社会价值的同频共振。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero区域响应式优化 */
.hero { 
  position: relative; 
  width: 100%; 
  height: 400px; 
  min-height: 280px; 
  max-height: 680px; 
  overflow: hidden; 
  margin: 0;
}

.hero-img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  display: block; 
}

.hero-mask { 
  position: absolute; 
  inset: 0; 
  background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.45) 100%); 
}

.hero-title { 
  position: absolute; 
  left: 50%; 
  top: 60%; 
  transform: translate(-50%, -50%); 
  margin: 0; 
  color: #fff; 
  font-weight: 800; 
  letter-spacing: 2px; 
  font-size: 40px;
  text-align: center; 
  white-space: nowrap; 
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  line-height: 1.1;
}

/* 移动端特殊优化 */
@media (max-width: 480px) {
  .hero {
    height: 300px;
    min-height: 240px;
  }
  
  .hero-title {
    font-size: 24px;
    letter-spacing: 1px;
    white-space: normal;
    padding: 0 16px;
  }
}

/* 平板端优化 */
@media (min-width: 481px) and (max-width: 768px) {
  .hero {
    height: 350px;
  }
  
  .hero-title {
    font-size: 48px;
  }
}

/* PC端优化 */
@media (min-width: 1025px) {
  .hero { 
    margin-top: calc(var(--pc-header-height) * -1); 
  }
  
  .hero-title {
    font-size: 80px;
  }
}

@media (min-width: 1200px) {
  .hero-title {
    font-size: 112px;
  }
}
/* 页面内容区域响应式优化 */
.page { 
  padding: 40px 0; 
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}

.icon-row { 
  display: flex; 
  justify-content: flex-end; 
  margin-bottom: 8px;
}

.header-left { 
  display: flex; 
  flex-direction: column; 
}

.title { 
  font-size: 22px;
  margin: 0; 
  font-weight: 600;
  color: #2d3748;
}

.title-underline { 
  width: 40px; 
  height: 3px; 
  background: #f5a34b; 
  margin: 8px 0 16px; 
  border-radius: 2px;
}

.header-icon { 
  width: 24px; 
  height: 24px; 
  object-fit: contain; 
  opacity: 0.8; 
}

.divider { 
  height: 0; 
  border-top: 2px dashed #e5e6eb; 
  margin: 16px 0 24px; 
}

.section-caption { 
  color: #6b7785; 
  font-size: 14px;
  margin-bottom: 16px; 
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* 关于我们介绍部分响应式优化 */
.about-intro { 
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 24px; 
  align-items: start; 
  margin-bottom: 32px;
}

.about-intro .left, 
.about-intro .desc { 
  border-top: 2px dotted #dcdfe6; 
  padding-top: 16px; 
}

.about-intro .media { 
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-intro .media img { 
  display: block; 
  width: 100%; 
  height: auto; 
  border-radius: 8px; 
  transition: transform 0.3s ease;
}

.about-intro .media:hover img {
  transform: scale(1.02);
}

.about-intro .desc p { 
  margin: 0 0 16px; 
  line-height: 1.7; 
  color: #4a5568; 
  font-size: 16px;
  text-align: justify;
}

.about-intro .desc p:last-child {
  margin-bottom: 0;
}

/* 图片画廊响应式优化 */
.gallery { 
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 28px; 
  margin-top: 24px; 
}

.gallery img { 
  width: 100%; 
  height: auto; 
  display: block; 
  border-radius: 8px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery img:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* 荣誉资质部分响应式优化 */
.honors { 
  margin-top: 36px; 
  position: relative;
  background: #f8f9fa;
  box-shadow: 0 0 0 100vmax #f8f9fa;
  clip-path: inset(0 -100vmax);
  padding: 32px 0;
  border-radius: 12px;
}

.honors-intro { 
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 24px; 
  align-items: start; 
}

.honors-intro .left, 
.honors-intro .right { 
  border-top: 2px dotted #dcdfe6; 
  padding-top: 16px; 
}

.honors-gallery { 
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 32px; 
  align-items: center; 
}

.honors-gallery img { 
  width: 100%; 
  height: 100px;
  object-fit: cover;
  display: block; 
  border-radius: 8px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.honors-gallery img:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 企业责任部分响应式优化 */
.duty { 
  margin-top: 44px; 
}

.duty-intro { 
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 24px; 
  align-items: start; 
}

.duty-intro .left, 
.duty-intro .right { 
  border-top: 2px dotted #dcdfe6; 
  padding-top: 16px; 
}

.duty-block { 
  margin-bottom: 28px; 
  padding: 20px;
  background: #fff;
  border-radius: 8px;
}


.duty-header { 
  display: grid; 
  grid-template-columns: auto 1fr; 
  gap: 16px; 
  align-items: center; 
  margin-bottom: 12px; 
}

.duty-title { 
  font-size: 14px; 
  color: #2d3748; 
  font-weight: 600;
  margin: 0;
}

.duty-line { 
  height: 3px; 
  background: #f5a34b; 
  display: block; 
  border-radius: 2px;
}

.duty-block p { 
  margin: 0; 
  line-height: 1.7; 
  color: #4a5568; 
  font-size: 16px;
  text-align: justify;
}

.duty-block p + p { 
  margin-top: 12px; 
}

/* 平板端响应式优化 (768px+) */
@media (min-width: 768px) {
  .page {
    padding-left: 32px;
    padding-right: 32px;
  }
  
  .about-intro { 
    grid-template-columns: 320px 1fr; 
    gap: 40px; 
  }
  
  .gallery { 
    grid-template-columns: repeat(3, 1fr); 
    gap: 28px;
  }
  
  .honors-intro { 
    grid-template-columns: 320px 1fr; 
    gap: 40px; 
  }
  
  .honors-gallery { 
    grid-template-columns: repeat(3, 1fr); 
    gap: 36px; 
  }
  
  .honors-gallery img { 
    height: 100px; 
  }
  
  .duty-intro { 
    grid-template-columns: 320px 1fr; 
    gap: 40px; 
  }
}

/* PC端响应式优化 (1024px+) */
@media (min-width: 1024px) {
  .page {
    padding-left: 60px;
    padding-right: 60px;
  }
  
  .about-intro { 
    grid-template-columns: 320px 1fr; 
    gap: 40px; 
  }
  
  .gallery { 
    grid-template-columns: repeat(3, 1fr); 
    gap: 28px;
  }
  
  .honors-intro { 
    grid-template-columns: 320px 1fr; 
    gap: 40px; 
  }
  
  .honors-gallery { 
    grid-template-columns: repeat(3, 1fr); 
    gap: 36px; 
  }
  
  .honors-gallery img { 
    height: 100px; 
  }
  
  .duty-intro { 
    grid-template-columns: 320px 1fr; 
    gap: 40px; 
  }
}

/* 大屏幕优化 (1200px+) */
@media (min-width: 1200px) {
  .page {
    max-width: 1400px;
  }
  
  .about-intro,
  .honors-intro,
  .duty-intro {
    gap: 48px;
  }
  
  .gallery {
    gap: 32px;
  }
  
  .honors-gallery {
    gap: 40px;
  }
}

/* 移动端特殊优化 */
@media (max-width: 480px) {
  .page {
    padding-left: 16px;
    padding-right: 16px;
  }
  
  .about-intro .desc p,
  .duty-block p {
    text-align: left;
  }
  
  .duty-block {
    padding: 16px;
  }
  
  .duty-header {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .duty-title {
    margin-bottom: 8px;
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .about-intro .media:hover img,
  .gallery img:hover,
  .honors-gallery img:hover,
  .duty-block:hover {
    transform: none;
    box-shadow: inherit;
  }
  
  .about-intro .media img,
  .gallery img,
  .honors-gallery img {
    transition: none;
  }
}
</style>


