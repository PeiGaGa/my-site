<script setup>
import { ref } from 'vue'
import copy from '@/assets/images/copy.png'
import ex from '@/assets/images/ex.png'

const projects = ref([
  {
    id: 1,
    title: '三文鱼养殖工厂适用快速病原分析系统及冻干试剂开发与应用',
    cover: ex,
    summary:
      '研究背景：三文鱼工厂化养殖过程中，一旦出现群体异常染病，传播速度快，但常规手法上样不均及上游检测流程繁琐，难以及时对病原体做出明确判断。目前常规核酸检测涉及分子实验基础及严格实验手内控管理，使用者常以科研人员或三文鱼养殖各条生产岗位的养殖专员居多，且非专业的操作手法大大影响了有效判断的稳定性及检出准确。研究目标为：1）基于冻干试剂体系开发一体化分子检测方案；2）针对三文鱼工厂链路中疑似病原样本（鳃部、鳍部、肠道等），开发相应流程并建立检测报告。',
  },
  {
    id: 2,
    title: '冷链气候菌群固液捕获装置开发与应用',
    cover: ex,
    summary:
      '研究背景：冷链气候环境作为抽样集菌常规线上操作中，常需要到一种界面，一旦形成气溶胶菌群就很难收集、耐活、扩增的内容。常规抽滤或布表面取样均有局限，且一旦出现破损，极易造成回抽，形成取样风险。研究目标：研制可用于高湿低温环境的菌群固液捕获装置，并配套快速核酸检测流程（重点在DNA水平），适配现场高频高湿环境下，可广泛应用的标准化抽检流程与数据沉淀，以便可视化展示冷链场景菌群风险现状。',
  },
  {
    id: 3,
    title: '工程噬菌体三文鱼养殖链路菌群宿主及流调病原体系',
    cover: ex,
    summary:
      '研究背景：三文鱼工厂化养殖生物链路是一个闭环的微生态系统，细菌在不同节点中广泛分布并保持较强韧性。噬菌体作为自然界的“细菌天敌”，对维持菌群稳态具有重要意义。研究目标：1）从工艺链路关键节点中分离高效宿主噬菌体；2）构建宿主-噬菌体对应关系及菌群流调数据库；3）建立面向现场的标准化快速检测与处置方案。',
  },
])
</script>

<template>
  <section class="hero" role="img" aria-label="research hero">
    <img class="hero-img" :src="ex" alt="科研平台" />
    <div class="hero-mask"></div>
    <h1 class="hero-title">科研平台</h1>
  </section>
  <section class="page">
    <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
    <div class="header-left">
      <h1 class="title">科研平台</h1>
      <div class="title-underline"></div>
    </div>
    <div class="divider dashed"></div>

    <ul class="list">
      <li v-for="(p, idx) in projects" :key="p.id" class="item">
        <div class="media">
        </div>
        <div class="content">
          <div class="media" v-if="p.cover">
            <img :src="p.cover" :alt="p.title" />
          </div>
          <div class="title-row">
            <h3 class="item-title">{{ idx + 1 }}. {{ p.title }}</h3>
          </div>
          <span class="item-underline"></span>
          <div class="desc">
            <p>{{ p.summary }}</p>
          </div>
        </div>
      </li>
    </ul>
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

.divider { height: 0; border-top: 2px dashed #e5e6eb; margin: 12px 0 24px; }

.list { display:grid; gap:28px; }
.item { 
  display:grid; 
  grid-template-columns: 1fr; 
  gap:16px; 
}

.media img { 
  width:100%; 
  height:200px; 
  object-fit:cover; 
  display:block; 
  border-radius:2px; 
}

/* 移动端media间距 */
.content .media {
  margin-bottom: 16px;
}

.content { padding-bottom:16px; border-bottom:1px dashed #dadada; }
.list li:last-child .content { border-bottom: none; }
.content .desc { color:#4a5568; line-height:1.9; margin:8px 0 0; font-size:18px;}
.title-row { display:grid; grid-template-columns:auto 1fr; align-items:center; gap:12px; }
.item-title { margin:0; font-size:20px; color:#333; font-weight:600; }
.item-underline { display:block; width:44px; height:3px; background:#f5a34b; margin:16px 0 50px; }

@media (min-width: 768px) {
  .item { grid-template-columns: 360px 1fr; gap:24px; }
  .media img { height:240px; }
  .content .media {
    margin-bottom: 20px;
  }
  .item-underline {
    margin: 20px 0 50px;
  }
}

@media (min-width: 1200px) {
  .content .media img {
    width: 100%;
    max-width: 1170px;
    height: 360px;
  }
  .content .media {
    margin-bottom: 32px;
  }
  .item-underline {
    margin: 24px 0 50px;
  }
}

@media (min-width: 1600px) {
  .content .media {
    margin-bottom: 38px;
  }
  .item-underline {
    margin: 26px 0 50px;
  }
}

@media (min-width: 2200px) {
  .content .media {
    margin-bottom: 44px;
  }
  .item-underline {
    margin: 30px 0 50px;
  }
}
</style>


