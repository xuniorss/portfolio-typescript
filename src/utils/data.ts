import { BsMedium } from 'react-icons/bs'
import { FaDribbble, FaInstagram, FaLinkedin } from 'react-icons/fa'

import { IconsProps } from './../models/Navbar/index'

export const navLinks = ['home', 'about', 'skills', 'portfolio', 'contact']

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
