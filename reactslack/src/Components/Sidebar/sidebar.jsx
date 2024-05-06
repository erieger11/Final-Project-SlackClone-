import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  // Dummy data for channels (replace with actual data)
  const channels = [
    { id: 1, name: 'General' },
    { id: 2, name: 'Random' },
    { id: 3, name: 'Tech Talk' }
  ];

  return (
    <aside className="sidebar">
      <h2>Channels</h2>
      <ul>
        {/* Render list of channels */}
        {channels.map(channel => (
          <li key={channel.id}>{channel.name}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
