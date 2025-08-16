import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [verifyState, setVerifyState] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitLogin = async(e) => {
    e.preventDefault();
    setIsLoading(true)
    
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
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitOTPVerification = async(e) => {
    e.preventDefault();
    setIsLoading(true)
    
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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative">
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-gray-300 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gray-200 rotate-12"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gray-300 rotate-45"></div>
        <div className="absolute top-40 right-1/3 w-20 h-20 border-2 border-gray-200 rounded-full"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main container */}
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg">
            
          {/* Header section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {verifyState ? 'Verify Access' : 'Admin Portal'}
            </h1>
            <p className="text-gray-600 text-sm">
              {verifyState ? 'Enter the verification code sent to your email' : 'Secure authentication required'}
            </p>
          </div>

          {/* Login Form */}
          {!verifyState && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-400 transition-all duration-300 peer"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-700">
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="password"
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-400 transition-all duration-300 peer"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-700">
                    Password
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmitLogin}
                disabled={isLoading}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Authenticating...</span>
                  </div>
                ) : (
                  'Authenticate'
                )}
              </button>
            </div>
          )}

          {/* OTP Verification Form */}
          {verifyState && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-400 transition-all duration-300 peer"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-700">
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    placeholder=" "
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength="6"
                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-400 transition-all duration-300 peer tracking-widest text-center text-lg font-mono"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-700">
                    Verification Code
                  </label>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setVerifyState(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmitOTPVerification}
                  disabled={isLoading}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    'Verify'
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-500 text-xs">
              Secured by advanced encryption protocols
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login