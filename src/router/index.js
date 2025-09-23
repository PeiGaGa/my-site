import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Farming = () => import('../views/Farming.vue')
const Research = () => import('../views/Research.vue')
const ProductList = () => import('../views/ProductList.vue')
const NewsList = () => import('../views/NewsList.vue')
const NewsDetail = () => import('../views/NewsDetail.vue')
const Contact = () => import('../views/Contact.vue')

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: '首页 - 连深海洋', description: '连深海洋官方网站首页', keywords: '连深海洋,三文鱼,深远海' } },
  { path: '/about', name: 'about', component: About, meta: { title: '关于我们 - 连深海洋' } },
  { path: '/farming', name: 'farming', component: Farming, meta: { title: '养殖模式 - 连深海洋' } },
  { path: '/research', name: 'research', component: Research, meta: { title: '科研平台 - 连深海洋' } },
  { path: '/products', name: 'products', component: ProductList, meta: { title: '产品中心 - 连深海洋' } },
  { path: '/news', name: 'news', component: NewsList, meta: { title: '新闻动态 - 连深海洋' } },
  { path: '/news/:id', name: 'news-detail', component: NewsDetail, meta: { title: '新闻详情 - 连深海洋' } },
  { path: '/contact', name: 'contact', component: Contact, meta: { title: '联系我们 - 连深海洋' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router


