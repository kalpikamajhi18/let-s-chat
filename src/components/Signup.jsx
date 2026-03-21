import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {
   const[signup,setSignup]=useState({
      uname :" ",
      uemail :" ",
      umobile :" ",
      pass :" ",
      cpass :" "
    })
    let handleChange=(event)=>{
       setSignup({...signup, [event.target.name] : event.target.value})
    }

    let handlesignup = async()=>{
      
      let newdata = {
             "name":signup.uname, 
              "email":signup.uemail, 
               "password":signup.pass,
                "phone":signup.umobile   
      }
      let url = "https://api.skillsvarz.com/api/users"

      let resp = await fetch(url,{        
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(newdata)
      })
      console.log(resp)
      let res = await resp.json()
      console.log(res)

      if(resp.status===200 || resp.status===201)
       {
         toast.success("Registration successfull")

       }   
       else
         {  toast.error("Try again")}
      
    }
  return (
   
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      
      {/* Card */}
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl w-[380px]">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        {/* Name */}
        <div className="mb-3">
          <label htmlFor="uname" className="text-sm text-gray-400">
            Your Name
          </label>
          <input
            onChange={handleChange}
            name="uname"
            type="text"
            id="uname"
            placeholder="Enter your name"
            className="w-full mt-1 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="uemail" className="text-sm text-gray-400">
            Your Email
          </label>
          <input
            onChange={handleChange}
            name="uemail"
            type="email"
            id="uemail"
            placeholder="Enter your email"
            className="w-full mt-1 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label htmlFor="umobile" className="text-sm text-gray-400">
            Phone Number
          </label>
          <input
            onChange={handleChange}
            name="umobile"
            type="number"
            id="umobile"
            placeholder="Enter your phone number"
            className="w-full mt-1 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="pass" className="text-sm text-gray-400">
            Password
          </label>
          <input
            onChange={handleChange}
            name="pass"
            type="password"
            id="pass"
            placeholder="Enter your password"
            className="w-full mt-1 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="cpass" className="text-sm text-gray-400">
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            name="cpass"
            type="password"
            id="cpass"
            placeholder="Confirm your password"
            className="w-full mt-1 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handlesignup}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-2 rounded-lg font-semibold"
        >
          Register Now
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup