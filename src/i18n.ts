import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

export const languageOrder = ["en"];

i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next);
i18next.init({
  interpolation: {
    escapeValue: false,
  },
  debug: process.env.NODE_ENV !== "production",
  load: "languageOnly",
  fallbackLng: languageOrder,
  nsSeparator: ":::",
  keySeparator: "::",
  returnNull: false,
  returnEmptyString: false,
  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    bindI18nStore: "added removed",
    nsMode: "default",
    transSupportBasicHtmlNodes: true,
  },
  backend: {
    loadPath: "/locales/{{lng}}.json",
  },
});

export default i18next;
