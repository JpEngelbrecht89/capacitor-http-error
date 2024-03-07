// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    output: {
      publicDir: './www'
    }
  },
  devtools: { enabled: true }
})
