import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'
import './style.css'
import './styles/responsive.css'
import './styles/rem-utilities.css'
import './styles/device-adaptation.css'
import App from './App.vue'

export const createApp = ViteSSG(
  App,
  {
    routes: [
      // 根路径重定向到默认语言
      {
        path: '/',
        redirect: '/zh-cn/'
      },
      ...routes
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      return { left: 0, top: 0 }
    },
  },
  ({ router }) => {
    router.afterEach((to) => {
      if (typeof window === 'undefined') return
      
      // 设置页面标题
      if (to.meta?.title) {
        document.title = to.meta.title
      } else {
        // 根据语言设置默认标题
        const lang = to.meta?.language || 'zh-cn'
        if (lang === 'en') {
          document.title = 'Lianshen Marine - Marine Aquaculture'
        } else {
          document.title = '连深海洋 - 海洋养殖'
        }
      }
      
      // 设置HTML lang属性
      if (typeof document !== 'undefined') {
        document.documentElement.lang = to.meta?.language || 'zh-cn'
      }
      
      // 滚动重置
      const reset = () => {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
          const mains = document.querySelectorAll('.pc-main, .m-main')
          mains.forEach(el => { el.scrollTop = 0 })
        } catch (_) { /* no-op */ }
      }
      requestAnimationFrame(reset)
    })
  }
)
