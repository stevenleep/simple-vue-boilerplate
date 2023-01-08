import { App } from "vue";
import { createI18n } from "vue-i18n";
import zhCN from "./language/zh-cn";
import enUS from "./language/en-us";

export const i18n = createI18n({
  locale: zhCN.name,
  fallbackLocale: enUS.name,
  messages: {
    [zhCN.name]: zhCN.message,
    [enUS.name]: enUS.message,
  },
});
export function setupLocales(app: App<Element>) {
  app.use(i18n);
}

export function setLanguage() {
  i18n.global.locale = i18n.global.locale === zhCN.name ? enUS.name : zhCN.name;
}
