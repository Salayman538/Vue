import { useCommonStore } from '@/stores/common'

export default class Meteor {
  id: number
  x: number
  y: number
  radius: number
  velocity: number

  constructor(id: number, x: number, y: number, radius: number) {
    this.id = id
    this.x = x
    this.y = y
    this.radius = radius
    this.velocity = 10
  }

  draw() {
    const storeCommon = useCommonStore()
    const ctx = storeCommon.CanvasData.context

    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.stroke()
    ctx.closePath()
  }

  update() {
    this.x -= this.velocity
    this.draw()
  }
}
