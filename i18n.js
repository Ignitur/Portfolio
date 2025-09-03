import en from './public/locales/en/common.json';
import ru from './public/locales/ru/common.json';
import hu from './public/locales/hu/common.json';

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
	
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
		debug: true,
    fallbackLng: "en",
    interpolation: {
			escapeValue: false,
    },
		resources: {
			en: { common: en },
			ru: { common: ru },
			hu: { common: hu },
		},
  });

export default i18n;
