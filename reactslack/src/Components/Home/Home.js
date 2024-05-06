import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import styled from 'styled-components';

function Home() {
  return (
    <HomeContainer>
      <div className="home-container">
        <h1>Welcome to TableTalk</h1>
        <p>{'    '}Please sign in or register to get started.</p>
        <div className="button-container">
          <Link to="/" className="login-button">
            Login/Register
          </Link>
        </div>
      </div>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 50%;
  background: turquios;
`;
