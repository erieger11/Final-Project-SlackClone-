// Channel.js
import React from 'react';
import './channels.css';

const Channel = ({ channel }) => {
  const { name, description } = channel;

  return (
    <div className="channels">
      <div className="channel-name">{name}</div>
      {description && <div className="channel-description">{description}</div>}
    </div>
  );
}

export default Channel;
