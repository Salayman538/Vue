<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
const storeCommon = useCommonStore()

const start = () => {
  storeCommon.setWelcomeScreenStatus(false)
}
</script>

<template>
  <div>
    <header>
      <h1 class="welcome-text">Galactic Rush</h1>
    </header>
    <div class="welcome-button-wrapper">
      <button class="start-button" @click="start">Rozpocznij</button>
    </div>
  </div>
</template>

<style scoped>
@keyframes welcome-text-animation {
  0% {
    text-shadow: #4d00c1 10px 10px;
  }
  50% {
    text-shadow: #7b35ea 7px 7px;
  }
  100% {
    text-shadow: #3f00b6 10px 10px;
  }
}

.welcome-text {
  text-align: center;
  margin: 0 auto;
  font-size: 4.8rem;
  color: white;
  animation-name: welcome-text-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.welcome-button-wrapper {
  display: grid;
  place-items: center;
  height: 76vh;
}

.start-button {
  background-color: #201e2cc8;
  border: #222137;
  border-radius: 2vw;
  color: white;
  padding: 1vw;
  cursor: pointer;
  font-size: 2rem;
  font-family: main;
}
</style>
