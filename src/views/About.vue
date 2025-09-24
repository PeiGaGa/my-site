<script setup>
import ex from '@/assets/images/ex.png'
import copy from '@/assets/images/copy.png'
</script>

<template>
  <section class="page">
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
        <p>江苏连深海洋科技有限公司（以下简称“连深海洋”）由左至海南南沙开发建设公司、连云港市鲍鱼发海洋牧场园、大百汇实业曲集团联合投资成立，矢志走在中国远洋渔业发展的前沿阵地，作为主营渔业首个上市的投资平台战略平台，公司致力于建设中国深海养殖基地，构建现代海洋渔业产业链，努力开拓三大行业集群：全球首艘鲍鱼养殖工程船、中国最大三文鱼产品供应商、中国规模最大的三文鱼产业集群。</p>
        <p>公司以“科技兴渔、产业强国”为发展理念，聚焦三文鱼高度远洋海洋生态产业链建设，通过创新驱动、科技赋能，全力构建“一体两核六中心”的现代化产业格局，推动我国远洋海洋渔业高质量绿色、智能化、品牌化方向发展。</p>
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
            <p>我们以“科技兴渔、产业强国”为发展理念，聚焦三文鱼高度远洋海洋生态产业链建设，通过技术创新、装备升级与数字化能力建设，全面提升从育苗、养殖到加工、供应链运营的综合效率与安全水平。</p>
          </div>
          <div class="duty-block">
            <div class="duty-header">
              <span class="duty-title">产业共荣，责任共担：</span>
              <span class="duty-line"></span>
            </div>
            <p>面向“一个体两核六中心”的现代化产业格局，连深海洋积极联动上下游伙伴、科研院校与地方政府，推动海洋渔业高质量绿色、智能化、品牌化发展，实现企业价值与社会价值的同频共振。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page { padding: 40px 0; }
.icon-row { display:flex; justify-content:flex-end; }
.header-left { display:flex; flex-direction:column; }
.title { font-size: 22px; margin: 0; }
.title-underline { width:40px; height:3px; background:#f5a34b; margin:6px 0 12px; }
.header-icon { width:24px; height:24px; object-fit:contain; opacity:.8; }

.divider { height: 0; border-top: 2px dashed #e5e6eb; margin: 12px 0 24px; }
.section-caption { color:#6b7785; font-size:14px; margin-bottom:12px; }

.about-intro { display:grid; grid-template-columns: 1fr; gap:24px; align-items:start; }
.about-intro .left, .about-intro .desc { border-top:2px dotted #dcdfe6; padding-top:14px; }
.about-intro .media img { display:block; width:100%; height:auto; border-radius:2px; }
.about-intro .desc p { margin:0 0 12px; line-height:1.8; color:#4a5568; }

.gallery { display:grid; grid-template-columns: 1fr; gap:28px; margin-top: 24px; }
.gallery img { width:100%; height:auto; display:block; border-radius:2px; }

.honors { 
  margin-top: 36px; 
  position: relative;
  background:#f1f1f1;               /* center area */
  box-shadow: 0 0 0 100vmax #f1f1f1; /* extend to viewport edges */
  clip-path: inset(0 -100vmax);      /* hide overflow of box-shadow */
  padding:32px 0;                    /* increase vertical breathing space */
}
.honors-intro { display:grid; grid-template-columns: 1fr; gap:24px; align-items:start; }
.honors-intro .left, .honors-intro .right { border-top:2px dotted #dcdfe6; padding-top:14px; }
.honors-gallery { display:grid; grid-template-columns: 1fr; gap:32px; align-items:center; }
.honors-gallery img { 
  width:100%; 
  height:100px;                      /* make plaques larger on mobile */
  object-fit:cover;                /* keep aspect without cropping */
  display:block; 
  border-radius:2px; 
}

.duty { margin-top: 44px; }
.duty-intro { display:grid; grid-template-columns: 1fr; gap:24px; align-items:start; }
.duty-intro .left, .duty-intro .right { border-top:2px dotted #dcdfe6; padding-top:14px; }
.duty-block { margin-bottom: 28px; }
.duty-header { display:grid; grid-template-columns: auto 1fr; gap:14px; align-items:center; margin-bottom:8px; }
.duty-title { font-size:14px; color:#333; }
.duty-line { height:3px; background:#f5a34b; display:block; }
.duty-block p { margin:0; line-height:1.85; color:#4a5568; }
.duty-block p + p { margin-top:6px; }

@media (min-width: 768px) {
  .about-intro { grid-template-columns: 320px 1fr; gap:40px; }
  .gallery { grid-template-columns: repeat(3, 1fr); }
  .honors-intro { grid-template-columns: 320px 1fr; gap:40px; }
  .honors-gallery { grid-template-columns: repeat(3, 1fr); gap:36px; }
  .honors-gallery img { height:100px; }
  .duty-intro { grid-template-columns: 320px 1fr; gap:40px; }
}
</style>


