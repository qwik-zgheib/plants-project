import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_es from './es/translation.json';
import translation_en from './en/translation.json';

void i18n.use(initReactI18next).init({
  lng: 'es',
  debug: true,
  resources: {
    es: {
      translation: translation_es,
    },
    en: {
      translation: translation_en,
    },
  },
});

export default i18n;
