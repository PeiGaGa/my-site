<script setup>
import { useResponsive } from './composables/useResponsive'
import PcLayout from './layouts/PcLayout.vue'
import MobileLayout from './layouts/MobileLayout.vue'

const { isMobile } = useResponsive(1024)
</script>

<template>
  <component :is="isMobile ? MobileLayout : PcLayout" />
</template>

