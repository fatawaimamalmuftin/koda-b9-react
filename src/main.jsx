import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Router.jsx'
import { BrowserRouter } from 'react-router'
import UsersProvider from './context/users/UsersProvider.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <UsersProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </UsersProvider>
    </Provider>
  </StrictMode>,
)
