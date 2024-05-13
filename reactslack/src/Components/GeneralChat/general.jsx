import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { FaHeadset, FaUserPlus } from 'react-icons/fa';
import Sidebar from "../Sidebar/sidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import './general.css';

const socket = io.connect('http://localhost:9000');

const Message = () => {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  async function getMessagesAndTimestamps(channelId, jwt) {
    const storedJWT = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8080/api/channels/1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${storedJWT}`
        }
      });

      if (!response.ok) {
        throw new Error('Error fetching messages');
      }

      const channelData = await response.json();

      const messagesArray = channelData.messages.map(message => ({
        text: message.uploads,
        fromMe: false,
        timestamp: message.timestamp
      }));

      return messagesArray;

    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  useEffect(() => {
    getMessagesAndTimestamps(1) // Assuming channel ID 1 for General channel
      .then(messages => setMessages(messages))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const handleReceiveMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, { text: data.message, fromMe: false }]);
    };
    socket.on('receive_message', handleReceiveMessage);
    scrollToBottom();
    return () => {
      socket.off('receive_message', handleReceiveMessage);
    };
  }, [messages]); // Scroll to bottom whenever messages change

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      const isScrolledToBottom = container.scrollHeight - container.clientHeight <= container.scrollTop + 1;
      if (isScrolledToBottom) {
        container.scrollTop = container.scrollHeight - container.clientHeight;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedJWT = localStorage.getItem('token');

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



  const joinRoom = () => {
    if (room.trim() === 'General') {
      setRoom('1');
    } else if (room.trim() !== '') {
      socket.emit('join_room', room);
    } else {
      alert('Please enter a room number.');
    }
  };

// useEffect(() => {
//     joinRoom();
//   }, []);


  const sendMessage = () => {
    if (messageText.trim() !== '') {
      socket.emit('send_message', { message: messageText, room });
      setMessages((prevMessages) => [...prevMessages, { text: messageText, fromMe: true }]);
      setMessageText('');
    } else {
      alert('Please enter a message.');
    }
  };

const Messages = ({ messages }) => {
  return (
    <div className="messages-container" ref={messagesContainerRef}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={msg.fromMe ? 'message from-me' : 'message from-others'}
        >
          <div className="message-bubble">{msg.text}</div>
        </div>
      ))}
    </div>
  );
};
  const Chat = () => {
    return (
      <div className="chat">
        <div className="chatInfo">
          <div className="chatIcons">
            <FaHeadset />
            <FaUserPlus />
          </div>
        </div>
        <Messages messages={messages} />
      </div>
    );
  };

 const Header = () => {
   return (
     <div className="header fixed-header">
       <span className="header-name">General</span>
       <input
         type="text"
         placeholder="Search..."
         className="header-search"
       />
     </div>
   );
 };

  return (
    <div className="message-container">
      <Sidebar />
      <div className="content-container">
        <Header />
        <Chat />
      </div>
      <div className="input-bar">
        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
          style={{ backgroundColor: 'transparent' }}
        />
        <button onClick={joinRoom}>Join Room</button>
        <input
          type="text"
          placeholder="Type something"
          value={messageText}
          onChange={(event) => {
            setMessageText(event.target.value);
          }}
          style={{ backgroundColor: 'transparent' }}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Message;
