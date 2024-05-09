import { shallowRef } from 'vue'
import { defineStore } from 'pinia'
import { ofetch } from 'ofetch'

export const useFoodStore = defineStore('food', () => {
  const food = shallowRef()

  async function getFood() {
    const { results } = await ofetch('/food', {
      baseURL: import.meta.env.VITE_API_BASE_URL
    })
    food.value = results
  }

  return { food, getFood }
})
