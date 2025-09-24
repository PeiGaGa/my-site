<script setup>
import ex from '@/assets/images/ex.png'
import copy from '@/assets/images/copy.png'
</script>

<template>
  <section class="page">
    <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
    <div class="header-left">
      <h1 class="title">联系我们</h1>
      <div class="title-underline"></div>
    </div>
    <div class="divider dashed"></div>

    <!-- 公司1 卡片 -->
    <div class="contact-card">
      <div class="info">
        <h3>江苏连深海洋科技有限公司</h3>
        <div class="underline"></div>
        <p>地址：江苏省连云港市赣榆区白中路泉岗路303号1202室</p>
        <p>批发采购、渠道合作</p>
        <p>联系人/手机：13266669799</p>
        <p class="sub">高校/科研机构合作</p>
        <p>联系人/罗严：18208985972</p>
      </div>
      <div class="map">
        <img :src="ex" alt="地图占位" />
      </div>
    </div>

    <!-- 公司2 卡片 -->
    <div class="contact-card">
      <div class="info">
        <h3>广东连深海洋食品有限公司</h3>
        <div class="underline"></div>
        <p>地址：深圳市盐田区盐田街道田东社区深盐路2002号</p>
        <p>大百汇新城东六巷A栋602</p>
        <p>批发采购、渠道合作</p>
        <p>联系人/手机：13266669799</p>
        <p class="sub">高校/科研机构合作</p>
        <p>联系人/罗严：18208985972</p>
      </div>
      <div class="map">
        <img :src="ex" alt="地图占位" />
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="actions">
      <button class="btn">人才招聘</button>
      <button class="btn">联系方式</button>
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

.contact-card { display:grid; grid-template-columns: 1fr; gap:0; border-radius: 4px; overflow:hidden; margin-bottom:24px; background:#fff; align-items:stretch; }
.contact-card .info { background:#2f4a86; color:#fff; padding:20px; }
.contact-card .info h3 { margin:0 0 10px; font-size:18px; font-weight:600; }
.contact-card .info .underline { width:40px; height:3px; background:#f5a34b; margin:6px 0 14px; }
.contact-card .info p { margin:6px 0; line-height:1.6; }
.contact-card .info p.sub { margin-top:12px; font-weight:600; }
.contact-card .map { position:relative; height:200px; }
.contact-card .map img { display:block; width:100%; height:100%; object-fit:cover; }

.actions { display:grid; grid-template-columns: 1fr; gap:16px; margin-top: 12px; }
.btn { background:#2f4a86; color:#fff; border:none; padding:14px 16px; border-radius:4px; font-size:16px; cursor:pointer; }
.btn:hover { opacity:.92; }

@media (min-width: 768px) {
  .contact-card { grid-template-columns: 360px 1fr; }
  .contact-card .map { height:auto; }
  .actions { grid-template-columns: 1fr 1fr; }
}
</style>


