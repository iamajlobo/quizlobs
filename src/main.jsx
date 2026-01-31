import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import RoleProvider from './context/RoleProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <RoleProvider>
        <App/>
      </RoleProvider>
    </HashRouter>
  </StrictMode>,
)
