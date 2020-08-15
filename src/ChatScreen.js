import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput]=useState();
    const [messages, setMessages]= useState([
    {
        name:'Sunny',
        image:'...',
        message:'Hi'
    },
    {
        name:'Sunny',
        image:'',
        message:'How are you doing'
    },
    {
        message:'Hello, Wassup?'
    }
    ]);
    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message:input }]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatscreen_timestap">You matched with Sunny on 14/08/2020</p>
            {messages.map((message) => (
                message.name ? (
                <div className="chatscreen_message">
                    <Avatar
                        className="chatscreen_image"
                        alt={message.name}
                        alt={message.image}
                     />
                    <p className="chatscreen_text">{message.message}</p>
                </div>
                ):(
                    <div className="chatscreen_message">
                    <p className="chatscreen_textuser">{message.message}</p>
                    </div>
                )               
            ))}
            <form className="chatscreen_input">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="input_style" 
                    type="text" 
                    placeholder="Type your name"/>
                <button onClick={handleSend} className="btn_style">SEND</button>
            </form> 
        </div>
    )
}

export default ChatScreen
