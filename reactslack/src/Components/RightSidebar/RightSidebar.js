import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as TbIcons from 'react-icons/tb';
import * as AiIcons from 'react-icons/ai';
import { RightsidebarData } from './RightSidebarData';

function Rightsidebar() {
  const [setRightSidebar] = useState(false);

  const showRightSidebar = () => setRightSidebar(!setRightSidebar);

  return (
    <>
      <div className="rightsidebar">
        <Link href="#/" className="menu-bars">
          <TbIcons.TbLayoutSidebarRightExpand onClick={showRightSidebar} />
        </Link>
      </div>
      <nav className={setRightSidebar ? 'right-menu active' : 'right-menu'}>
        <ul className="right-menu-items">
          <li className="rightbar-toggle">
            <Link href="#/" className="menu-bars">
              <AiIcons.AiOutlineCloseSquare />
            </Link>
          </li>
          {RightsidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Rightsidebar;
