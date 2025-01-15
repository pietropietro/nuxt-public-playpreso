// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/tailwind.css' // <-- IMPORTANT! Ensures Tailwind is injected globally
  ],

  compatibilityDate: '2025-01-13'
})