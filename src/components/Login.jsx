import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtP] = useState("")
  const [verifyState, setVerifyState] = useState(false)
const handleSubmitlogin = async(e) =>{
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/api/v1/admin/auth/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    console.log("Response:", data);
    if(data.success){
      setVerifyState(true)
    }
  } catch (error) {
    console.error("Error:", error);
  }
}


  const handleSubmitOTPVerification = async(e) =>{
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/v1/admin/auth/verifyEmail",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, otp})
      })
      const data = await response.json()
      console.log("Response", data)
    } catch (error) {
          console.error("Error:", error);

    }
  }
  return (
    <div>
      <div className='flex flex-col max-w-sm  border'>
        <label>Login</label>
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' onClick={handleSubmitlogin}>Submit</button>
      </div>


      {verifyState && (
        <div>
        <label>OTP Verification</label>
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <labe>OTP</labe>
        <input type="number" placeholder='OTP' value={otp} onChange={(e) => setOtP(e.target.value)} />
        <button type='submit' onClick={handleSubmitOTPVerification}>Submit</button>
      </div>
      )}
    </div>
  )
}

export default Login