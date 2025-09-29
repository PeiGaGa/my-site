import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'

// 由 vite-plugin-pages 自动生成，默认从 src/pages 读取
const routes = generatedRoutes

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
  // 兜底：强制把各可能的滚动容器回到顶部
  const reset = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      const mains = document.querySelectorAll('.pc-main, .m-main')
      mains.forEach(el => { el.scrollTop = 0 })
    } catch (e) {
      /* no-op */
    }
  }
  // 连续多次尝试，兼容不同渲染时序
  requestAnimationFrame(reset)
})

export default router


