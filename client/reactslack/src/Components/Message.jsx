import Jane from './Assets/Chris.jpg';
import profile from './Assets/profile.jpg';
import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import { FaImage, FaCloudUploadAlt } from 'react-icons/fa';

const socket = io.connect('http://localhost:9000');

const Message = () => {
  const [messageText, setMessageText] = useState('');

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
      // Handle the error (display a message to the user)
    }
  };

  const [room, setRoom] = useState('');

  // Messages States
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState('');
  const joinRoom = () => {
    if (room.trim() !== '') {
      // Trim the input to remove leading and trailing spaces
      socket.emit('join_room', room);
    } else {
      alert('Please enter a room number.');
    }
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      // Trim the message to remove leading and trailing spaces
      socket.emit('send_message', { message, room });
    } else {
      alert('Please enter a message.');
    }
  };

  useEffect(() => {
    const handleReceiveMessage = data => {
      setMessageReceived(data.message);
    };

    socket.on('receive_message', handleReceiveMessage);

    return () => {
      socket.off('receive_message', handleReceiveMessage);
    };
  }, [messageReceived]);
  return (
    <div>
      <div className="message ">
        <div className="messageInfo">
          <img src={Jane} alt="" />
          <span>just now</span>
        </div>
        <div className="messageContent">
          <p>{messageReceived}</p>
        </div>
      </div>

      <div className="message owner">
        <div className="messageInfo">
          <img src={Jane} alt="" />
          <span>just now</span>
        </div>
        <div className="messageContent">
          <p>{message}</p>
        </div>
      </div>
      {/* <div className='input'>
      <input
        placeholder="Room Number..."
        onChange={event => {
          setRoom(event.target.value);
        }}
      /></div>
      
      <button onClick={joinRoom}>Join Room</button> */}
      <div className='input'>
      <input type='text' placeholder="Type something"
        onChange={event => {
          setMessage(event.target.value);
        }}
      />
      <div className="send"></div>
      <FaImage />
      <input type="file" style={{ display: "none" }} id="file" />
      <label htmlFor="file">
        <FaCloudUploadAlt />
      </label>
      <button onClick={sendMessage}>Send Message</button></div>
      </div>


  );
};

export default Message;
