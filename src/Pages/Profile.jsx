import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const Profile = () => {
     const {user} = useOutletContext()
    const [userData, setUserData] = useState({})
    useEffect(()=>{
           setUserData(user)
    },[user])

    const [isedit, setIsedit] = useState(true)

    let handlechange = (event)=>{
      setUserData({...userData, [event.target.name]: event.target.value})
    }
    let handleEdit = ()=>{
      isedit? setIsedit(false): setIsedit(true)
    }

    let handleCancel = ()=>{
      setUserData(user)
      setIsedit(true)
    }
  return (
   <div className="h-full w-full flex items-center justify-center bg-[#020617] text-white">

      <div className="w-full max-w-md bg-[#0f172a] p-6 rounded-2xl shadow-lg border border-[#1e293b]">

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Profile Settings
        </h2>

        {/* Form */}
        <div className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-400">Your Name</label>
            <input
              onChange={handlechange}
              type="text"
              name="name"
              value={userData.name}
              disabled={isedit}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Your Email</label>
            <input
              onChange={handlechange}
              type="email"
              name="email"
              value={userData.email}
              disabled={isedit}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-400">Your Phone</label>
            <input
              onChange={handlechange}
              type="number"
              name="phone"
              value={userData.phone}
              disabled={isedit}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-sm text-gray-400">Username</label>
            <input
              onChange={handlechange}
              type="text"
              name="username"
              value={userData.username}
              disabled={isedit}
              placeholder="enter your username..."
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleEdit}
              className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-all"
            >
              {isedit ? 'Edit Profile' : 'Save Changes'}
            </button>

            {!isedit && (
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-600 hover:bg-gray-700 py-2 rounded-lg transition-all"
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