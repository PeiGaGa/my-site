<script setup>
import { ref } from 'vue'
const projects = ref(Array.from({ length: 6 }).map((_, i) => ({ id: i + 1, title: `科研项目 ${i + 1}`, summary: '项目简介占位' })))
</script>

<template>
  <section class="section">
    <h1>科研项目</h1>
    <ul class="list">
      <li v-for="p in projects" :key="p.id">
        <h3>{{ p.title }}</h3>
        <p>{{ p.summary }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.section { padding: 40px 0; }
.list { display:grid; gap:12px; }
li { border:1px solid #eee; border-radius:8px; padding:16px; }
p { color:#666; }
</style>


