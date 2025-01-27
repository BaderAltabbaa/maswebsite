// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './translations'; // Import your translations

i18n
  .use(initReactI18next) // Passes i18n instance to React
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes the values
    },
  });

export default i18n;
