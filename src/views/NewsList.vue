<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useRouter } from 'vue-router'
import copy from '@/assets/images/copy.png'
import ex from '@/assets/images/ex.png'

const router = useRouter()

const enterpriseNews = ref([
  { id: 1, title: '苏海1号LNG首航成功，开启中国深远海三文鱼养殖新纪元。', date: '2023-05-15', excerpt: '全球首座船载鱼类育苗工厂“苏海1号”顺利完成首航，标志着我国深远海三文鱼规模化养殖迈向里程碑。', cover: ex },
  { id: 2, title: '连深海洋与中科院联合研发三文鱼病害快速检测技术。', date: '2023-04-28', excerpt: '产学研协同创新，助力水产健康养殖。', cover: copy },
  { id: 3, title: '连深海洋与多家知名企业达成战略合作，共建三文鱼全产业链。', date: '2023-05-15', excerpt: '强强联合，推动产业高质量发展。', cover: copy },
  { id: 4, title: '智慧渔场平台上线，养殖全过程实现数字化可视。', date: '2023-06-02', excerpt: '物联网与AI算法融合，提升生产管理效率。', cover: copy },
  { id: 5, title: '“蓝海计划”二期启动，深海网箱扩容至百万方。', date: '2023-06-18', excerpt: '扩容提质并重，打造绿色低碳示范渔场。', cover: ex },
  { id: 6, title: '冷链加工中心投产，打通从海上到餐桌最后一公里。', date: '2023-07-01', excerpt: '全程温控、原码追溯，保障产品新鲜安全。', cover: copy },
  { id: 7, title: '与海洋大学共建联合实验室，聚焦育种与营养研究。', date: '2023-07-12', excerpt: '校企合作，夯实技术底座。', cover: ex },
  { id: 8, title: '完成B轮融资，加速推进深远海智能养殖装备迭代。', date: '2023-08-03', excerpt: '资本助力产业升级，持续加大研发投入。', cover: copy },
  { id: 9, title: '“海上工厂”荣获国际工业设计金奖。', date: '2023-08-21', excerpt: '以人因与可靠性为核心的系统化设计获认可。', cover: ex },
  { id: 10, title: '海外市场首单落地，三文鱼产品登陆中东。', date: '2023-09-06', excerpt: '供应链布局走向全球化。', cover: copy },
  { id: 11, title: '智能巡检无人机入列，海上运维效率提升40%。', date: '2023-09-28', excerpt: '自动航线、边缘识别、异常预警一体化。', cover: ex }
])

const industryNews = ref([
  { id: 101, title: '工信部发布深远海养殖装备指导意见，行业迎政策利好。', date: '2023-04-28', excerpt: '规范与创新并重，推动行业升级。', cover: ex },
  { id: 102, title: '国际三文鱼价格回升，带动养殖端积极性。', date: '2023-05-15', excerpt: '需求恢复，供给收紧，价格中枢上移。', cover: copy },
  { id: 103, title: '海水循环水养殖技术迭代，节能降耗成趋势。', date: '2023-05-20', excerpt: '新材料与智能控制系统加速应用。', cover: copy },
  { id: 104, title: '北大西洋渔业组织发布可持续捕捞新标准。', date: '2023-06-01', excerpt: '生态红线与产能控制并举。', cover: ex },
  { id: 105, title: '全球水产饲料原料结构调整，替代蛋白占比提升。', date: '2023-06-15', excerpt: '微藻蛋白与昆虫蛋白进入规模化应用阶段。', cover: copy },
  { id: 106, title: '港口冷链运力恢复，跨境物流时效持续改善。', date: '2023-06-27', excerpt: '运价回落，仓配一体化程度提升。', cover: ex },
  { id: 107, title: '海洋牧场碳汇核算方法学讨论稿发布。', date: '2023-07-04', excerpt: '产业链迎来“蓝碳”增量空间。', cover: copy },
  { id: 108, title: '智慧渔业大会聚焦数字孪生与边缘智能。', date: '2023-07-19', excerpt: '从监测走向决策的系统创新。', cover: ex },
  { id: 109, title: '主要产区高温天气来袭，养殖防暑降温成为重点。', date: '2023-08-02', excerpt: '精准曝气与溶氧监测设备需求上升。', cover: copy },
  { id: 110, title: 'ESG评价体系纳入更多海洋生态指标。', date: '2023-08-18', excerpt: '绿色治理成为行业共识。', cover: ex },
  { id: 111, title: '欧洲市场对ASC认证水产品需求持续增长。', date: '2023-09-09', excerpt: '可追溯与合规成为竞争壁垒。', cover: copy }
])

// 独立数组后不再需要计算分组

const open = (id) => router.push({ name: 'news-detail', params: { id } })

function chunk(list, size) {
  const chunks = []
  for (let i = 0; i < list.length; i += size) chunks.push(list.slice(i, i + size))
  return chunks
}
</script>

