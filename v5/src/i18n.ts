import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import YAML from 'yaml'


const file = await(await fetch('src/assets/i18n.yaml')).text()
const resources = YAML.parse(file)
console.log('i18n resources:', resources)

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
