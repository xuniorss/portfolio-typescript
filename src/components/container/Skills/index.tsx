import { motion } from 'framer-motion'
import { useState } from 'react'
import { experiences, finishes, graduations, icons } from '../../../utils/skills'
import './skills.scss'

export default function Skills() {
   const [active, setActive] = useState(1)

   return (
      <div className="container" id="skills">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="title"
         >
            <span>No que sou especialista ?</span>
            <h1>Habilidades e Experiências</h1>
         </motion.div>
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="select"
         >
            <button onClick={() => setActive(1)} className={active === 1 ? 'active' : ''}>
               Habilidades
            </button>
            <button onClick={() => setActive(2)} className={active === 2 ? 'active' : ''}>
               Experiências
            </button>
            <button onClick={() => setActive(3)} className={active === 3 ? 'active' : ''}>
               Graduções e cursos
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
            {active === 3 &&
               graduations.map((graduation) => {
                  return (
                     <div className="graduations" key={graduation.id}>
                        <span>{graduation.year}</span>
                        <div className="course">
                           <h3>{graduation.course}</h3>
                           <p>{graduation.academy}</p>
                        </div>
                     </div>
                  )
               })}
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="finishes_container"
         >
            {finishes.map((finish) => {
               return (
                  <div className="finishes" key={finish.id}>
                     <div className="number">{finish.number}</div>
                     <h4 className="item_name">{finish.itemName}</h4>
                  </div>
               )
            })}
         </motion.div>
      </div>
   )
}
