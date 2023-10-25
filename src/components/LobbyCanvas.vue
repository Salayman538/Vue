<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import { useCommonStore } from '@/stores/common'
import { useLobbyUtils } from '../composables/useLobbyUtils'

const canvasRef = ref<HTMLCanvasElement | null>(null)

const storeCommon = useCommonStore()
const { init, handleClick, animate } = useLobbyUtils()

onMounted(() => {
  const canvas: any = canvasRef.value

  canvas.width = innerWidth
  canvas.height = innerHeight

  storeCommon.setCanvasData(canvas.height, canvas.width, canvas.getContext('2d'))

  init()

  setInterval(() => {
    animate()
  }, 18)
})

onUnmounted(() => {
  location.reload()
})
</script>

<template>
  <canvas ref="canvasRef" @click="handleClick"></canvas>
</template>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
