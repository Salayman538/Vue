import { useCommonStore } from '@/stores/common'

export const useGamePlayerUtils = () => {
  const storeCommon = useCommonStore()

  const Player = {
    x: 200,
    y: innerHeight / 2,
    velocityX: 0,
    velocityY: 0,
    radius: 40,
    points: 0,
    lives: 3,
    speed: 6
  }

  const setPlayer = () => {
    const ctx = storeCommon.CanvasData.context

    Player.x += Player.velocityX * Player.speed
    Player.y += Player.velocityY * Player.speed

    ctx.beginPath()
    ctx.strokeStyle = 'blue'
    ctx.arc(Player.x, Player.y, Player.radius, 0, Math.PI * 2, true)
    ctx.stroke()
    ctx.closePath()

    if (Player.y - Player.radius < 0) {
      Player.y = Player.radius
    } else if (Player.y + Player.radius > storeCommon.CanvasData.height) {
      Player.y = storeCommon.CanvasData.height - Player.radius
    } else if (Player.x - Player.radius < 0) {
      Player.x = Player.radius
    } else if (Player.x + Player.radius > storeCommon.CanvasData.width) {
      Player.x = storeCommon.CanvasData.width - Player.radius
    }
  }

  const changeDirection = (e: KeyboardEvent) => {
    if (e.code == 'ArrowUp' || e.code == 'KeyW') {
      Player.velocityX = 0
      Player.velocityY = -1
    } else if (e.code == 'ArrowDown' || e.code == 'KeyS') {
      Player.velocityX = 0
      Player.velocityY = 1
    } else if (e.code == 'ArrowLeft' || e.code == 'KeyA') {
      Player.velocityX = -1
      Player.velocityY = 0
    } else if (e.code == 'ArrowRight' || e.code == 'KeyD') {
      Player.velocityX = 1
      Player.velocityY = 0
    }
  }

  const stopMove = () => {
    Player.velocityX = 0
    Player.velocityY = 0
  }

  const animate = () => {
    storeCommon.CanvasData.context.clearRect(
      0,
      0,
      storeCommon.CanvasData.width,
      storeCommon.CanvasData.height
    )
    setPlayer()
    window.addEventListener('keydown', changeDirection)
    window.addEventListener('keyup', stopMove)

    storeCommon.Player.x = Player.x
    storeCommon.Player.y = Player.y
  }

  return { animate }
}
