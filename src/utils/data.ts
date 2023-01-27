import { BsMedium } from 'react-icons/bs'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'

import { IconsProps } from './../models/Navbar/index'

export const navLinks = ['home', 'about', 'skills', 'portfolio', 'contact']

export const socialIcons: IconsProps[] = [
   { id: 1, icon: GrGithub, url: 'https://github.com/xuniorss' },
   { id: 2, icon: FaInstagram, url: 'https://instagram.com/xuniorss?igshid=YmMyMTA2M2Y=' },
   { id: 3, icon: FaLinkedin, url: 'https://www.linkedin.com/in/gilberto-fortunato-111899201/' },
   // { id: 4, icon: BsMedium, url: '#' },
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
