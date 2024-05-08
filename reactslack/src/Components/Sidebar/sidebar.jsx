import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  // Dummy data for channels (replace with actual data)
  const [channels, setChannels] = useState([
    { id: 1, name: 'General' },
    { id: 2, name: 'Random' },
    { id: 3, name: 'Tech Talk' }
  ]);

  const [newChannelName, setNewChannelName] = useState("");

  const handleAddChannel = () => {
    if (newChannelName.trim() === "") {
      return;
    }
    const newChannel = {
      id: channels.length + 1,
      name: newChannelName
    };
    setChannels([...channels, newChannel]);
    setNewChannelName("");
  };

  const handleDeleteChannel = (channelId) => {
    const updatedChannels = channels.filter(channel => channel.id !== channelId);
    setChannels(updatedChannels);
  };

  return (
    <div className="sidebar">
      <h1>RubberMan 10.0</h1>
      <h2>Channels</h2>
      <ul>
        {/* Render list of channels */}
        {channels.map(channel => (
          <li key={channel.id}>
            <a href={`/channel/${channel.id}`}>{channel.name}</a>
            <button onClick={() => handleDeleteChannel(channel.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="add-channel">
        <input
          type="text"
          placeholder="Enter channel name"
          value={newChannelName}
          onChange={(e) => setNewChannelName(e.target.value)}
        />
        <button onClick={handleAddChannel}>+</button>
      </div>
    </div>
  );
}

export default Sidebar;
