import i18n from 'i18next'
// import Backend from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationEnglish from './translation/english/translation.json'
import translationRussian from './translation/russian/translation.json'
import i18next from 'i18next'

const resources = {
  en: {
    translation: translationEnglish
  },
  ru: {
    translation: translationRussian
  }
}
i18next
.use(initReactI18next)
.init({
  resources,
  lng: "ru"
})

export default i18next
// i18n
//   // Подключение бэкенда i18next
//   .use(Backend)
//   // Автоматическое определение языка 
//   .use(LanguageDetector)
//   // модуль инициализации
//   .use (initReactI18next)
//   .init({
//     // Стандартный язык
//     fallbackLng: 'en',
//     debug: true,
//     // Распознавание и кэширование языковых кук
//     detection: {
//       order: ['queryString', 'cookie'],
//       cache: ['cookie']
//     },
//     interpolation: {
//       escapeValue: false
//     }
//   })

// export default i18n;