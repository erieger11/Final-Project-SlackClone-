import React, { useState, useEffect } from 'react';
import { FaHeadset, FaUserPlus } from 'react-icons/fa';
import Messages from './Messages';
import io from 'socket.io-client';


const socket = io.connect('http://localhost:9000');

const Chat = () => {
  const [messageText, setMessageText] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);


  const joinRoom = () => {
    if (room.trim() !== '') {
      socket.emit('join_room', room);
    } else {
      alert('Please enter a room number.');
    }
  };

  const sendMessage = () => {
    if (messageText.trim() !== '') {
      const author = localStorage.getItem('authenticatedUsername');
      const timestamp = Date.now();
      socket.emit('send_message', { message: messageText.trim(), author, timestamp, room });
      setMessages(prevMessages => [...prevMessages, { message: messageText.trim(), author, timestamp }]);
      setMessageText('');
    } else {
      alert('Please enter a message.');
    }
  };

  useEffect(() => {
    const handleReceiveMessage = data => {
      const { message, author, timestamp } = data;
      setMessages(prevMessages => [...prevMessages, { message, author, timestamp }]);
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
