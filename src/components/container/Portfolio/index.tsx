import { motion } from 'framer-motion'
import { MouseEvent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiEye, FiGithub } from 'react-icons/fi'
import '../../../../public/locales/i18n'
import { workImagesProps, workNavs } from '../../../models/Portfolio'
import { workImages } from '../../../utils/portfolio'
import './portfolio.scss'

export default function Portfolio() {
   const [active, setActive] = useState(0)
   const [tab, setTab] = useState({ name: 'Todos' })
   const [works, setWorks] = useState<workImagesProps[]>([])
   const { t } = useTranslation('portfolio')

   const activeTab = (e: MouseEvent<HTMLButtonElement>, index: number) => {
      if (e.currentTarget) {
         const target = e.currentTarget
         const context = target.textContent as string

         setTab({ name: context.toLowerCase() })
         setActive(index)
      }
   }

   useEffect(() => {
      if (tab.name === 'Todos' || tab.name === 'todos') {
         setWorks(workImages)
      } else {
         const newWork = workImages.filter((workImage) => {
            return workImage.category.toLowerCase() === tab.name
         })

         setWorks(newWork)
      }
   }, [tab])

   return (
      <div className="container" id="portfolio">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="title"
         >
            <span>{t('title')}</span>
            <h1>{t('description')}</h1>
         </motion.div>
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="buttons"
         >
            {workNavs.map((workNav, index) => {
               return (
                  <button
                     key={index}
                     onClick={(e) => activeTab(e, index)}
                     className={`${active === index ? 'active' : ''}`}
                  >
                     {workNav === 'Todos' ? `${t('buttons.all')}` : workNav}
                  </button>
               )
            })}
         </motion.div>
         <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="workImages"
         >
            {works.map((work) => {
               return (
                  <div className="workImage" key={work.id}>
                     <img src={work.img} alt="workImg" />
                     <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: [0, 1] }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="hoverLayer"
                     >
                        <motion.a
                           href="#"
                           whileInView={{ scale: [0, 1] }}
                           whileHover={{ scale: [1, 1.1] }}
                           transition={{ duration: 0.3 }}
                        >
                           <FiGithub />
                        </motion.a>

                        <motion.a
                           href="#"
                           whileInView={{ scale: [0, 1] }}
                           whileHover={{ scale: [1, 1.1] }}
                           transition={{ duration: 0.3 }}
                        >
                           <FiEye />
                        </motion.a>
                     </motion.div>
                  </div>
               )
            })}
         </motion.div>
         <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="talk"
         >
            <div className="talk_left">
               <h3>
                  {t('talk.label')} <br /> <span>{t('talk.span')}</span>
               </h3>
            </div>
            <motion.div
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.3 }}
               className="talk_right"
            >
               <a href="#contact">{t('talk.button.label')}</a>
            </motion.div>
         </motion.div>
      </div>
   )
}
