import { createI18n } from "vue-i18n";

import { messages } from "./messages";

export const locale = createI18n({
  locale: "en",
  fallbackLocale: "kr",
  messages,
  legacy: false,
  globalInjection: true,
});
