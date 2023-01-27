import { motion } from 'framer-motion'
import { useState } from 'react'
import { experiences, finishes, graduations, icons } from '../../../utils/skills'
import './skills.scss'
import { useTranslation } from 'react-i18next'
import '../../../../public/locales/i18n'
import { GraduationsComponent } from '../../Skills/Graduations'
import { FinishesComponent } from '../../Skills/Finishes'

export default function Skills() {
   const [active, setActive] = useState(1)
   const { t } = useTranslation('skills')

   return (
      <div className="container" id="skills">
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
            className="select"
         >
            <button onClick={() => setActive(1)} className={active === 1 ? 'active' : ''}>
               {t('buttons.btn1')}
            </button>
            <button onClick={() => setActive(2)} className={active === 2 ? 'active' : ''}>
               {t('buttons.btn2')}
            </button>
            <button onClick={() => setActive(3)} className={active === 3 ? 'active' : ''}>
               {t('buttons.btn3')}
            </button>
         </motion.div>
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="skills"
         >
            {active === 1 &&
               icons.map((icon, index) => {
                  const Icon = icon.icon
                  return (
                     <div key={index} className="tools">
                        {<Icon />}
                     </div>
                  )
               })}
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="experiencs"
         >
            {active === 2 &&
               experiences.map((experience) => {
                  return (
                     <div className="experience" key={experience.id}>
                        <span>{experience.year}</span>
                        <div className="position">
                           <h3>{experience.position}</h3>
                           <p>{experience.company}</p>
                        </div>
                     </div>
                  )
               })}
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="graduation"
         >
            {active === 3 && <GraduationsComponent />}
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="finishes_container"
         >
            <FinishesComponent />
         </motion.div>
      </div>
   )
}
