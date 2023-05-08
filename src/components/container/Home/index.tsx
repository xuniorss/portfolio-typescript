import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import portfolio from '../../../assets/portfolio.jpg'
import { moveVariants } from '../../../utils/home'
import { TypewriterComponent } from '../../Typewriter'

import '../../../../public/locales/i18n'
import './home.scss'

export default function Home() {
   const { t } = useTranslation('home')

   return (
      <motion.div
         className="container"
         id="home"
         initial={{ y: -15, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 2, delay: 0.5 }}
      >
         <div className="profile">
            <img src={portfolio} alt="portfolio" />
         </div>
         <div className="profile_text">
            <h3 className="name">
               {t('title')} <span>Gilberto Fortunato</span>
            </h3>
            <span className="job">Engenheiro de Software</span>
            <span className="text">
               <TypewriterComponent text={t('slogan')} />
            </span>
            <motion.a
               href="#contact"
               whileHover={{ scale: 1.1 }}
               variants={moveVariants}
               animate="animation"
            >
               {t('button.label')}
            </motion.a>
            <div className="web">Fullstack Developer</div>
            <div className="node">NodeJS + AdonisJS</div>
            <div className="language">ReactJS | NextJS | React-Native</div>
         </div>
      </motion.div>
   )
}
