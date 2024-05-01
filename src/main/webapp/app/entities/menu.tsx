import React from 'react';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/user-profile">
        User Profile
      </MenuItem>
      <MenuItem icon="asterisk" to="/workspace">
        Workspace
      </MenuItem>
      <MenuItem icon="asterisk" to="/channel">
        Channel
      </MenuItem>
      <MenuItem icon="asterisk" to="/message">
        Message
      </MenuItem>
      <MenuItem icon="asterisk" to="/mention">
        Mention
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
