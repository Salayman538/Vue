<script setup lang="ts">
import { useCommonStore } from '@/stores/common'

const storeCommon = useCommonStore()
</script>

<template>
  <div class="wrapper">
    <div class="planet-info" v-if="storeCommon.popupStatus.isVisible">
      <p class="planet-name">{{ storeCommon.popupStatus.name }}</p>
      <p class="planet-name">{{ storeCommon.popupStatus.discription }}</p>
      <p class="planet-info-close" @click="storeCommon.popupStatus.isVisible = false">X</p>
    </div>
  </div>
</template>

<style>
.wrapper {
  position: absolute;
  left: 50%;
  top: 40%;
}

.planet-info {
  position: relative;
  left: -50%;
  top: -40%;
  margin: auto;
  font-family: polish;
  text-align: center;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: rgba(54, 75, 68, 0.9);
  color: white;
}

.planet-name {
  font-size: 1.4rem;
  color: #68edcb;
}

.planet-info-close {
  position: absolute;
  top: 3px;
  right: 8px;
  font-size: 2rem;
  cursor: pointer;
}
</style>
