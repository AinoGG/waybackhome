import { defineStore } from 'pinia'

interface globalObject {
    location: string,
    time: string,
    weather: 'sunny' | 'rainy' | 'foggy' | 'snowy' | string,
    eventID: string,
    currentText: string,
    title: string

}

export const useGlobalStore = defineStore('auth', {
    state: (): globalObject => {
      return {
        location: 'home',
        time: '7:47',
        weather: 'sunny',
        eventID: 'startGame',
        currentText: '',
        title: ''
      }
    },
  })