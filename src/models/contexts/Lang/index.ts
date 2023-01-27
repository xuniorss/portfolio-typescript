import { ReactNode } from 'react'

export type LangContextType = {
   language: string
   langFormatted: string
}

export interface LangProviderProps {
   children: ReactNode
}

export type SuportedLangs = 'en-US' | 'pt-BR'
export type SuportedLangsFormatted = 'en-US' | 'pt-BR'
