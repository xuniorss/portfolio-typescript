import { createContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
   LangContextType,
   LangProviderProps,
   SuportedLangs,
   SuportedLangsFormatted,
} from '../models/contexts/Lang'

export const LangContext = createContext({} as LangContextType)

export function LangProvider({ children }: LangProviderProps) {
   const [loading, setLoading] = useState(true)
   const [language, setLanguage] = useState<SuportedLangs>('pt-BR')
   const [langFormatted, setLangFormatted] = useState<SuportedLangsFormatted>('pt-BR')
   const { i18n } = useTranslation()

   useEffect(() => {
      const lang = navigator.language.replace('-', '')
      i18n.changeLanguage(lang)

      // if (i18n.language === navigator.language) {
      //    setLanguage(navigator.language as SuportedLangs)
      //    setLangFormatted(navigator.language.replace('-', '') as SuportedLangsFormatted)
      // }

      setLoading(false)
   }, [navigator.language])

   if (loading) return null

   return (
      <LangContext.Provider value={{ language, langFormatted }}>{children}</LangContext.Provider>
   )
}
