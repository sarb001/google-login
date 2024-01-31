import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import dotenv from 'dotenv'; 

dotenv.config();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
    clientId = {import.meta.env.process.env.VITE_DOMAIN}
    domain = {import.meta.env.process.env.VITE_ClientID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
       <App />
    </Auth0Provider>
  </React.StrictMode>,
)
