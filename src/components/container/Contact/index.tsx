import './contact.scss'
import { motion } from 'framer-motion'
import { contacts } from '../../../utils/contact'
import { socialIcons } from '../../../utils/data'

export default function Contact() {
   return (
      <div className="container" id="contact">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="title"
         >
            <span>Entrar em contato</span>
            <h1>Contate-me</h1>
         </motion.div>
         <div className="contact_form">
            <motion.div
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [-150, 0], opacity: 1 }}
               transition={{ duration: 1 }}
               className="contact_left_container"
            >
               <h3>Apenas Diga Oi</h3>
               <p className="contact_text">
                  Olá! Meu nome é Gilberto Fortunato e sou desenvolvedor de software. Adoro
                  trabalhar com tecnologia e sempre busco me atualizar e aprender novas habilidades.
                  Se você está procurando por alguém para ajudar em seu projeto ou simplesmente quer
                  conversar sobre tecnologia, eu adoraria conversar com você. Entre em contato
                  comigo pelo meu e-mail ou redes sociais. Vamos bater um papo!
               </p>
               {contacts.map((contact) => {
                  let Icon = contact.icon
                  return (
                     <div className="contact_left" key={contact.id}>
                        <div className="icon">{<Icon />}</div>
                        <p>{contact.infoText}</p>
                     </div>
                  )
               })}

               <div className="social_icons">
                  {socialIcons.map((socialIcon, index) => {
                     let Icon = socialIcon.icon
                     return <div key={index}>{<Icon />}</div>
                  })}
               </div>
            </motion.div>
            <motion.div
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [150, 0], opacity: 1 }}
               transition={{ duration: 1 }}
               className="contact_right"
            >
               <h3>Entrar em contato</h3>
               <div className="row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last name" />
               </div>
               <div className="row">
                  <input type="text" placeholder="Phone" />
                  <input type="email" placeholder="Email" />
               </div>
               <div className="row">
                  <textarea placeholder="message"></textarea>
               </div>
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="btn"
               >
                  <a href="#">Enviar</a>
               </motion.div>
            </motion.div>
         </div>
      </div>
   )
}
