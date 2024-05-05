<script setup lang="ts">
import { useFoodStore } from '@/stores/food'
import { onMounted } from 'vue'

const foodStore = useFoodStore()

onMounted(async () => {
  await foodStore.getFood()
})
</script>

<template>
  <div>
    <h1>This is an food page</h1>
    <ul>
      <li v-for="food in foodStore.food" :key="food.uri">{{ food.title }}</li>
    </ul>
  </div>
</template>
