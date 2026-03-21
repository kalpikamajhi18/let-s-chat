import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LuEyeClosed } from "react-icons/lu";

const Login = () => {

let redirect = useNavigate()

  const [login, setLogin] = useState({
    username: "",
    password: ""
  })

  let handlelogin = async () => {
    //  toast.success("login feature")



    let loginData = {
      "email": login.username,
      "password": login.password
    }
    let url = "https://api.skillsvarz.com/api/login"

    let resp = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    console.log(resp)
    let res = await resp.json()
    console.log(res)

    if(resp.status === 200 || resp.status === 201) { 
      localStorage.setItem("user_id", JSON.stringify(res.user._id))
     
      toast.success(res.message)
      setTimeout(()=>{
               redirect("/user")
      },1000)
    } 
    
    else{
        toast.error(res.error)
    }
  

  }


return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">

    {/* Card */}
    <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl w-[350px]">

      {/* Heading */}
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      {/* Username */}
      <div className="mb-4">
        <label htmlFor="username" className="text-sm text-gray-400">
          Username or Email
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username or email..."
          className="w-full mt-1 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(event) => {
            setLogin({ ...login, username: event.target.value });
           
          }}
          
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label htmlFor="password" className="text-sm text-gray-400">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password...  "
          className="w-full mt-1 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(event) => {
            setLogin({ ...login, password: event.target.value });
          }}
         
        />
      </div>

      {/* Button */}
      <button
        onClick={handlelogin}
        className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-2 rounded-lg font-semibold"
      >
        Login
      </button>
     
      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-700" />
        <span className="px-2 text-gray-400 text-sm">OR</span>
        <hr className="flex-grow border-gray-700" />
      </div>

      {/* Register */}
      <p className="text-center text-sm text-gray-400">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Register now
        </Link>
      </p>
    </div>
  </div>
)
}

export default Login