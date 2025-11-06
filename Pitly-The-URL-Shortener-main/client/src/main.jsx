import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css'
import App from './App.jsx'
import { Auth } from './pages';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: "http://localhost:5173/app"
        }}
      >
        <Routes>
          <Route index element={<Auth />} />
          <Route path='/app/*' element={<App />} />
        </Routes>
      </Auth0Provider>
    </Router>
  </StrictMode>
)
