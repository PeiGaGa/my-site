<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <section class="section">
    <h1>新闻详情 #{{ route.params.id }}</h1>
    <p>这里展示新闻的标题、封面、正文内容（占位）。</p>
  </section>
</template>

<style scoped>
.section { padding: 40px 0; }
p { color:#666; }
</style>


