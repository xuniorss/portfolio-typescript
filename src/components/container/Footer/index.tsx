import { motion } from 'framer-motion'
import { useAge } from '../../../hooks/useAge'
import { SocialIcons } from '../../SocialIcons'
import './footer.scss'
import { useTranslation } from 'react-i18next'
import '../../../../public/locales/i18n'

export default function Footer() {
   const { currentYear } = useAge()
   const { t } = useTranslation('footer')

   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{
            opacity: 1,
         }}
         transition={{ duration: 1.5 }}
         className="footer"
      >
         <div className="copyright">
            <p>
               Copyright&copy;{currentYear} {t('p')} <span>Gilberto Fortunato</span>
            </p>
         </div>
         <div className="followMe">
            <h4>{t('followMe')}</h4>
            <div className="stick"></div>
            <div className="social_icons">
               <SocialIcons />
            </div>
         </div>
      </motion.div>
   )
}
