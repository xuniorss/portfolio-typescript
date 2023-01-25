import { ReactNode } from 'react'
import { BsMedium } from 'react-icons/bs'
import { DiJavascript } from 'react-icons/di'
import {
   FaCss3,
   FaDribbble,
   FaFigma,
   FaHtml5,
   FaInstagram,
   FaLinkedin,
   FaMapMarkerAlt,
   FaNodeJs,
   FaPaperPlane,
   FaPhoneAlt,
   FaReact,
   FaSass,
   FaUser,
} from 'react-icons/fa'
import { IconType } from 'react-icons/lib'
import { SiTypescript } from 'react-icons/si'
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
