import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="666510159950-vg1d7gvu3415ln9a43h9nitmek5ud85a.apps.googleusercontent.com"> 
    <App /> 
  </GoogleOAuthProvider>
)
