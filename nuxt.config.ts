// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    esbuild: {
      drop: process.env.NODE_ENV !== "development" ? [] : ["debugger", "console"],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n", "@vueuse/nuxt"],
  devtools: process.env.NODE_ENV !== "development" ? {} : { enabled: true },
  vue: {
    propsDestructure: true,
    defineModel: true,
  },
  sourcemap: {
    client: false,
    server: false,
  },
  app: {
    baseURL: "/soulworker-items-viewer/",
  },
  css: ["normalize.css"],
  ssr: false,
});
