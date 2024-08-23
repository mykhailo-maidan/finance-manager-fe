import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-arhoc8rwvvvponrx.us.auth0.com"
    clientId="LsDBvv7FwcDoaZ6JOLvrdLZ3f0zG3s2q"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App/>
  </Auth0Provider>
)
