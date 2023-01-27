import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

import { menuVariants, navLinks, navLinkVariants } from '../../utils/data'
import { SocialIcons } from '../SocialIcons'
import { ChangeLanguage } from './Language/Button'
import { NavLinksComponent } from './NavLinks'

import './navbar.scss'

export default function Navbar() {
   const [scroll, setScroll] = useState(false)
   const [toggle, setToggle] = useState(false)

   useEffect(() => {
      window.addEventListener('scroll', () => {
         setScroll(window.scrollY > 20)
      })
   }, [])

   return (
      <motion.div
         initial={{ y: -25 }}
         animate={{ y: -5 }}
         transition={{ duration: 0.5 }}
         className={scroll ? 'header active' : 'header'}
      >
         <div className="Nav_container">
            <div className="logo">
               <h3>GF</h3>
            </div>
            <ul className="nav_links">
               <NavLinksComponent />
            </ul>
            <div className="social_icons">
               <SocialIcons />
               {/* <ChangeLanguage /> */}
            </div>
            <div className="menu">
               <HiMenuAlt4 onClick={() => setToggle(true)} />
            </div>
            <motion.div
               className="closeMenu"
               variants={menuVariants}
               initial="hidden"
               animate={toggle ? 'visible' : 'hidden'}
            ></motion.div>

            <motion.div
               className="menuX"
               variants={navLinkVariants}
               animate={toggle ? 'visible' : 'hidden'}
            >
               <HiX onClick={() => setToggle(false)} />
               {navLinks.map((navLink, index) => {
                  return (
                     <li key={index}>
                        <a href={`#${navLink}`} onClick={() => setToggle(false)}>
                           {navLink}
                        </a>
                     </li>
                  )
               })}
            </motion.div>
         </div>
      </motion.div>
   )
}
