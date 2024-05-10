import React from 'react';
import Chat from '../Chat';
import './MainComponent.css';
// import SideBar from '/Users/diksha/Desktop/Extras/SlackClone/client/reactslack/src/Components/Sidebar/sidebar.jsx';



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
