import { useCommonStore } from '@/stores/common'

export default class Planet {
  x: number
  originalX: number
  y: number
  originalY: number
  radius: number
  distanceFromCenter: number
  radians: number
  name: string
  discription: string
  score: number
  velocity: number

  constructor(
    x: number,
    y: number,
    radius: number,
    distanceFromCenter: number,
    radians: number,
    name: string,
    discription: string,
    score: number
  ) {
    this.x = x
    this.originalX = x
    this.y = y
    this.originalY = y
    this.radius = radius
    this.distanceFromCenter = distanceFromCenter
    this.radians = radians
    this.name = name
    this.discription = discription
    this.score = score
    this.velocity = 0.003
  }

  draw() {
    const storeCommon = useCommonStore()

    const ctx = storeCommon.CanvasData.context

    let image = new Image()
    image.src = `../../images/${this.name}.png`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = 'blue'
    ctx.drawImage(
      image,
      0,
      0,
      160,
      100,
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2,
      this.radius * 2
    )
    // ctx.fill()
    ctx.closePath()
  }

  update() {
    this.radians += this.velocity

    this.x = this.originalX + Math.cos(this.radians) * this.distanceFromCenter
    this.y = this.originalY + Math.sin(this.radians) * this.distanceFromCenter

    this.draw()
  }

  clickCircle(xmouse: number, ymouse: number) {
    let xDistance = xmouse - this.x
    let yDistance = ymouse - this.y

    const distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))

    return distance <= this.radius ? true : false
  }
}
