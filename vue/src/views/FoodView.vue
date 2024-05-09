<script setup lang="ts">
import { useFoodStore } from '@/stores/food'
import { format } from '@formkit/tempo'

const foodStore = useFoodStore()
await foodStore.getFood()
</script>

<template>
  <ul>
    <li v-for="food in foodStore.food" :key="food.uri" class="mb-5 pt-5">
      <article>
        <section>
          <h3>{{ food.title }}</h3>
          <p>{{ food.abstract }}</p>
          <small>{{ food.byline }}</small>
          <time :datetime="food.published_date">
            {{ format(food.published_date, { date: 'long' }) }}
          </time>
        </section>
        <figure>
          <img :src="food.multimedia[2].url" :alt="food.multimedia[2].caption" />
        </figure>
      </article>
    </li>
  </ul>
</template>
