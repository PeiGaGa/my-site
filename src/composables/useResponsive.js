import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useResponsive(breakpoint = 1024) {
  const isMobile = ref(false)

  const updateByWidth = () => {
    isMobile.value = window.innerWidth < breakpoint
  }

  onMounted(() => {
    updateByWidth()
    window.addEventListener('resize', updateByWidth)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateByWidth)
  })

  return { isMobile }
}


