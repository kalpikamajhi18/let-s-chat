import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Chatscreen = () => {

  
  return (
    <div className="h-screen w-full flex flex-col bg-[#020617] text-white">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e293b] bg-[#0f172a]">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://ui-avatars.com/api/?name=Rahul&background=1e293b&color=fff"
            alt="user"
          />
          <div>
            <h2 className="font-semibold">Rahul</h2>
            <p className="text-sm text-green-400">Online</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 text-gray-400">
          <button className="hover:text-white">📞</button>
          <button className="hover:text-white">🎥</button>
          <button className="hover:text-white">⋮</button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {/* Incoming Message */}
        <div className="flex">
          <div className="bg-[#1e293b] px-4 py-2 rounded-xl max-w-xs">
            Hey! How are you?
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex justify-end">
          <div className="bg-blue-600 px-4 py-2 rounded-xl max-w-xs">
            I'm good bro 🔥
          </div>
        </div>

        {/* Incoming */}
        <div className="flex">
          <div className="bg-[#1e293b] px-4 py-2 rounded-xl max-w-xs">
            Working on project?
          </div>
        </div>

      </div>

      {/* Input Section */}
      <div className="p-4 border-t border-[#1e293b] bg-[#0f172a] flex items-center gap-3">
        
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
          Send
        </button>

      </div>

    </div>
  )
}

export default Chatscreen