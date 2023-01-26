import './footer.scss'
import { motion } from 'framer-motion'
import { useAge } from '../../../hooks/useAge'
import { socialIcons } from '../../../utils/data'

export default function Footer() {
   const { currentYear } = useAge()

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
               Copyright&copy;{currentYear} Todos os direitos reservados. Feito por{' '}
               <span>Gilberto Fortunato</span>
            </p>
         </div>
         <div className="followMe">
            <h4>Siga-me</h4>
            <div className="stick"></div>
            <div className="social_icons">
               {socialIcons.map((socialIcon, index) => {
                  let Icon = socialIcon.icon
                  return <div key={index}>{<Icon />}</div>
               })}
            </div>
         </div>
      </motion.div>
   )
}
