import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// 支持的语言
const SUPPORTED_LANGUAGES = ['zh-cn', 'en']

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: [
        'src/pages',
        { dir: 'src/pages/zh-cn', baseRoute: 'zh-cn' },
        { dir: 'src/pages/en', baseRoute: 'en' }
      ],
      extensions: ['vue'],
      importMode: 'async',
      extendRoute(route) {
        // 为多语言路由添加语言标识
        if (route.path.startsWith('/zh-cn')) {
          route.meta = { ...route.meta, language: 'zh-cn' }
        } else if (route.path.startsWith('/en')) {
          route.meta = { ...route.meta, language: 'en' }
        }
        
        // 允许在页面组件内通过 route.meta 定义 SEO 元信息
        return route
      },
    }),
  ],
  ssr: {
    noExternal: ['@amap/amap-jsapi-loader']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 5173,      // 指定端口
    open: true,      // 自动打开浏览器
  },
})
