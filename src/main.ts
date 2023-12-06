import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./app.vue";
import { locale } from "./locales";

const app = createApp(App);

app.use(createPinia()).use(locale);

app.mount("#app");
