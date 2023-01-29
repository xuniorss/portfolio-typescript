import { motion } from 'framer-motion'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { SendEmailProps } from '../../../models/Contact'
import { emailApi } from '../../../services/sendEmail'
import { contacts } from '../../../utils/contact'
import { SocialIcons } from '../../SocialIcons'

import '../../../../public/locales/i18n'
import './contact.scss'

export default function Contact() {
   const { t } = useTranslation('contact')
   const [loading, setLoading] = useState(false)

   const { handleSubmit, reset, register } = useForm<SendEmailProps>()

   const onSubmit: SubmitHandler<SendEmailProps> = async (data) => {
      try {
         setLoading(true)
         await toast.promise(
            emailApi.sandEmail(data).then(() => {
               reset()
               setLoading(false)
            }),
            {
               pending: 'Enviando...✈️',
               success: 'Mensagem enviada, obrigado! 👌',
               error: 'Algo deu errado. 🤯',
            }
         )
      } catch (error) {
         console.log(error)
      }
   }

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
                  transition={{ duration: loading ? 0.2 : 1 }}
                  className="contact_right"
                  animate={{ opacity: loading ? 0 : 1, x: loading ? -50 : 0 }}
               >
                  <h3>{t('form.text')}</h3>
                  <div className="row">
                     <input
                        type="text"
                        autoComplete="off"
                        disabled={loading}
                        {...register('name', { required: true })}
                        placeholder={`${t('form.name')}`}
                     />
                     <input
                        type="text"
                        autoComplete="off"
                        disabled={loading}
                        {...register('lastName', { required: true })}
                        placeholder={`${t('form.sobrenome')}`}
                     />
                  </div>
                  <div className="row">
                     <input
                        type="text"
                        autoComplete="off"
                        disabled={loading}
                        {...register('contactNumber', { required: false })}
                        placeholder={`${t('form.number-contact')}`}
                     />
                     <input
                        type="email"
                        autoComplete="off"
                        disabled={loading}
                        {...register('email', { required: true })}
                        placeholder={`${t('form.email')}`}
                     />
                  </div>
                  <div className="row">
                     <textarea
                        disabled={loading}
                        {...register('message', { required: true })}
                        placeholder={`${t('form.message')}`}
                     ></textarea>
                  </div>

                  <div className="btn">
                     <motion.button
                        type="submit"
                        hidden={loading}
                        whileHover={{ scale: [null, 1.3, 1.2] }}
                        transition={{ duration: 0.3 }}
                     >
                        {t('form.button.label')}
                     </motion.button>
                  </div>
               </motion.div>
            </form>
         </div>
      </div>
   )
}
