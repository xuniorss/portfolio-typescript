import { getDownloadURL, ref } from 'firebase/storage'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import portfolio2 from '../../../assets/portfolio2.jpeg'
import { useAge } from '../../../hooks/useAge'
import storage from '../../../services/api/firebase'
import { bios } from '../../../utils/about'

import '../../../../public/locales/i18n'
import './about.scss'

export default function About() {
   const [download, setDownload] = useState('')
   const { age } = useAge()
   const { t } = useTranslation('about')

   useEffect(() => {
      getDownloadURL(ref(storage, 'curriculoGilberto.pdf')).then((url) => {
         setDownload(url)
      })
   }, [])

   return (
      <div className="container" id="about">
         <motion.div
            className="title"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
         >
            <span>{t('title')}</span>
            <h1>{t('description')}</h1>
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
                  {t('text1')} {age} {t('text2')}{' '}
               </p>

               {bios.map((bio) => {
                  const Icon = bio.icon
                  return (
                     <div className="bio" key={bio.id}>
                        <span className="bioKey">
                           {<Icon />} {bio.key === 'Nome' ? `${t('label-name')}` : bio.key}
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
                  target="_blank"
               >
                  {t('button.label')}
               </motion.a>
            </motion.div>
         </div>
      </div>
   )
}
