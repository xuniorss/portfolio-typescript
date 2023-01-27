import { LangContext } from './../../contexts/LangContext'
import { useContext } from 'react'

export function useLanguage() {
   const lang = useContext(LangContext)
   return lang
}
