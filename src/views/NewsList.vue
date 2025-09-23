<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const tabs = ['企业动态', '行业报道']
const active = ref('企业动态')
const items = ref(Array.from({ length: 10 }).map((_, i) => ({ id: i + 1, title: `新闻标题 ${i + 1}`, type: i % 2 ? '行业报道' : '企业动态' })))
const list = computed(() => items.value.filter(i => i.type === active.value))
const router = useRouter()
const open = (id) => router.push({ name: 'news-detail', params: { id } })
</script>

<template>
  <section class="section">
    <h1>新闻动态</h1>
    <div class="tabs">
      <button v-for="t in tabs" :key="t" :class="{ active: active===t }" @click="active=t">{{ t }}</button>
    </div>
    <ul class="list">
      <li v-for="n in list" :key="n.id" @click="open(n.id)">{{ n.title }}</li>
    </ul>
  </section>
</template>

<style scoped>
.section { padding: 40px 0; }
.tabs { display:flex; gap:8px; margin-bottom:12px; }
.tabs button { padding:6px 10px; border:1px solid #ddd; background:#fff; border-radius:6px; }
.tabs .active { background:#1677ff; color:#fff; border-color:#1677ff; }
.list { display:grid; gap:8px; }
li { cursor:pointer; padding:12px; border:1px solid #eee; border-radius:8px; }
</style>


