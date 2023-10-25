import { computed } from 'vue'

import { useCommonStore } from '@/stores/common'
import Planet from './other/class-planet'
import { planetsDiscriptions, planetsScore } from './other/planetsInformations'
import type { PlanetsInterface } from '@/types/common.model'

export const useLobbyUtils = () => {
  const storeCommon = useCommonStore()

  const planets: object[] = []

  const planetsData = computed(() => {
    return [
      {
        x: storeCommon.CanvasData.width / 2,
        y: storeCommon.CanvasData.height / 2,
        radius: 47,
        distanceFromCenter: 0,
        radians: 1,
        name: 'Słońce',
        discription: planetsDiscriptions.Slonce,
        score: planetsScore.Slonce
      },
      {
        x: storeCommon.CanvasData.width / 2,
        y: storeCommon.CanvasData.height / 2,
        radius: 17,
        distanceFromCenter: 80,
        radians: 6,
        name: 'Merkury',
        discription: planetsDiscriptions.Merkury,
        score: planetsScore.Merkury
      },
      {
        x: storeCommon.CanvasData.width / 2,
        y: storeCommon.CanvasData.height / 2,
        radius: 22,
        distanceFromCenter: 105,
        radians: 10,
        name: 'Wenus',
        discription: planetsDiscriptions.Wenus,
        score: planetsScore.Wenus
      },
      {
        x: storeCommon.CanvasData.width / 2,
        y: storeCommon.CanvasData.height / 2,
        radius: 17,
        distanceFromCenter: 160,
        radians: 2,
        name: 'Ziemia',
        discription: planetsDiscriptions.Ziemia,
        score: planetsScore.Ziemia
      },
      {
        x: storeCommon.CanvasData.width / 2,
        y: storeCommon.CanvasData.height / 2,
        radius: 20,
        distanceFromCenter: 208,
        radians: 3,
        name: 'Mars',
        discription: planetsDiscriptions.Mars,
        score: planetsScore.Mars
      },
      {
        x: storeCommon.CanvasData.width / 2,
        y: storeCommon.CanvasData.height / 2,
        radius: 40,
        distanceFromCenter: 268,
        radians: 99,
        name: 'Jowisz',
        discription: planetsDiscriptions.Jowisz,
        score: planetsScore.Jowisz
      },
      {
        x: storeCommon.CanvasData.width / 2,
        y: storeCommon.CanvasData.height / 2,
        radius: 36,
        distanceFromCenter: 345,
        radians: 1,
        name: 'Saturn',
        discription: planetsDiscriptions.Saturn,
        score: planetsScore.Saturn
      },
      {
        x: storeCommon.CanvasData.width / 2,
        y: storeCommon.CanvasData.height / 2,
        radius: 32,
        distanceFromCenter: 415,
        radians: 90,
        name: 'Uran',
        discription: planetsDiscriptions.Uran,
        score: planetsScore.Uran
      },
      {
        x: storeCommon.CanvasData.width / 2,
        y: storeCommon.CanvasData.height / 2,
        radius: 30,
        distanceFromCenter: 480,
        radians: 56,
        name: 'Neptun',
        discription: planetsDiscriptions.Neptun,
        score: planetsScore.Neptun
      }
    ]
  })

  const init = () => {
    planetsData.value.forEach((element: PlanetsInterface) => {
      planets.push(
        new Planet(
          element.x,
          element.y,
          element.radius,
          element.distanceFromCenter,
          element.radians,
          element.name,
          element.discription,
          element.score
        )
      )
    })
  }

  const handleClick = (e: MouseEvent) => {
    planets.forEach((item: any) => {
      if (item.clickCircle(e.clientX, e.clientY))
        storeCommon.setPopupStatus(true, item.name, item.discription)
    })
  }

  const animate = () => {
    storeCommon.CanvasData.context.clearRect(
      0,
      0,
      storeCommon.CanvasData.width,
      storeCommon.CanvasData.height
    )
    planets.forEach((planet: any) => {
      planet.update()
    })
  }

  return {
    init,
    handleClick,
    animate
  }
}
