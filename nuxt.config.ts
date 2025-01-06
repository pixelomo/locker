import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    strict: true
  },
  webpack: {
    // Enable HMR
    hotMiddleware: {
      client: {
        overlay: true
      }
    }
  }
})