<template>
  <section class="hero" role="img" aria-label="news hero">
    <img class="hero-img" :src="ex" alt="新闻动态" />
    <div class="hero-mask"></div>
    <h1 class="hero-title">新闻动态</h1>
  </section>
  <section class="news-page">
    <div class="container">
      <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
      <div class="header-left">
        <h1 class="title">新闻动态</h1>
        <div class="title-underline"></div>
      </div>

      <div class="news-section">
        <h2 class="sec-title">企业新闻</h2>
        <div class="sec-body">
          <div class="feature" v-if="enterpriseNews.length">
            <img class="feature-img" :src="enterpriseNews[0].cover" alt="" />
            <div class="feature-meta">
              <div class="date">{{ enterpriseNews[0].date }}</div>
              <h3 class="feature-title" @click="open(enterpriseNews[0].id)">{{ enterpriseNews[0].title }}</h3>
              <p class="feature-excerpt">{{ enterpriseNews[0].excerpt }}</p>
              <button class="more" @click="open(enterpriseNews[0].id)">阅读全文</button>
            </div>
          </div>
          <Swiper
            :modules="[Pagination, Autoplay]"
            :pagination="{ clickable: true }"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :slides-per-view="1"
            :auto-height="false"
            :observer="true"
            :observe-parents="true"
            :space-between="8"
          >
            <SwiperSlide v-for="(page, pIdx) in chunk(enterpriseNews.slice(1), 5)" :key="'ce-'+pIdx">
              <ul class="side-list">
                <li v-for="n in page" :key="n.id" @click="open(n.id)">
                  <div class="item-date">{{ n.date }}</div>
                  <div class="item-title">{{ n.title }}</div>
                </li>
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div class="news-section">
        <h2 class="sec-title">行业动态</h2>
        <div class="sec-body">
          <div class="feature" v-if="industryNews.length">
            <img class="feature-img" :src="industryNews[0].cover" alt="" />
            <div class="feature-meta">
              <div class="date">{{ industryNews[0].date }}</div>
              <h3 class="feature-title" @click="open(industryNews[0].id)">{{ industryNews[0].title }}</h3>
              <p class="feature-excerpt">{{ industryNews[0].excerpt }}</p>
              <button class="more" @click="open(industryNews[0].id)">阅读全文</button>
            </div>
          </div>
          <Swiper
            :modules="[Pagination, Autoplay]"
            :pagination="{ clickable: true }"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :slides-per-view="1"
            :auto-height="false"
            :observer="true"
            :observe-parents="true"
            :space-between="8"
          >
            <SwiperSlide v-for="(page, pIdx) in chunk(industryNews.slice(1), 5)" :key="'ie-'+pIdx">
              <ul class="side-list">
                <li v-for="n in page" :key="n.id" @click="open(n.id)">
                  <div class="item-date">{{ n.date }}</div>
                  <div class="item-title">{{ n.title }}</div>
                </li>
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
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

.news-page { padding: 40px 0 60px; }
.icon-row { display:flex; justify-content:flex-end; }
.header-left { display:flex; flex-direction:column; }
.title { font-size: 22px; margin: 0; }
.title-underline { width:40px; height:3px; background:#f5a34b; margin:6px 0 12px; }
.header-icon { width:24px; height:24px; object-fit:contain; opacity:.8; }
.divider { height: 1px; background: #e5e6eb; margin: 12px 0 24px; }

.news-section { padding: 16px 0 32px; }
.sec-title { font-size: 18px; font-weight: 600; margin: 0 0 10px; }

.sec-body { display: grid; grid-template-columns: 1.4fr 1fr; gap: 24px; align-items: start; border-top: 2px dotted #adadad; padding-top: 14px; position: relative; padding-bottom: 28px; }
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
.item-title { display:-webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-clamp: 2; }
.side-list li:hover .item-title { color: #1677ff; }

.news-section .swiper { width: 100%; height: auto; position: relative; padding-bottom: 20px; }
.news-section .swiper-pagination { position: absolute; right: 0; bottom: 0; display: flex; justify-content: flex-end; gap: 8px; width: 100%; }
.news-section .swiper-pagination-bullet { width: 6px; height: 6px; background: #ddd; opacity: 1; }
.news-section .swiper-pagination-bullet-active { background: #f0a020; }

.dots { display: flex; gap: 8px; align-items: center; justify-content: flex-end; margin-top: 14px; }
.dot { width: 6px; height: 6px; border-radius: 50%; background: #ddd; display: inline-block; }
.dot.active { background: #f0a020; }

@media (max-width: 900px) {
  .sec-body { grid-template-columns: 1fr; }
  .sec-body .swiper {
    height: 440px; /* 适配每页5条，标题两行时更合适 */
  }
}
@media (min-width: 1025px) {
  /* 固定右侧轮播高度，避免分页位置跟随内容波动 */
  .sec-body .swiper {
    height: 420px; /* 适配每页5条，标题两行时更合适 */
  }
}
</style>


