import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { StateProvider } from './utils/StateProvider'
import reducer, { initialState } from './utils/reducer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
)
