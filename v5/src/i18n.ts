import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resources from 'src/assets/i18n.yaml'

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh-TW',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

export const t = i18n.t.bind(i18n)
