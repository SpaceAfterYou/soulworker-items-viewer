import { messages } from "./locale";

export default defineI18nConfig(() => ({
  detectBrowserLanguage: {
    cookieKey: "i18n_cock",
    redirectOn: "root",
    useCookie: true,
  },

  // kr is main kanguage
  fallbackLocale: "ko-KR",

  globalInjection: true,
  legacy: false,
  messages,
}));
