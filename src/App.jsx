
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { Context } from './main';
import {  useEffect } from 'react';

function App() {

  const {isAuthorized, setIsAuthorized} =  useContext(Context)
  useEffect(() =>{
      const adminAuth = async() =>{
       try {
         const response = await fetch("http://localhost:5000/api/v1/admin/auth/checkAuth", {
           method: "GET",
           credentials: "include"
         });
        const data = await response.json();
        if(data.success){
          setIsAuthorized(true)
        } else {
          setIsAuthorized(false)
        }
       } catch (error) {
        console.log(error)
        setIsAuthorized(false)
       }
      }
        adminAuth();
  }, [setIsAuthorized])

  return (
   <BrowserRouter>
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/login' element={<Login/>}/>
<Route
  path="/dashboard"
  element={isAuthorized ? <Dashboard /> : <Login />}
/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
