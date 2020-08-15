import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import './Chat.css'

function Chat({name, message,timestap,profilepic}) {
    return (
        <Link to={`/chat/${name}`}>
        <div className="chat">
            <Avatar className="chat_image"  src={profilepic}/>
            <div className="chat_details">
                <h2>{name}</h2>
                <h2>{message}</h2>
            </div>
            <p className="chat_timestap">{timestap}</p>
        </div>
        </Link>
    )
}

export default Chat
