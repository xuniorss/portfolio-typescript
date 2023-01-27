import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUS from './en-US/en.json'
import ptBR from './pt-BR/pt.json'

i18n.use(initReactI18next).init({
   compatibilityJSON: 'v3',
   lng: 'ptBR',

   resources: {
      enUS: enUS,
      ptBR: ptBR,
   },
   react: {
      useSuspense: false,
   },
   interpolation: {
      escapeValue: false,
   },
})

export default i18n
