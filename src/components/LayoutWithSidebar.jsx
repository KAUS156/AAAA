
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function LayoutWithSidebar() {
  return (
    <div>
      <Sidebar />
      <div>
        <Outlet /> {/* This will render the matched child route. */}
      </div>
    </div>
  );
}

export default LayoutWithSidebar;
