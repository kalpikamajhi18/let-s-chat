import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecentChatBox = ({ name , email, newchat, id, setChatId, setFriendName, value }) => {

    let redirect = useNavigate()

    return (
        <div 
            onClick={ async ()=>{
                redirect('/user/chat')
                setFriendName(name)

                if(newchat){
                    let chatid = await newchat(id)
                    setChatId(chatid)
                } else {
                    setChatId(value._id)
                }
            }} 
            className="flex items-center gap-2 sm:gap-3 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
        >

            {/* Avatar */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                <img
                    className="w-full h-full object-cover"
                    src={`https://ui-avatars.com/api/?name=${name}&background=ffffff&color=5E2D3F`}
                    alt={name}
                />
            </div>

            {/* Name + Message */}
            <div className="flex-1 min-w-0">
                <h2 className="text-xs sm:text-sm md:text-base font-semibold text-white truncate">
                    {name}
                </h2>
                <p className="text-[10px] sm:text-xs text-gray-300 truncate">
                    {email}
                </p>
            </div>

            {/* Time */}
            <span className="text-[10px] sm:text-xs text-gray-400 flex-shrink-0">
                2m
            </span>
        </div>
    )
}

export default RecentChatBox