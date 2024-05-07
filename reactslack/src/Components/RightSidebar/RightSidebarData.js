import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const RightsidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'rightsidebar-text',
  },
  {
    title: 'ActiveUsers',
    path: '/activeUsers',
    icon: <FaIcons.FaUserFriends />,
    cName: 'rightsidebar-text',
  },
  {
    title: 'Direct Message',
    path: '/directMessage',
    icon: <RiIcons.RiSendPlaneFill />,
    cName: 'rightsidebar-text',
  },
];
