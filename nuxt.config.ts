import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],

  ui: {
    fonts: false,
  },
});
