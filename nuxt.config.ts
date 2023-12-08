// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  i18n: {
    // debug: process.env["NODE_ENV"] === "development",
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],
  vue: {
    propsDestructure: true,
    defineModel: true,
  },
  devtools: { enabled: true },
  css: ["normalize.css"],
});
