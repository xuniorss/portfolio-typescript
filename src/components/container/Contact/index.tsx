import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import '../../../../public/locales/i18n'
import { SendEmailProps } from '../../../models/Contact'
import { emailApi } from '../../../services/sendEmail'
import { contacts } from '../../../utils/contact'
import { SocialIcons } from '../../SocialIcons'
import './contact.scss'

export default function Contact() {
   const { t } = useTranslation('contact')
   const [loading, setLoading] = useState(false)

   const { handleSubmit, reset, register } = useForm<SendEmailProps>()

   const onSubmit: SubmitHandler<SendEmailProps> = (data) => {
      try {
         setLoading(true)
         emailApi.sandEmail(data).then(() => {
            reset()
            setLoading(false)
         })
      } catch (error) {
         console.log(error)
      }
   }

   console.log(loading)

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
            <form onSubmit={handleSubmit(onSubmit)}>
               <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: [150, 0], opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="contact_right"
               >
                  <h3>{t('form.text')}</h3>
                  <div className="row">
                     <input
                        type="text"
                        autoComplete="off"
                        {...register('name', { required: true })}
                        placeholder={`${t('form.name')}`}
                     />
                     <input
                        type="text"
                        autoComplete="off"
                        {...register('lastName', { required: true })}
                        placeholder={`${t('form.sobrenome')}`}
                     />
                  </div>
                  <div className="row">
                     <input
                        type="text"
                        autoComplete="off"
                        {...register('contactNumber', { required: false })}
                        placeholder={`${t('form.number-contact')}`}
                     />
                     <input
                        type="email"
                        autoComplete="off"
                        {...register('email', { required: true })}
                        placeholder={`${t('form.email')}`}
                     />
                  </div>
                  <div className="row">
                     <textarea
                        {...register('message', { required: true })}
                        placeholder={`${t('form.message')}`}
                     ></textarea>
                  </div>
                  {!loading ? (
                     <div className="btn">
                        <button type="submit">{t('form.button.label')}</button>
                     </div>
                  ) : (
                     <p>Enviando...</p>
                  )}
               </motion.div>
            </form>
         </div>
      </div>
   )
}
