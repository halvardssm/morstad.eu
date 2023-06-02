import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { IS_DEV } from "../variables";

export const supportedLanguages = ["en", "no", "de"];

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnNull: false,
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
    lng: supportedLanguages[0],
    fallbackLng: supportedLanguages,
    debug: IS_DEV,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
