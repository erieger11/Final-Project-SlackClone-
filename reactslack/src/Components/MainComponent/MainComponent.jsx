import React from 'react';
import Chat from '../Chat';
import './MainComponent.css';



const home = () => {
  return (
    <div className="home">
      <div className="container">
        <Chat />
        {/* <SideBar/> */}
      </div>
    </div>
  );
};

export default home;
