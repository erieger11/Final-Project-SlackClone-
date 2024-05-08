import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import Chat from '../Chat';
import './MainComponent.css';

const home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default home;
