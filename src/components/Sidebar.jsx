import React, { useState } from 'react'
import Recentchatbox from './Recentchatbox'
import { FiSettings } from "react-icons/fi";
import { LogOutIcon, MessageCircleCheck, Settings, User2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ user }) => {
let redirect = useNavigate()
const [isenable, setIsenable] = useState(true)

  return (
    <>
    {isenable? <div className="h-screen w-[20%] min-w-[260px] bg-[#0f172a] border-r border-[#1e293b] flex flex-col justify-between text-white">

      {/* Top Section */}
      <div className="p-4">
        
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="search"
            placeholder="Search chats..."
            className="w-full px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Recent Chats */}
        <h2 className="text-gray-400 text-sm px-2 mb-2">Recent Chats</h2>

        <div className="space-y-2 overflow-y-auto max-h-[70vh] pr-1 scrollbar-thin scrollbar-thumb-[#334155]">
          <Recentchatbox name="Rahul" />
          <Recentchatbox name="Aman" />
          <Recentchatbox name="Priya" />
        </div>
      </div>

      {/* Bottom User Section */}
      <div className="p-4 border-t border-[#1e293b] flex items-center gap-3 hover:bg-[#1e293b] cursor-pointer transition-all">
        <div className="relative">
          <img
            className="w-10 h-10 rounded-full"
            src={`https://ui-avatars.com/api/?name=${user.name}&background=1e293b&color=fff`}
            alt="user avatar"
          />

          {/* Online indicator */}
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0f172a] rounded-full"></span>
        </div>

        <div className='flex items-center justify-between p-3  w-[90%]'>
         <div> <h2 className="font-semibold text-white">{user.name}</h2>
          <p className="text-sm text-gray-400">Online</p>
          </div>
        <FiSettings className='text-2xl' onClick={()=>
          setIsenable(false)
        } />
        </div>
      </div>

    </div>    :    <div className="w-[20%] h-screen bg-[#111827] text-white flex flex-col">

                {/* 🔍 Search Bar */}
                <div className="p-3 border-b border-gray-700">
                    <input
                        type="search"
                        placeholder="Search here..."
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>


                <div className="flex-1 overflow-y-auto p-2">
                    {/* <MoveLeft className='bg-amber-100 rounded-full p-1 text-black text-2xl' /> */}
                    <h2 className="text-gray-400 text-sm px-2 mb-4">Settings</h2>


                    <button onClick={()=>{
                        setIsenable(true)
                    }} className='flex gap-2 my-2 border w-full p-2 rounded-sm'>
                        <MessageCircleCheck /> <span>My Chats</span>
                    </button>

                    <button onClick={()=>{redirect("/user/resetpassword")}} className='flex gap-2 my-2 border w-full p-2 rounded-sm'>
                        <Settings /> <span>Setting</span>
                    </button>
                    <button onClick={() => { redirect("/user/profile") }} className='flex gap-2 my-2 border w-full p-2 rounded-sm'>
                        <User2Icon /> <span>Profile</span>
                    </button>
                    <button className='flex gap-2 my-2 border w-full p-2 rounded-sm'>
                        <LogOutIcon /> <span>LogOut</span>
                    </button>
                </div>

                {/* 👤 User Profile */}
                <div className="h-[70px] bg-gray-900 flex items-center gap-3 px-3 border-t border-gray-700">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                            src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff`}
                            alt=""
                        />
                    </div>
                    <h2 className="font-medium">{user.name}</h2>
                </div>

            </div>}     
    
    
    </>
  )
}

export default Sidebar