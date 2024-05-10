import React from "react";
import Message from "./Message";
import Sidebar from "./Sidebar/sidebar";
import RightSidebar from "./RightSidebar/RightSidebar";

const Messages = () => {
  return (
    <div className="messages">
      <Message />
      <RightSidebar/>
    </div>
  );
};

export default Messages;
