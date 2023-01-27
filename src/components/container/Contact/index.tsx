import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import '../../../../public/locales/i18n'
import { contacts } from '../../../utils/contact'
import { SocialIcons } from '../../SocialIcons'
import './contact.scss'

export default function Contact() {
   const { t } = useTranslation('contact')

   return (
      <div className="container" id="contact">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="title"
         >
            <span>{t('title')}</span>
            <h1>{t('description')}</h1>
         </motion.div>
         <div className="contact_form">
            <motion.div
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [-150, 0], opacity: 1 }}
               transition={{ duration: 1 }}
               className="contact_left_container"
            >
               <h3>{t('text-label')}</h3>
               <p className="contact_text">{t('text')}</p>
               {contacts.map((contact) => {
                  let Icon = contact.icon
                  return (
                     <div className="contact_left" key={contact.id}>
                        <div className="icon">{<Icon />}</div>
                        <p>{contact.id === 1 ? `${t('contac.city')}` : contact.infoText}</p>
                     </div>
                  )
               })}

               <div className="social_icons">
                  <SocialIcons />
               </div>
            </motion.div>
            <motion.div
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [150, 0], opacity: 1 }}
               transition={{ duration: 1 }}
               className="contact_right"
            >
               <h3>{t('form.text')}</h3>
               <div className="row">
                  <input type="text" placeholder={`${t('form.name')}`} />
                  <input type="text" placeholder={`${t('form.sobrenome')}`} />
               </div>
               <div className="row">
                  <input type="text" placeholder={`${t('form.number-contact')}`} />
                  <input type="email" placeholder={`${t('form.email')}`} />
               </div>
               <div className="row">
                  <textarea placeholder={`${t('form.message')}`}></textarea>
               </div>
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="btn"
               >
                  <a href="#">{t('form.button.label')}</a>
               </motion.div>
            </motion.div>
         </div>
      </div>
   )
}
