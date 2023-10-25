export interface MeteorsInterface {
  update: any
  id: number
  x: number
  y: number
  radius: number
  velocity: number
}

export interface PlanetsInterface {
  x: number
  y: number
  radius: number
  distanceFromCenter: number
  radians: number
  name: string
  discription: string
  score: number
}

export interface PlayerInterface {
  x: number
  y: number
  velocityX: number
  velocityY: number
  radius: number
  points: number
  lives: number
  speed: number
}
