import React, { useState } from 'react';
import Settings from '../Settings/settings';
import OnlineUsers from '../ActiveUsers/OnlineUsers.js';
import OfflineUsers from '../ActiveUsers/OfflineUsers.js';
import './RightSidebar.css'; // Assuming the CSS file remains the same

const RightSidebar = () => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState('');

  const handleTabChange = tabName => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Settings':
        return <Settings />;
      case 'OnlineUsers':
        return <OnlineUsers />;
      case 'OfflineUsers':
        return <OfflineUsers />;
      default:
        return null;
    }
  };

  return (
    <div className="right-side-bar">
      <h2>Users</h2>
      <ul className="right-sidebar-tabs">
        <li className={activeTab === 'Settings' ? 'active' : ''} onClick={() => handleTabChange('Settings')}>
          Settings
        </li>
        <li className={activeTab === 'OnlineUsers' ? 'active' : ''} onClick={() => handleTabChange('OnlineUsers')}>
          Online
        </li>
        <li className={activeTab === 'OfflineUsers' ? 'active' : ''} onClick={() => handleTabChange('OfflineUsers')}>
          Offline
        </li>
      </ul>
      {renderContent()}
    </div>
  );
};

export default RightSidebar;
