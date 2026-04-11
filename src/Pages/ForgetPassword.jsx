import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ForgetPassword = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    otp: "",
    password: "",
    cpassword: ""
  })

  const [step, setStep] = useState(1)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const sendOtp = async () => {
    if (!form.email) return toast.error("Email is required")

    let resp = await fetch("https://api.skillsvarz.com/api/forgot-password", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: form.email })
    })

    let res = await resp.json()

    if (resp.status === 200 || resp.status === 201) {
      toast.success("OTP sent to your email")
      setStep(2)
    } else {
      toast.error(res?.error || "Try again")
    }
  }

  const changePassword = async () => {

    if (form.password !== form.cpassword) {
      return toast.error("Passwords do not match")
    }

    let resp = await fetch("https://api.skillsvarz.com/api/reset-password", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        otp: form.otp,
        newPassword: form.password
      })
    })

    let res = await resp.json()

    if (resp.status === 200 || resp.status === 201) {
      toast.success("Password changed successfully")
      setTimeout(() => navigate("/login"), 1000)
    } else {
      toast.error(res?.error || "Failed to reset password")
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#f8f5f6] flex items-center justify-center px-4 py-6">

      <div className="w-full max-w-md bg-white p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl shadow-sm border border-[#eadde1]">

        {/* Header */}
        <div className="text-center mb-5 md:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#5E2D3F]">
            {step === 1 ? "Forgot Password" : "Reset Your Password"}
          </h2>
          <p className="text-xs sm:text-sm text-[#a78b94] mt-1">
            {step === 1 
              ? "Enter your email to receive an OTP"
              : "Enter OTP and your new password"}
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-5 md:mb-6">
          <div className={`h-1.5 sm:h-2 w-8 sm:w-10 rounded-full ${step >= 1 ? 'bg-[#5E2D3F]' : 'bg-[#eadde1]'}`} />
          <div className={`h-1.5 sm:h-2 w-8 sm:w-10 rounded-full ${step === 2 ? 'bg-[#5E2D3F]' : 'bg-[#eadde1]'}`} />
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">

          {step === 1 && (
            <>
              {/* Email */}
              <div>
                <label className="text-xs sm:text-sm text-[#a78b94]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full mt-1 px-3 sm:px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] text-sm"
                />
              </div>

              <button
                onClick={sendOtp}
                className="mt-3 w-full bg-[#5E2D3F] hover:opacity-90 text-white py-2.5 rounded-lg transition text-sm"
              >
                Send OTP
              </button>
            </>
          )}

          {step === 2 && (
            <>
              {/* OTP */}
              <div>
                <label className="text-xs sm:text-sm text-[#a78b94]">OTP</label>
                <input
                  type="number"
                  name="otp"
                  onChange={handleChange}
                  placeholder="Enter OTP"
                  className="w-full mt-1 px-3 sm:px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-xs sm:text-sm text-[#a78b94]">New Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className="w-full mt-1 px-3 sm:px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] text-sm"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-xs sm:text-sm text-[#a78b94]">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full mt-1 px-3 sm:px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] text-sm"
                />
              </div>

              <button
                onClick={changePassword}
                className="mt-3 w-full bg-[#5E2D3F] hover:opacity-90 text-white py-2.5 rounded-lg transition text-sm"
              >
                Reset Password
              </button>

              {/* Back */}
              <button
                onClick={() => setStep(1)}
                className="text-xs sm:text-sm text-[#a78b94] hover:text-[#5E2D3F] mt-2"
              >
                ← Back to email
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  )
}

export default ForgetPassword