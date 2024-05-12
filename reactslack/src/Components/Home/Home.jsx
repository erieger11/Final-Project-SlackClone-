import React from 'react';
import styled from 'styled-components';
import Sidebar from "../Sidebar/sidebar";
import RightSidebar from "../RightSidebar/RightSidebar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh; /* Set full height of viewport */
`;

const ContentContainer = styled.div`
  flex: 1; /* Take up remaining space */
  padding: 20px;
`;

function Home() {
  return (
    <PageContainer>
      <Sidebar />
      <ContentContainer>
        <HomeContainer>
          <h1>Welcome to Tabletalk</h1>
        </HomeContainer>
      </ContentContainer>
      <RightSidebar /> {/* Assuming this is intended for the right sidebar */}
    </PageContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  position: relative;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center; /* Center the text horizontally */
  padding: 20px; /* Add padding around the text */
  margin: 20px; /* Add margin around the container */
  text-align: center; /* Center the text vertically */
  min-height: 100px; /* Set a minimum height for the container */
  transition: height 0.2s ease;
`;
