import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sunny"
                message="Hey! How are you"
                timestap="35 minutes ago"
                profilepic=""
            />
            <Chat
                name="Ellen"
                message="What's Up?"
                timestap="20 minutes ago"
                profilepic=""
            />
            <Chat
                name="Casca"
                message="Ola"
                timestap="10 minutes ago"
                profilepic=""
            />
            <Chat
                name="Roshini"
                message="Heg idhira..?"
                timestap="2 minutes ago"
                profilepic=""
            />
        </div>
    )
}

export default Chats
