<script setup>
import { ref } from 'vue'
import copy from '@/assets/images/copy.png'
import ex from '@/assets/images/ex.png'

const projects = ref(
  Array.from({ length: 4 }).map((_, i) => ({
    id: i + 1,
    title: `科研课题 ${i + 1}`,
    cover: ex,
    summary:
      '研究背景：这里是项目简介的占位文本。可替换为真实的研究方向、技术路线与预期成果描述，用于页面示例。',
  }))
)
</script>

<template>
  <section class="page">
    <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
    <div class="header-left">
      <h1 class="title">科研平台</h1>
      <div class="title-underline"></div>
    </div>
    <div class="divider"></div>

    <ul class="list">
      <li v-for="(p, idx) in projects" :key="p.id" class="item">
        <div class="media" v-if="p.cover">
        </div>
        <div class="content">
          <div class="title-row">
            <h3 class="item-title">{{ idx + 1 }}. {{ p.title }}</h3>
          </div>
          <div class="desc">
            <p>{{ p.summary }}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.page { padding: 40px 0; }
.icon-row { display:flex; justify-content:flex-end; }
.header-left { display:flex; flex-direction:column; }
.title { font-size: 22px; margin: 0; }
.title-underline { width:40px; height:3px; background:#f5a34b; margin:6px 0 12px; }
.header-icon { width:24px; height:24px; object-fit:contain; opacity:.8; }

.divider { height: 1px; background: #e5e6eb; margin: 12px 0 24px; }

.list { display:grid; gap:28px; }
.item { 
  display:grid; 
  grid-template-columns: 1fr; 
  gap:16px; 
}

.media img { 
  width:100%; 
  height:180px; 
  object-fit:cover; 
  display:block; 
  border-radius:2px; 
}

.content { padding-bottom:16px; border-bottom:1px dashed #e2e2e2; }
.list li:last-child .content { border-bottom: none; }
.content .desc { color:#4a5568; line-height:1.85; margin:8px 0 0; }
.title-row { display:grid; grid-template-columns:auto 1fr; align-items:center; gap:12px; }
.item-title { margin:0; font-size:16px; color:#333; }
.item-underline { display:block; height:3px; background:#f5a34b; }

@media (min-width: 768px) {
  .item { grid-template-columns: 360px 1fr; gap:24px; }
  .media img { height:220px; }
}
</style>


