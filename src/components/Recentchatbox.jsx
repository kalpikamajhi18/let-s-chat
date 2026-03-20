import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecentChatBox = ({ name }) => {

    let redirect = useNavigate()

    return (
        <div onClick={()=>{redirect('/user/chat')}} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition">

            {/* Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                    src={`https://ui-avatars.com/api/?name=${name}&background=random`}
                    alt=""
                />
            </div>

            {/* Name + Last Message */}
            <div className="flex-1">
                <h2 className="text-sm font-medium">{name}</h2>
                <p className="text-xs text-gray-400 truncate">
                    Last message preview...
                </p>
            </div>

            {/* Time */}
            <span className="text-xs text-gray-500">2m</span>
        </div>
    )
}

export default RecentChatBox