<script setup lang="ts">
import { useCommonStore } from '@/stores/common'

const storeCommon = useCommonStore()
</script>

<template>
  <div class="wrapper">
    <p>Punkty: {{ storeCommon.Player.score }}</p>
    <p>Życia: {{ storeCommon.Player.lives }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  color: #f1ecec;
  padding-left: 14px;
  padding-top: 10px;
}
</style>
