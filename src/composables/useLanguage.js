import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// 支持的语言配置
const SUPPORTED_LANGUAGES = {
  'zh-cn': { name: '简体中文', code: 'zh-cn', path: '/zh-cn' },
  'en': { name: 'English', code: 'en', path: '/en' }
}

// 默认语言
const DEFAULT_LANG = 'zh-cn'

// 全局语言状态
const currentLanguage = ref(DEFAULT_LANG)

export function useLanguage() {
  const router = useRouter()
  const route = useRoute()

  // 从localStorage获取保存的语言设置
  const getStoredLanguage = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('site-language') || DEFAULT_LANG
    }
    return DEFAULT_LANG
  }

  // 保存语言设置到localStorage
  const setStoredLanguage = (lang) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('site-language', lang)
    }
  }

  // 从URL路径中提取语言
  const getLanguageFromPath = (path) => {
    const pathSegments = path.split('/').filter(Boolean)
    if (pathSegments.length > 0) {
      const firstSegment = pathSegments[0]
      if (SUPPORTED_LANGUAGES[firstSegment]) {
        return firstSegment
      }
    }
    return DEFAULT_LANG
  }

  // 移除路径中的语言前缀
  const removeLanguageFromPath = (path) => {
    const pathSegments = path.split('/').filter(Boolean)
    if (pathSegments.length > 0 && SUPPORTED_LANGUAGES[pathSegments[0]]) {
      return '/' + pathSegments.slice(1).join('/')
    }
    return path
  }

  // 添加语言前缀到路径
  const addLanguageToPath = (path, lang = currentLanguage.value) => {
    const cleanPath = removeLanguageFromPath(path)
    return `/${lang}${cleanPath === '/' ? '' : cleanPath}`
  }

  // 切换语言
  const switchLanguage = (newLang) => {
    if (!SUPPORTED_LANGUAGES[newLang]) {
      console.warn(`不支持的语言: ${newLang}`)
      return
    }

    const oldLang = currentLanguage.value
    currentLanguage.value = newLang
    setStoredLanguage(newLang)

    // 获取当前路径并切换语言
    const currentPath = route.path
    const pathWithoutLang = removeLanguageFromPath(currentPath)
    const newPath = addLanguageToPath(pathWithoutLang, newLang)

    // 使用replace避免在浏览器历史中创建新记录
    router.replace(newPath)
  }

  // 初始化语言设置
  const initializeLanguage = () => {
    const storedLang = getStoredLanguage()
    const pathLang = getLanguageFromPath(route.path)
    
    // 优先使用URL中的语言，其次使用存储的语言
    const lang = pathLang !== DEFAULT_LANG ? pathLang : storedLang
    currentLanguage.value = lang
    setStoredLanguage(lang)
  }

  // 监听路由变化，更新语言
  watch(() => route.path, (newPath) => {
    const pathLang = getLanguageFromPath(newPath)
    if (pathLang !== currentLanguage.value) {
      currentLanguage.value = pathLang
      setStoredLanguage(pathLang)
    }
  })

  // 计算属性
  const currentLangInfo = computed(() => SUPPORTED_LANGUAGES[currentLanguage.value])
  const isChinese = computed(() => currentLanguage.value === 'zh-cn')
  const isEnglish = computed(() => currentLanguage.value === 'en')

  return {
    // 状态
    currentLanguage,
    currentLangInfo,
    isChinese,
    isEnglish,
    supportedLanguages: SUPPORTED_LANGUAGES,
    
    // 方法
    switchLanguage,
    initializeLanguage,
    addLanguageToPath,
    removeLanguageFromPath,
    getLanguageFromPath
  }
}
