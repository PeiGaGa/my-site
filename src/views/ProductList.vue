<script setup>
import { ref } from 'vue'
const page = ref(1)
const pageSize = 8
const products = ref(Array.from({ length: 24 }).map((_, i) => ({ id: i + 1, name: `产品 ${i + 1}` })))
const paged = () => products.value.slice((page.value - 1) * pageSize, page.value * pageSize)
const totalPages = () => Math.ceil(products.value.length / pageSize)
</script>

<template>
  <section class="section">
    <h1>产品中心</h1>
    <div class="grid">
      <div class="card" v-for="p in paged()" :key="p.id">{{ p.name }}</div>
    </div>
    <div class="pager">
      <button :disabled="page===1" @click="page--">上一页</button>
      <span>{{ page }} / {{ totalPages() }}</span>
      <button :disabled="page===totalPages()" @click="page++">下一页</button>
    </div>
  </section>
</template>

<style scoped>
.section { padding: 40px 0; }
.grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap:12px; }
.card { background:#f7f8fa; border:1px solid #eee; border-radius:8px; padding:16px; text-align:center; }
.pager { margin-top: 12px; display:flex; align-items:center; gap:12px; }
</style>


