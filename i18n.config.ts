import { messages } from "./locale";

export default defineI18nConfig(() => ({
  detectBrowserLanguage: {
    cookieKey: "i18n_cock",
    redirectOn: "root",
    useCookie: true,
  },
  fallbackLocale: "en-US",
  globalInjection: true,
  legacy: false,
  // locale: "en",
  // @ts-ignore
  messages,
}));
