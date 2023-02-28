import React from 'react';
import './Sidebar.css';
import logo from '../../assets/images/logo.png';
import SidebarLinks from './SidebarLinks';
import SidebarMedia from './SidebarMedia';

const Sidebar = () => (
  <div className="sidebar-cont">
    <div>
      <img src={logo} alt="logo" className="logo-sidebar" />
    </div>
    <SidebarLinks />
    <SidebarMedia />
  </div>
);

export default Sidebar;
