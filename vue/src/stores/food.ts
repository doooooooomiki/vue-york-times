import { shallowRef } from 'vue'
import { defineStore } from 'pinia'
import { ofetch } from 'ofetch'

export const useFoodStore = defineStore('food', () => {
  const food = shallowRef()

  async function getFood() {
    const { results } = await ofetch('/api/food')
    food.value = results
  }

  return { food, getFood }
})
