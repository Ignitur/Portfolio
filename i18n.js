import en from './src/locales/en/common.json';
import ru from './src/locales/ru/common.json';
import hu from './src/locales/hu/common.json';

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, Translation } from "react-i18next";
	
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
		debug: true,
    fallbackLng: "ru",
    interpolation: {
			escapeValue: false,
    },
		resources: {
			en: { translation: en },
			ru: { translation: ru },
			hu: { translation: hu },
		},
  });

export default i18n;
