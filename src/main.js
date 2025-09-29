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
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      return { left: 0, top: 0 }
    },
  },
  ({ router }) => {
    router.afterEach((to) => {
      if (typeof window === 'undefined') return
      if (to.meta?.title) {
        document.title = to.meta.title
      }
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
