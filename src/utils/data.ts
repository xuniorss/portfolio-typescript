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

import { IconsProps } from './../models/Navbar/index'

export const navLinks = ['Início', 'Sobre', 'Habilidades', 'Portfolio', 'Contato']

export const socialIcons: IconsProps[] = [
   { icon: FaDribbble },
   { icon: FaInstagram },
   { icon: FaLinkedin },
   { icon: BsMedium },
]

export const menuVariants = {
   hidden: { scale: 0 },
   visible: { scale: 50, transition: { type: 'tween', duration: 0.5 } },
}

export const navLinkVariants = {
   hidden: {
      display: 'none',
      opacity: 0,
   },
   visible: {
      opacity: 1,
      y: -30,
      transition: {
         delay: 0.7,
      },
   },
}
