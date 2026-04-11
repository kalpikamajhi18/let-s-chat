import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUserAlt, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

const Signup = () => {

let redirect = useNavigate()

const [signup, setSignup] = useState({
  uname: "",
  uemail: "",
  umobile: "",
  pass: "",
  cpass: ""
})

let handleChange = (e) => {
  setSignup({ ...signup, [e.target.name]: e.target.value })
}

let handlesignup = async () => {

  if(signup.pass !== signup.cpass){
    return toast.error("Passwords do not match")
  }

  let newdata = {
    name: signup.uname,
    email: signup.uemail,
    password: signup.pass,
    phone: signup.umobile
  }

  let resp = await fetch("https://api.skillsvarz.com/api/users", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newdata)
  })

  let res = await resp.json()

  if(resp.status === 200 || resp.status === 201){
    toast.success("Registration successful")
    setTimeout(()=>{
      redirect("/login")
    },1000)
  } else {
    toast.error("Try again")
  }
}

return (
  <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#dac0c9] to-[#dbabbd]">

    {/* Main Card */}
    <div className="w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

      {/* LEFT SIDE (hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#5E2D3F] to-[#a15c74] flex-col justify-center items-center text-white relative p-6">

        <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-center">
          Join Us
        </h2>
        <p className="text-sm opacity-80 text-center">
          Create your account to get started
        </p>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-white opacity-10 rounded-t-full"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-10 py-8">

        <h2 className="text-xl sm:text-2xl font-bold text-[#5E2D3F] mb-5 text-center">
          Sign Up
        </h2>

        {/* Name */}
        <div className="mb-3 flex items-center border-b border-gray-300">
          <FaUserAlt className="text-[#5E2D3F] mr-2 text-sm" />
          <input
            name="uname"
            type="text"
            placeholder="Full Name"
            className="w-full p-2 text-sm focus:outline-none"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-3 flex items-center border-b border-gray-300">
          <FaEnvelope className="text-[#5E2D3F] mr-2 text-sm" />
          <input
            name="uemail"
            type="email"
            placeholder="Email"
            className="w-full p-2 text-sm focus:outline-none"
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="mb-3 flex items-center border-b border-gray-300">
          <FaPhone className="text-[#5E2D3F] mr-2 text-sm" />
          <input
            name="umobile"
            type="number"
            placeholder="Phone Number"
            className="w-full p-2 text-sm focus:outline-none"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="mb-3 flex items-center border-b border-gray-300">
          <FaLock className="text-[#5E2D3F] mr-2 text-sm" />
          <input
            name="pass"
            type="password"
            placeholder="Password"
            className="w-full p-2 text-sm focus:outline-none"
            onChange={handleChange}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-3 flex items-center border-b border-gray-300">
          <FaLock className="text-[#5E2D3F] mr-2 text-sm" />
          <input
            name="cpass"
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 text-sm focus:outline-none"
            onChange={handleChange}
          />
        </div>

        {/* Button */}
        <button
          onClick={handlesignup}
          className="w-full bg-[#5E2D3F] hover:bg-[#4a2332] text-white py-2.5 rounded-full transition-all duration-300 shadow-md mt-3 text-sm"
        >
          REGISTER
        </button>

        {/* Login Link */}
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link 
            to="/login" 
            className="text-[#5E2D3F] font-medium hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  </div>
)
}

export default Signup