import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Router.jsx'
import { BrowserRouter } from 'react-router'
import UsersProvider from './context/users/UsersProvider.jsx'
import { Provider } from 'react-redux'
import store, {persist} from './Redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <UsersProvider>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </UsersProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
