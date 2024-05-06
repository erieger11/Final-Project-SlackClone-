import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to TableTalk!</h1>
      <p>Please sign in or register to get started.</p>
      <div className="button-container">
        <Link to="/login" className="login-button">
          Login
        </Link>
        <Link to="/register" className="register-button">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;
