<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import copy from '@/assets/images/copy.png'

const router = useRouter()

const allNews = ref([])
const loading = ref(true)

onMounted(async () => {
  // 在本文件内直接模拟接口返回（异步）
  const ex = new URL('../assets/images/ex.png', import.meta.url).href
  const copyImg = new URL('../assets/images/copy.png', import.meta.url).href
  await new Promise(r => setTimeout(r, 400))
  allNews.value = [
    { id: 1, title: '苏海1号LNG首航成功，开启中国深远海三文鱼养殖新纪元。', date: '2023-05-15', excerpt: '全球首座船载鱼类育苗工厂“苏海1号”顺利完成首航，标志着我国深远海三文鱼规模化养殖迈向里程碑。', cover: ex, type: '企业新闻' },
    { id: 2, title: '连深海洋与中科院联合研发三文鱼病害快速检测技术。', date: '2023-04-28', excerpt: '产学研协同创新，助力水产健康养殖。', cover: copyImg, type: '企业新闻' },
    { id: 3, title: '连深海洋与多家知名企业达成战略合作，共建三文鱼全产业链。', date: '2023-05-15', excerpt: '强强联合，推动产业高质量发展。', cover: copyImg, type: '企业新闻' },
    { id: 11, title: '工信部发布深远海养殖装备指导意见，行业迎政策利好。', date: '2023-04-28', excerpt: '规范与创新并重，推动行业升级。', cover: ex, type: '行业动态' },
    { id: 12, title: '国际三文鱼价格回升，带动养殖端积极性。', date: '2023-05-15', excerpt: '需求恢复，供给收紧，价格中枢上移。', cover: copyImg, type: '行业动态' },
    { id: 13, title: '海水循环水养殖技术迭代，节能降耗成趋势。', date: '2023-05-15', excerpt: '新材料与智能控制系统加速应用。', cover: copyImg, type: '行业动态' }
  ]
  loading.value = false
})

const groupByType = computed(() => ({
  企业新闻: allNews.value.filter(n => n.type === '企业新闻'),
  行业动态: allNews.value.filter(n => n.type === '行业动态')
}))

const open = (id) => router.push({ name: 'news-detail', params: { id } })
</script>

<template>
  <section class="news-page">
    <div class="container">
      <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
      <div class="header-left">
        <h1 class="title">新闻动态</h1>
        <div class="title-underline"></div>
      </div>

      <div v-if="!loading" class="news-section">
        <h2 class="sec-title">企业新闻</h2>
        <div class="sec-body">
          <div class="feature" v-if="groupByType.企业新闻.length">
            <img class="feature-img" :src="groupByType.企业新闻[0].cover" alt="" />
            <div class="feature-meta">
              <div class="date">{{ groupByType.企业新闻[0].date }}</div>
              <h3 class="feature-title" @click="open(groupByType.企业新闻[0].id)">{{ groupByType.企业新闻[0].title }}</h3>
              <p class="feature-excerpt">{{ groupByType.企业新闻[0].excerpt }}</p>
              <button class="more" @click="open(groupByType.企业新闻[0].id)">阅读全文</button>
            </div>
          </div>
          <ul class="side-list">
            <li v-for="(n, idx) in groupByType.企业新闻.slice(1, 6)" :key="n.id" @click="open(n.id)">
              <div class="item-date">{{ n.date }}</div>
              <div class="item-title">{{ n.title }}</div>
            </li>
          </ul>
        </div>
        <div class="dots">
          <span v-for="i in 5" :key="'c-'+i" :class="{ dot:true, active: i===1 }"></span>
        </div>
      </div>

      <div v-if="!loading" class="news-section">
        <h2 class="sec-title">行业动态</h2>
        <div class="sec-body">
          <div class="feature" v-if="groupByType.行业动态.length">
            <img class="feature-img" :src="groupByType.行业动态[0].cover" alt="" />
            <div class="feature-meta">
              <div class="date">{{ groupByType.行业动态[0].date }}</div>
              <h3 class="feature-title" @click="open(groupByType.行业动态[0].id)">{{ groupByType.行业动态[0].title }}</h3>
              <p class="feature-excerpt">{{ groupByType.行业动态[0].excerpt }}</p>
              <button class="more" @click="open(groupByType.行业动态[0].id)">阅读全文</button>
            </div>
          </div>
          <ul class="side-list">
            <li v-for="(n, idx) in groupByType.行业动态.slice(1, 6)" :key="n.id" @click="open(n.id)">
              <div class="item-date">{{ n.date }}</div>
              <div class="item-title">{{ n.title }}</div>
            </li>
          </ul>
        </div>
        <div class="dots">
          <span v-for="i in 5" :key="'i-'+i" :class="{ dot:true, active: i===1 }"></span>
        </div>
      </div>
      <div v-if="loading" class="loading">加载中...</div>
    </div>
  </section>
</template>

<style scoped>
.news-page { padding: 40px 0 60px; }
.icon-row { display:flex; justify-content:flex-end; }
.header-left { display:flex; flex-direction:column; }
.title { font-size: 22px; margin: 0; }
.title-underline { width:40px; height:3px; background:#f5a34b; margin:6px 0 12px; }
.header-icon { width:24px; height:24px; object-fit:contain; opacity:.8; }
.divider { height: 1px; background: #e5e6eb; margin: 12px 0 24px; }

.news-section { padding: 16px 0 32px; }
.sec-title { font-size: 18px; font-weight: 600; margin: 0 0 10px; }

.sec-body { display: grid; grid-template-columns: 1.4fr 1fr; gap: 24px; align-items: start; border-top: 2px dotted #adadad; padding-top: 14px; }
.feature { display: grid; grid-template-columns: 1fr; padding-bottom: 12px; }
.feature-img { width: 100%; display: block; border-radius: 4px; }
.feature-meta { padding-top: 10px; }
.date { color: #888; font-size: 12px; }
.feature-title { font-size: 16px; margin: 6px 0; cursor: pointer; }
.feature-title:hover { color: #1677ff; }
.feature-excerpt { color: #666; font-size: 13px; margin: 8px 0 12px; }
.more { background: transparent; border: none; color: #1677ff; padding: 0; cursor: pointer; text-decoration: underline; text-decoration-color: #f0a020; text-underline-offset: 2px; }

.side-list { list-style: none; margin: 0; padding: 0; }
.side-list li { padding: 12px 0; border-bottom: 1.5px dashed #adadad; cursor: pointer; }
.item-date { color: #8a8a8a; font-size: 12px; margin-bottom: 6px; }
.item-title { font-size: 14px; line-height: 1.5; }
.side-list li:hover .item-title { color: #1677ff; }

.dots { display: flex; gap: 8px; align-items: center; justify-content: flex-end; margin-top: 14px; }
.dot { width: 6px; height: 6px; border-radius: 50%; background: #ddd; display: inline-block; }
.dot.active { background: #f0a020; }

@media (max-width: 900px) {
  .sec-body { grid-template-columns: 1fr; }
}
</style>


