
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Dashboard from './components/Dashboard'

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App
