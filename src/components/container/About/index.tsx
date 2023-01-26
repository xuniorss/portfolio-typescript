import { getDownloadURL, ref } from 'firebase/storage'
import { motion } from 'framer-motion'
import { useState } from 'react'
import portfolio2 from '../../../assets/portfolio2.jpeg'
import { useAge } from '../../../hooks/useAge'
import storage from '../../../services/api/firebase'
import { bios } from '../../../utils/about'
import './about.scss'

export default function About() {
   const [download, setDownload] = useState('')
   const { age } = useAge()

   const getResume = async () => {
      getDownloadURL(ref(storage, 'curriculoGilberto.pdf')).then((url) => {
         setDownload(url)
      })
   }

   return (
      <div className="container" id="about">
         <motion.div
            className="title"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
         >
            <span>Quem sou eu ?</span>
            <h1>Sobre mim</h1>
         </motion.div>
         <div className="about_container">
            <motion.div
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [-250, 0], opacity: 1 }}
               transition={{ duration: 1 }}
               className="about_left"
            >
               <motion.img
                  src={portfolio2}
                  whileHover={{ y: -48, x: -55 }}
                  transition={{ duration: 0.3 }}
               />
            </motion.div>
            <motion.div
               className="about_right"
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [250, 0], opacity: 1 }}
               transition={{ duration: 1 }}
            >
               <p>
                  Sou um desenvolvedor fullstack com {age} anos de idade, especializado nas
                  linguagens de programação ReactJs, NextJs, React-Native, NodeJs, AdonisJs e
                  TypeScript. Sempre busco evoluir minhas habilidades e conhecimentos na
                  programação, trabalhando em projetos desafiantes e buscando soluções inovadoras
                  para problemas complexos. Além disso, sou uma pessoa dedicada e apaixonada pelo
                  que faço, sempre buscando aprender e evoluir continuamente.
               </p>

               {bios.map((bio) => {
                  const Icon = bio.icon
                  return (
                     <div className="bio" key={bio.id}>
                        <span className="bioKey">
                           {<Icon />} {bio.key}
                        </span>
                        <span className="bioValue">{bio.value}</span>
                     </div>
                  )
               })}
               <motion.a
                  href={download}
                  // download="curriculoGilberto.pdf"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  onClick={getResume}
                  target="_blank"
               >
                  Ver Currículo
               </motion.a>
            </motion.div>
         </div>
      </div>
   )
}
