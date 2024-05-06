import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as TbIcons from 'react-icons/tb';
import * as AiIcons from 'react-icons/ai';

function Rightsidebar() {
  const [rightsidebar, setRightSidebar] = useState(false);

  const showRightSidebar = () => setRightSidebar(!rightsidebar);

  return (
    <>
      <div className="rightsidebar">
        <Link to="#" className="menu-bars">
          <TbIcons.TbLayoutSidebarRightExpand onClick={showRightSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'right-menu active' : 'right-menu'}>
        <ul className="right-menu-items">
          <li className="rightbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineCloseSquare />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Right - sidebar;
