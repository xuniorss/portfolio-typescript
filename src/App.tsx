import About from './components/container/About'
import Home from './components/container/Home'
import Navbar from './components/Navbar'
import './scss/App.scss'

export default function App() {
   return (
      <div>
         <Navbar />
         <Home />
         <About />
      </div>
   )
}
