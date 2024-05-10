import React from 'react';
import Jane from './Assets/Chris.jpg';
import profile from './Assets/profile.jpg';
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:8080");

const Message = () => {
  const [room, setRoom] = useState("");

  // Messages States
   const [message, setMessage] = useState("");
   const [messageReceived, setMessageReceived] = useState("");
   const joinRoom = () => {
    if (room.trim() !== "") { // Trim the input to remove leading and trailing spaces
      socket.emit("join_room", room);
    } else {
      alert("Please enter a room number.");
    }
  };

  const sendMessage = () => {
    if (message.trim() !== "") { // Trim the message to remove leading and trailing spaces
      socket.emit("send_message", { message, room });
    } else {
      alert("Please enter a message.");
    }
  };

  useEffect(() => {
    const handleReceiveMessage = (data) => {
      setMessageReceived(data.message);
    };

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [messageReceived]);
  return (
  
    <div className="message owner">
      <div className="messageInfo">
        <img src={Jane} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Message;
