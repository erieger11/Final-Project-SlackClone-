import React from "react";
import { FaHeadset, FaUserPlus } from "react-icons/fa";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <FaHeadset />
          <FaUserPlus />
        </div>
      </div>
      <Messages />
    
    </div>
  );
};

export default Chat;
