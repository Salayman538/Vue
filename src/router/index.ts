import { createRouter, createWebHistory } from 'vue-router'
import Lobby from '../views/LobbyView.vue'
import GameScreen from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Lobby',
      component: Lobby
    },
    {
      path: '/game',
      name: 'GameScreen',
      component: GameScreen
    }
  ]
})

export default router
