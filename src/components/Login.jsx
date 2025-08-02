import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"


const Login = () => {
    const navigate = useNavigate()
    const [passkey, setPassKey] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(passkey == "Admin#123@PassKeySequrePassword"){
            navigate("/dashboard")
        }
    }
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] animate-fade-in"
  >
    <h2 className="text-2xl font-bold text-white mb-6 text-center tracking-wide">
      🔐 Enter PassKey
    </h2>

    <label htmlFor="passkey" className="block text-white text-sm font-medium mb-2">
      PassKey
    </label>
    <input
      type="text"
      id="passkey"
      value={passkey}
      onChange={(e) => setPassKey(e.target.value)}
      placeholder="Enter your secret passkey"
      className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 mb-6"
    />

    <button
      type="submit"
      className="w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold tracking-wide hover:bg-cyan-600 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-lg"
    >
      🚀 Submit
    </button>
  </form>
</div>

  )
}

export default Login