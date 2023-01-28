import { IconType } from 'react-icons'

export interface ContactProps {
   id: number
   icon: IconType
   infoText: string
}

export interface SendEmailProps {
   name: string
   lastName: string
   contactNumber?: string
   email: string
   message: string
}
