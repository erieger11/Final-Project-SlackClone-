import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import RightSidebar from './RightSidebar'; // Import RightSidebar

const ConditionalRightSidebar = () => {
  return (
    <>
      {' '}
      {/* Fragment for cleaner JSX */}
      <RightSidebar />
      <Outlet />
    </>
  );
};

export default ConditionalRightSidebar;
