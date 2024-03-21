import { defineStore } from 'pinia'
import type Auth from '@/types/authTypes'



export const useAuthStore = defineStore('auth', {
  state: (): Auth => {
    return {
      auth: false,
      emailForm:'',
      passForm:'',
      isAuth: localStorage.getItem('isAuth')
    }
  },
})



