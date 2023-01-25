import './home.scss'
import { motion } from 'framer-motion'
import portfolio from '../../../assets/portfolio.jpg'
import { moveVariants } from '../../../utils/home'

export default function Home() {
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
               Olá, Eu sou o <span>Gilberto Fortunato</span>
            </h3>
            <span className="job">Fullstack Developer</span>
            <span className="text">Transformando ideias em realidade, programando o futuro!</span>
            <motion.a
               href="#contact"
               whileHover={{ scale: 1.1 }}
               variants={moveVariants}
               animate="animation"
            >
               conecte-se comigo
            </motion.a>
            <div className="web">Fullstack Developer</div>
            <div className="node">NodeJS + AdonisJS</div>
            <div className="language">ReactJS | NextJS | React-Native</div>
         </div>
      </motion.div>
   )
}
