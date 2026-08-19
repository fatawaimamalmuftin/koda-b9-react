import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Router.jsx'
import { BrowserRouter } from 'react-router'
import UsersProvider from './context/users/UsersProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </UsersProvider>
  </StrictMode>,
)
