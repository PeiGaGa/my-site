import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
// 可按需继续添加页面，例如：
// const About = () => import('../views/About.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  // { path: '/about', name: 'about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router


