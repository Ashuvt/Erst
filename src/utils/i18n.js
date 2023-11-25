import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { english } from './languages/english/english';
import { arabic } from './languages/arabic/arabic';
import { hebrew } from './languages/hebrew/hebrew';

const languages = ['en', 'he', 'ar'];


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
         ...english,
        },
      },
      he: {
        translation: {
         ...hebrew,
        },
      },

      ar: {
        translation: {
         ...arabic,
        },
      },
      // Add translations for other languages as needed
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;