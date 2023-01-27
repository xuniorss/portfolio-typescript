import ReactDOM from 'react-dom/client'
import App from './App'
import { LangProvider } from './contexts/LangContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <LangProvider>
      <App />
   </LangProvider>
)
