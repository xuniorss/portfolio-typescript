import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { menuVariants, navLinks, navLinkVariants, socialIcons } from '../../utils/data'

import './navbar.scss'

import { HiMenuAlt4, HiX } from 'react-icons/hi'

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
               {navLinks.map((navlink, index) => {
                  return (
                     <li key={index}>
                        <a href={`#${navlink}`}>{navlink}</a>
                     </li>
                  )
               })}
            </ul>
            <div className="social_icons">
               {socialIcons.map((socialIcon) => {
                  const Icon = socialIcon.icon
                  return (
                     <div key={socialIcon.id}>
                        <a href={socialIcon.url} target="_blank">
                           {<Icon />}
                        </a>
                     </div>
                  )
               })}
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
