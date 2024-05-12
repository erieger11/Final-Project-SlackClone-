import React, { useState, useEffect } from 'react';
import Settings from '../Settings/settings';
import OnlineUsers from '../ActiveUsers/OnlineUsers.js';
import OfflineUsers from '../ActiveUsers/OfflineUsers.js';
import './RightSidebar.css'; // Assuming the CSS file remains the same

const RightSidebar = () => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState('');

  // State for user profile picture URL
  const [profilePictureUrl, setProfilePictureUrl] = useState('');

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

  // Fetch user profile picture on component mount (assuming a fetchUserProfilePicture function)
  useEffect(() => {
    const fetchUserProfilePicture = async () => {
      try {
        const url = await fetchUserProfilePicture(); // Replace with your logic to fetch URL
        setProfilePictureUrl(url);
      } catch (err) {
        console.error('Error fetching profile picture:', err);
      }
    };

    fetchUserProfilePicture();
  }, []); // Run on component mount

  return (
    <div className="right-side-bar">
      <div className="user-profile">
        {profilePictureUrl ? (
          <img src={profilePictureUrl} alt="User Profile Picture" />
        ) : (
          <div className="profile-placeholder">Welcome</div>
        )}
      </div>
      <h2>Table Talkers</h2>
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
