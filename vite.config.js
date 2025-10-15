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
      // 使用同步导入，避免生成动态 import，从而更容易打出纯静态可直接运行的 JS
      importMode: 'sync',
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
  build: {
    // 关闭模块预加载标记，减少现代 ESM 特性输出
    modulePreload: false,
    // 关闭 CSS 拆分，产出单一 CSS，便于在纯静态环境直接引用
    cssCodeSplit: false,
    // 避免过新语法，提升兼容性（不影响去除 import）
    target: 'es2015',
    rollupOptions: {
      output: {
        // 使用 IIFE 而不是 ESM，彻底避免 import 语句出现在产物中
        format: 'iife',
        // 将动态 import 合并为单文件
        inlineDynamicImports: true,
        // 简化文件名，减少额外 chunk 的生成
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  // 在 SSG/SSR 阶段排除高德地图加载器，避免其在 Node 环境下访问 window 报错
  ssr: {
    external: ['@amap/amap-jsapi-loader']
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
