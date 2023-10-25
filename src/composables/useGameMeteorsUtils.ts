import Meteor from './other/class-meteor'
import { getDistance, randomIntFromRange } from '@/utils/common'
import { useCommonStore } from '@/stores/common'
import type { MeteorsInterface } from '@/types/common.model'

export const useGameMeteorsUtils = () => {
  const storeCommon = useCommonStore()

  let meteors: MeteorsInterface[] = []
  let radius = 40

  const init = (index?: number) => {
    if (index || index === 0) {
      let y = randomIntFromRange(0 + radius, storeCommon.CanvasData.height - radius)
      let x = randomIntFromRange(
        storeCommon.CanvasData.width + radius,
        storeCommon.CanvasData.width + radius * 4
      )

      meteors[index] = new Meteor(index, x, y, radius)
    } else {
      meteors = []

      for (let i = 0; i <= 4; i++) {
        let y = randomIntFromRange(0 + radius, storeCommon.CanvasData.height - radius)
        let x = randomIntFromRange(
          storeCommon.CanvasData.width + radius,
          storeCommon.CanvasData.width + radius * 8
        )

        if (i !== 0) {
          for (let j = 0; j < meteors.length; j++) {
            if (getDistance(x, y, meteors[j].x, meteors[j].y) - radius * 2 < 0) {
              y = randomIntFromRange(0 + radius, storeCommon.CanvasData.height - radius)

              j = -1
            }
          }
        }
        meteors.push(new Meteor(i, x, y, radius))
      }
    }
  }

  const animateMeteors = () => {
    meteors.forEach((element: MeteorsInterface) => {
      element.update()
      if (element.x <= 0 - radius) {
        storeCommon.Player.score += randomIntFromRange(30, 50)
        init(element.id)
      }
      if (getDistance(element.x, element.y, storeCommon.Player.x, storeCommon.Player.y) < 80) {
        storeCommon.Player.lives -= 1
        init()
      }
    })
  }

  return { init, animateMeteors }
}
