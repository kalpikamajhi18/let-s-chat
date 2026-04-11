import React from 'react'
import { useOutletContext } from 'react-router-dom'

const UserDashboard = () => {

  const { user } = useOutletContext()

  return (
    <div className="min-h-screen w-full bg-[#f8f5f6] flex items-center justify-center px-4">

      <div className="w-full max-w-6xl">

        {/* Image Card */}
        <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-md">

          <img
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            src="/talksy.png"
            alt="dashboard"
          />

        </div>

        {/* Optional Welcome Text */}
        <div className="mt-4 sm:mt-6 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#5E2D3F]">
            Welcome{user?.name ? `, ${user.name}` : ''} 👋
          </h2>
          <p className="text-xs sm:text-sm text-[#a78b94] mt-1">
            Start chatting and explore your dashboard
          </p>
        </div>

      </div>

    </div>
  )
}

export default UserDashboard