// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
  ],
  vue: {
    propsDestructure: true,
    defineModel: true,
  },
  devtools: { enabled: true },
  css: ["normalize.css"],
});
