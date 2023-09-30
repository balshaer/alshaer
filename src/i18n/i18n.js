import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./languages/en.json";
import arTranslation from "./languages/ar.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
