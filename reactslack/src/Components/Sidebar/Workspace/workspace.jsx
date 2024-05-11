// Workspace.js
import React from 'react';
import './Workspace.css';

const Workspace = ({ workspace }) => {
  const { name, status } = workspace;

  return (
    <div className="workspace">
      <div className="RubberMan 10.0">{name}</div>
      {status && <div className="workspace-status">{status}</div>}
    </div>
  );
}

export default Workspace;
