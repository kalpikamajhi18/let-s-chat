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
                
                
               }
               else{
                setChatId(value._id)
               }
            }  
                // newchat(id)
            } 
            className="flex items-center gap-3 p-2  rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-200"
        >

            {/* Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <img
                    src={`https://ui-avatars.com/api/?name=${name}&background=ffffff&color=5E2D3F`}
                    alt=""
                />
            </div>

            {/* Name + Message */}
            <div className="flex-1">
                <h2 className="text-sm font-semibold text-white">
                    {name}
                </h2>
                <p className="text-xs text-gray-300 truncate">
                     {email}
                </p>
            </div>

            {/* Time */}
            <span className="text-xs text-gray-400">
                2m
            </span>
        </div>
    )
}

export default RecentChatBox