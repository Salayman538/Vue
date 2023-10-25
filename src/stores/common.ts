import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => ({
    welcomeScreenStatus: {
      isVisible: true
    },
    CanvasData: {
      height: 0,
      width: 0,
      context: undefined as unknown as CanvasRenderingContext2D
    },
    popupStatus: {
      isVisible: false,
      name: '',
      discription: ''
    },
    Player: {
      x: 0,
      y: 0,
      score: 0,
      lives: 3
    }
  }),

  actions: {
    setWelcomeScreenStatus(isVisible: boolean) {
      this.welcomeScreenStatus.isVisible = isVisible
    },

    setCanvasData(height: number, width: number, context: CanvasRenderingContext2D) {
      this.CanvasData.height = height
      this.CanvasData.width = width
      this.CanvasData.context = context
    },

    setPopupStatus(isVisible: boolean, name: string, discription: string) {
      this.popupStatus.isVisible = isVisible
      this.popupStatus.name = name
      this.popupStatus.discription = discription
    }
  }
})
