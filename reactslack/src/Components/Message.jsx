import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';


const socket = io.connect('http://localhost:9000');

const Message = () => {
  const [messageText, setMessageText] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const storedJWT = localStorage.getItem('token');
    console.log('------->TOKEN ', storedJWT);
    try {
      const response = await fetch('http://localhost:8080/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedJWT}`,
        },
        body: JSON.stringify({ uploads: messageText }),
      });
      if (!response.ok) {
        throw new Error('Error sending message');
      }
      setMessageText('');
    } catch (error) {
      console.error('Error:', error); 
    }
  };
  const joinRoom = () => {
    if (room.trim() !== '') {
      socket.emit('join_room', room);
    } else {
      alert('Please enter a room number.');
    }
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('send_message', { message: message.trim(), room });
    } else {
      alert('Please enter a message.');
    }
  };

  useEffect(() => {
    const handleReceiveMessage = data => {
      setMessages(prevMessages => [...prevMessages, data.message]);
    };

    socket.on('receive_message', handleReceiveMessage);

    return () => {
      socket.off('receive_message', handleReceiveMessage);
    };
  }, []);

  useEffect(() => {
    const element = document.querySelector('.message-container');
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);

  return (
    <div className="message-container">
      
      {messages.map((msg, index) => (
        <div key={index} className="message">
          
          <div className="messageInfo">
            <span>just now</span>
            
          </div>
          
          <div className="messageContent">
            <p>{msg}</p>
            
          </div>
          
        </div>
      ))}
  
      <div className="input">
       
        <input
          placeholder="Room Number..."
          onChange={event => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}>Join Room</button>
        
        <input
          type="text"
          placeholder="Type something"
          onChange={event => {
            setMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}>Send Message</button>
        
      </div>
      
    </div>
  );
};

export default Message;
