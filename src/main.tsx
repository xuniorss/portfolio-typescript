import ReactDOM from 'react-dom/client'
import { Flip, ToastContainer } from 'react-toastify'

import App from './App'
import { LangProvider } from './contexts/LangContext'

import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <LangProvider>
      <App />
      <ToastContainer
         position="top-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="dark"
         transition={Flip}
      />
   </LangProvider>
)
