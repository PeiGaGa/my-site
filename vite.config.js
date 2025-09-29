import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'src/pages',
      extensions: ['vue'],
      importMode: 'async',
      extendRoute(route) {
        // 允许在页面组件内通过 route.meta 定义 SEO 元信息
        return route
      },
    }),
  ],
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
