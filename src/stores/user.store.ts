import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const updateUserInfo = async (): Promise<void> => {}

  return { updateUserInfo }
})
