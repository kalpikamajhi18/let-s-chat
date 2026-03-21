import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { toast } from 'react-toastify'

const Resetpassword = () => {
  const navigate = useNavigate()
  const { user } = useOutletContext()

  const [resetpassword, setResetpassword] = useState({
    password: "",
    cpassword: ""
  })

  const handlepass = (e) => {
    setResetpassword({ ...resetpassword, [e.target.name]: e.target.value })
  }

  const changepassword = async () => {
    if (resetpassword.password === resetpassword.cpassword) {
      let url = "https://api.skillsvarz.com/api/user/" + user._id

      let resp = await fetch(url, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: resetpassword.password })
      })

      if (resp.status === 200 || resp.status === 201) {
        toast.success("Password changed")
        setTimeout(() => {
          navigate("/login")
        }, 1000)
      } else {
        toast.error("Something went wrong")
      }
    } else {
      toast.error("Confirm password does not match")
    }
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-[#020617] text-white">

      <div className="w-full max-w-md bg-[#0f172a] p-6 rounded-2xl shadow-lg border border-[#1e293b]">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Reset Password 🔒
        </h2>

        {/* Form */}
        <div className="flex flex-col gap-4">

          {/* Password */}
          <div>
            <label className="text-sm text-gray-400">New Password</label>
            <input
              onChange={handlepass}
              type="password"
              name="password"
              placeholder="Enter new password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-400">Confirm Password</label>
            <input
              onChange={handlepass}
              type="password"
              name="cpassword"
              placeholder="Confirm password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            onClick={changepassword}
            className="mt-4 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-all"
          >
            Change Password
          </button>

        </div>

      </div>

    </div>
  )
}

export default Resetpassword