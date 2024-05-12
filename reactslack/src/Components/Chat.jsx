import React, { useState, useEffect } from 'react';
import { FaHeadset, FaUserPlus } from 'react-icons/fa';
import Messages from './Messages';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:9000');

const Chat = () => {
  const [messageText, setMessageText] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const storedJWT = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8080/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedJWT}`,
        },
        body: JSON.stringify({ message: messageText }), // Changed "uploads" to "message"
      });
      if (!response.ok) {
        throw new Error('Error sending message');
      }
      setMessageText('');
    } catch (error) {
      console.error('Error:', error);
      // Handle the error (display a message to the user)
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
    if (messageText.trim() !== '') {
      socket.emit('send_message', { message: messageText.trim(), room });
      setMessages(prevMessages => [...prevMessages, messageText.trim()]);
      setMessageText(''); // Clear input after sending
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

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <FaHeadset />
          <FaUserPlus />
        </div>
      </div>
      <Messages messages={messages} />
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
          value={messageText}
          onChange={event => {
            setMessageText(event.target.value);
          }}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default Chat;
