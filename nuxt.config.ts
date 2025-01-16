// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],

  css: [
    '~/assets/css/tailwind.css' // <-- IMPORTANT! Ensures Tailwind is injected globally
  ],

  site: { 
    url: 'https://playpreso.com', 
    name: 'PlayPreso – Fast FantaCalcio' 
  },

  compatibilityDate: '2025-01-13'
})