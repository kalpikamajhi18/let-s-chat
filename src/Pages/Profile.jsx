import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const Profile = () => {
  const { user } = useOutletContext()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    setUserData(user)
  }, [user])

  const [isedit, setIsedit] = useState(true)

  const handlechange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const handleEdit = () => {
    setIsedit(!isedit)
  }

  const handleCancel = () => {
    setUserData(user)
    setIsedit(true)
  }

  return (
    <div className="min-h-screen w-full bg-[#f8f5f6] px-4 sm:px-6 py-6">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-[#5E2D3F]">
          Profile Settings
        </h2>

        {/* Card */}
        <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-[#eadde1]">

          {/* User Info */}
          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5E2D3F] flex items-center justify-center text-white text-base sm:text-lg font-semibold">
              {userData.name ? userData.name.charAt(0) : "U"}
            </div>

            <div className="truncate">
              <h3 className="text-base sm:text-lg font-semibold text-[#5E2D3F] truncate">
                {userData.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#a78b94]">
                Manage your account
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

            {/* Name */}
            <div>
              <label className="text-xs sm:text-sm text-[#a78b94]">Your Name</label>
              <input
                onChange={handlechange}
                type="text"
                name="name"
                value={userData.name || ""}
                disabled={isedit}
                className="w-full mt-1 px-3 sm:px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] disabled:opacity-70 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs sm:text-sm text-[#a78b94]">Your Email</label>
              <input
                onChange={handlechange}
                type="email"
                name="email"
                value={userData.email || ""}
                disabled={isedit}
                className="w-full mt-1 px-3 sm:px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] disabled:opacity-70 text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs sm:text-sm text-[#a78b94]">Your Phone</label>
              <input
                onChange={handlechange}
                type="number"
                name="phone"
                value={userData.phone || ""}
                disabled={isedit}
                className="w-full mt-1 px-3 sm:px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] disabled:opacity-70 text-sm"
              />
            </div>

            {/* Username */}
            <div>
              <label className="text-xs sm:text-sm text-[#a78b94]">Username</label>
              <input
                onChange={handlechange}
                type="text"
                name="username"
                value={userData.username || ""}
                disabled={isedit}
                placeholder="Enter username..."
                className="w-full mt-1 px-3 sm:px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] disabled:opacity-70 text-sm"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">

            <button
              onClick={handleEdit}
              className="w-full sm:w-auto bg-[#5E2D3F] hover:opacity-90 text-white px-5 py-2.5 rounded-lg transition text-sm"
            >
              {isedit ? 'Edit Profile' : 'Save Changes'}
            </button>

            {!isedit && (
              <button
                onClick={handleCancel}
                className="w-full sm:w-auto bg-[#f3e7eb] hover:bg-[#eadde1] text-[#5E2D3F] px-5 py-2.5 rounded-lg transition text-sm"
              >
                Cancel
              </button>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile