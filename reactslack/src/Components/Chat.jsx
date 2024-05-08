import React from "react";
import { FaHeadset, FaUserPlus } from "react-icons/fa";
import Messages from "./Messages";
import Input from "./Input";

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
      <Input />
    </div>
  );
};

export default Chat;
