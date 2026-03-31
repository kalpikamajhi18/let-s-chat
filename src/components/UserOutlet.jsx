import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { Bounce, ToastContainer } from 'react-toastify'

const UserOutlet = () => {
    let user_id = JSON.parse(localStorage.getItem("user_id"))

    const [user, setUser] = useState({})
     const [chatId, setChatId] = useState("")
    const [friendName, setFriendName] = useState("")

    useEffect(() => {

        let api = async () => {
            let resp = await fetch('https://api.skillsvarz.com/api/user/' + user_id)
            let res = await resp.json()
            console.log(res)
            setUser(res)
        }
        api()
    }, [user_id])
    return (
        <div className='h-screen w-full flex'>
            <Sidebar user={user} setFriendName={setFriendName} chatId={chatId} setChatId={setChatId} />
            <Outlet context={{user , chatId, setChatId, friendName  }} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    )
}

export default UserOutlet