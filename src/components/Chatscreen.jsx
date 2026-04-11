import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

const Chatscreen = () => {

  let redirect = useNavigate()
  const { user, chatId, friendName } = useOutletContext()

  const [newMessage, setNewMessage] = useState('')
  const [chats, setChats] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    if (!chatId) return redirect("/user")

    let token = JSON.parse(localStorage.getItem("user_token"))

    const fetchChats = async () => {
      let resp = await fetch('https://api.skillsvarz.com/api/messages/' + chatId, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      let res = await resp.json()
      setChats(res)
    }

    fetchChats()
  }, [chatId, refresh])

  // 👤 Friend Message
  const you = (value) => (
    <div className="flex items-end gap-2">
      <img
        className="w-7 h-7 md:w-8 md:h-8 rounded-full"
        src={`https://ui-avatars.com/api/?name=${value.sender.name}&background=ffffff&color=5E2D3F`}
        alt=""
      />

      <div className="bg-[#f3e7eb] px-3 py-2 rounded-xl max-w-[75%] md:max-w-xs">
        <p className="text-xs md:text-sm text-[#5E2D3F] break-words">
          {value.content}
        </p>
        <span className="text-[9px] md:text-[10px] text-[#a78b94]">
          {new Date(value.createdAt).toLocaleTimeString()}
        </span>
      </div>
    </div>
  )

  // 🙋 My Message
  const me = (value) => (
    <div className="flex items-end justify-end gap-2">
      <div className="bg-[#5E2D3F] px-3 py-2 rounded-xl max-w-[75%] md:max-w-xs text-right">
        <p className="text-xs md:text-sm text-white break-words">
          {value.content}
        </p>
        <span className="text-[9px] md:text-[10px] text-[#e7cfd6]">
          {new Date(value.createdAt).toLocaleTimeString()}
        </span>
      </div>

      <img
        className="w-7 h-7 md:w-8 md:h-8 rounded-full"
        src={`https://ui-avatars.com/api/?name=${value.sender.name}&background=5E2D3F&color=fff`}
        alt=""
      />
    </div>
  )

  const sendMessage = async () => {
    if (!newMessage.trim()) return

    let token = JSON.parse(localStorage.getItem('user_token'))

    let resp = await fetch('https://api.skillsvarz.com/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ chatId, content: newMessage })
    })

    if (resp.status === 200 || resp.status === 201) {
      setNewMessage("")
      setRefresh(!refresh)
    }
  }

  return (
    <div className="h-screen w-full flex flex-col bg-[#f8f5f6]">

      {/* Header */}
      <div className="flex items-center justify-between px-3 md:px-6 py-3 md:py-4 border-b border-[#eadde1] bg-gradient-to-br from-[#e4d7dc] to-[#dab9c5]">

        <div className="flex items-center gap-2 md:gap-3">
          <img
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            src={`https://ui-avatars.com/api/?name=${friendName}&background=5E2D3F&color=fff`}
            alt=""
          />

          <div>
            <h2 className="font-semibold text-sm md:text-base text-[#5E2D3F]">
              {friendName}
            </h2>
            <p className="text-xs md:text-sm text-[#a78b94]">
              Active now
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 md:gap-4 text-[#a78b94] text-sm md:text-base">
          <button className="hover:text-[#5E2D3F]">📞</button>
          <button className="hover:text-[#5E2D3F]">🎥</button>
          <button className="hover:text-[#5E2D3F]">⋮</button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3">
        {chats.map((value, index) => (
          <div key={index}>
            {value.sender._id === user._id ? me(value) : you(value)}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 md:p-4 border-t border-[#eadde1] bg-gradient-to-br from-[#e4d7dc] to-[#dab9c5] flex flex-col sm:flex-row items-center gap-2 sm:gap-3">

        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          className="w-full flex-1 px-3 md:px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] text-sm"
        />

        <button
          onClick={sendMessage}
          className="w-full sm:w-auto bg-[#5E2D3F] px-4 py-2 rounded-lg text-white hover:opacity-90 transition text-sm"
        >
          Send
        </button>

      </div>

    </div>
  )
}

export default Chatscreen