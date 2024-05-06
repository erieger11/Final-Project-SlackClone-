// DirectMessage.jsx
import React from 'react';
import './DirectMessage.css';

const DirectMessage = ({ user }) => {
  return (
    <div className="direct-message">
      <div className="user-info">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <div className="user-details">
          <h3 className="user-name">{user.name}</h3>
          <p className="user-status">{user.status}</p>
        </div>
      </div>
      <div className="message-content">
        {/* Render recent message or typing indicator */}
        {user.typing ? <p className="typing-indicator">Typing...</p> : <p className="recent-message">{user.recentMessage}</p>}
      </div>
    </div>
  );
}

export default DirectMessage;
