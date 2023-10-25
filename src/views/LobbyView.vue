<script setup lang="ts">
import WelcomeScreen from '../components/WelcomeScreen.vue'
import LobbyCanvas from '../components/LobbyCanvas.vue'
import Popup from '@/components/Popup.vue'
import { useCommonStore } from '@/stores/common'
import ScoreBoard from '@/components/ScoreBoard.vue'

const storeCommon = useCommonStore()
</script>

<template>
  <Transition name="fade-out">
    <div v-if="storeCommon.welcomeScreenStatus.isVisible">
      <WelcomeScreen></WelcomeScreen>
    </div>
  </Transition>
  <Transition name="fade-in">
    <div v-if="!storeCommon.welcomeScreenStatus.isVisible">
      <LobbyCanvas />
      <ScoreBoard />
      <Popup />
    </div>
  </Transition>
</template>
