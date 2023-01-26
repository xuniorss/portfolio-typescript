import About from './components/container/About'
import Contact from './components/container/Contact'
import Home from './components/container/Home'
import Portfolio from './components/container/Portfolio'
import Skills from './components/container/Skills'
import Navbar from './components/Navbar'
import './scss/App.scss'

export default function App() {
   return (
      <div>
         <Navbar />
         <Home />
         <About />
         <Skills />
         <Portfolio />
         <Contact />
      </div>
   )
}
