<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <ul class="flex items-center justify-center">
          <li class="font-medium text-sm leading-3 pt-4 pb-4 pl-3 pr-3">
            <RouterLink to="/">⌂</RouterLink>
          </li>
          <li class="font-medium text-sm leading-3 pt-4 pb-4 pl-3 pr-3">
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li class="font-medium text-sm leading-3 pt-4 pb-4 pl-3 pr-3">
            <RouterLink to="/food">Food</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="ml-auto mr-auto max-w-7xl">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <KeepAlive>
          <Suspense>
            <!-- main content -->
            <component :is="Component"></component>
            <!-- loading state -->
            <template #fallback> Loading... </template>
          </Suspense>
        </KeepAlive>
      </template>
    </RouterView>
  </main>
</template>
