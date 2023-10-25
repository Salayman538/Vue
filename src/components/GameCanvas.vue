<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useCommonStore } from '@/stores/common'
import { useGamePlayerUtils } from '@/composables/useGamePlayerUtils'
import { useGameMeteorsUtils } from '@/composables/useGameMeteorsUtils'

const canvasRef = ref<HTMLCanvasElement | null>(null)

const storeCommon = useCommonStore()
const { animate } = useGamePlayerUtils()
const { init, animateMeteors } = useGameMeteorsUtils()

onMounted(() => {
  const canvas: any = canvasRef.value

  canvas.width = innerWidth
  canvas.height = innerHeight

  storeCommon.setCanvasData(canvas.height, canvas.width, canvas.getContext('2d'))

  init()
  setInterval(() => {
    animate()
    animateMeteors()
  }, 16)
})

onUnmounted(() => {
  location.reload()
})
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
