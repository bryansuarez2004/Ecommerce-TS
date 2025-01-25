import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Toaster, ToasterProps } from 'sonner'

const optionsToaster: ToasterProps  = {
  richColors:true,
   visibleToasts: 3,
   position: 'top-right',
   toastOptions:{
    duration:1500,
   
   },
   
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    <Toaster {...optionsToaster} />
  </StrictMode>,
)
