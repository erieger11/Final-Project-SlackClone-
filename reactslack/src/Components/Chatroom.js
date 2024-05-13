import { initial } from 'lodash';
import React, { useState } from 'react';

const Chatroom = () => {
  const [userData, setUserData] = useState({
    username: '',
    recievername: '',
    message: '',
  });
  return <div className="conatiner"></div>;
};

export default Chatroom;
