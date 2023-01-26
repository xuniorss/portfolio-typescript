import { FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa'

import { ContactProps } from '../../models/Contact'

export const contacts: Array<ContactProps> = [
   {
      id: 1,
      icon: FaMapMarkerAlt,
      infoText: 'Guararapes - SP, Brasil',
   },
   {
      id: 2,
      icon: FaPaperPlane,
      infoText: 'fortunatojunior2020@gmail.com',
   },
   {
      id: 3,
      icon: FaPhoneAlt,
      infoText: '+55 (18) 98111-8890',
   },
]
