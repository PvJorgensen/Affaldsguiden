import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SupabaseProvider } from './Providers/SupabaseProvider.jsx'
import { AuthProvider } from './Providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <SupabaseProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SupabaseProvider>
    </AuthProvider>
  </StrictMode>,
)
