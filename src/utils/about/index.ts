import { FaInstagram, FaLinkedin, FaUser } from 'react-icons/fa'
import { BiosProps } from '../../models/About'

export const bios: Array<BiosProps> = [
   {
      id: 1,
      icon: FaUser,
      key: 'Nome',
      value: 'Gilberto Fortunato',
   },
   {
      id: 2,
      icon: FaInstagram,
      key: 'Instagram',
      value: '@xuniorss',
   },
   {
      id: 3,
      icon: FaLinkedin,
      key: 'Linkedin',
      value: 'https://www.linkedin.com/in/gilberto-fortunato-111899201/',
   },
]
