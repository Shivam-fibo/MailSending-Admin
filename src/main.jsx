import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'
import { useState } from 'react'

export const Context = createContext({isAuthrized: false})

const AppWrapper = () =>{
  const [isAuthorized, setIsAuthorized] = useState("")
    return(
      <Context.Provider value={{isAuthorized, setIsAuthorized}}>
            <App />

      </Context.Provider>
    )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper/>
  </StrictMode>,
)
