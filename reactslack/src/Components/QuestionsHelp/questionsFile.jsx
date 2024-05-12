 import React, { useEffect, useState, useRef } from 'react';
 import io from 'socket.io-client';
 import { FaHeadset, FaUserPlus } from 'react-icons/fa';
 import Sidebar from "../Sidebar/sidebar";
 import RightSidebar from "../RightSidebar/RightSidebar";
 import './questionsFile.css';

 const socket = io.connect('http://localhost:9000');

 const Message = () => {
   const [messageText, setMessageText] = useState('');
   const [messages, setMessages] = useState([]);
   const messagesEndRef = useRef(null);

   useEffect(() => {
     socket.on('connect', () => {
       console.log('Connected to server');
     });

     socket.on('disconnect', () => {
       console.log('Disconnected from server');
     });

     socket.on('send_message', (data) => {
       console.log('Received message:', data);
     });
   }, []);

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
     if (room.trim() !== '') {
       socket.emit('join_room', room);
     } else {
       alert('Please enter a room number.');
     }
   };

   const sendMessage = () => {
     if (messageText.trim() !== '') {
       socket.emit('send_message', { message: messageText, room });
       setMessages((prevMessages) => [...prevMessages, { text: messageText, fromMe: true }]);
       setMessageText('');
     } else {
       alert('Please enter a message.');
     }
   };

   useEffect(() => {
     const handleReceiveMessage = (data) => {
       setMessages((prevMessages) => [...prevMessages, { text: data.message, fromMe: false }]);
     };
     socket.on('receive_message', handleReceiveMessage);
     return () => {
       socket.off('receive_message', handleReceiveMessage);
     };
   }, []);

   const Messages = ({ messages }) => {
     return (
       <div className="messages">
         {messages.map((msg, index) => (
           <div
             key={index}
             className={msg.fromMe ? 'message from-me' : 'message from-others'}
           >
             <div className="message-bubble">{msg.text}</div>
           </div>
         ))}
         <div ref={messagesEndRef} />
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
       <div className="header">
         <span className="header-name">Questions and Help</span>
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
         <div className="messages-container">
           <Messages messages={messages} />
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
       </div>
       <RightSidebar />
     </div>
   );
 };

 export default Message;
