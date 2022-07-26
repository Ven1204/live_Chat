import React, { useState } from 'react';

function Chat(socket, username, room) {
  const [message, setMessage] = useState("");

  const sendMessage = async() =>{
    if(message !== ""){
      const messageData = {
        room: room,
        name:  username,
        message: message,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      }

      await socket.emit("send_message", messageData);
    }
  }

  return (
    <div>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>

      <div className="chat-body"></div>

      <div className="chat-footer">
        <input
          type="text"
          placeholder='Your message..'
          onChange = {(event) => {setMessage(event.target.value)}}
        />
        <button onClick={sendMessage}>send</button>
      </div>
    </div>
  )
}

export default Chat
