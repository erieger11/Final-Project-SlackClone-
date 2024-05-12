import React from 'react';
import profileImage from './Assets/profile.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Table Talk</span>
      <div className="user">
        <img src={profileImage} alt="pic" />
        <span>Diksha</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
