import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';
import SidebarLinks from './SidebarLinks';
import SidebarMedia from './SidebarMedia';

const Sidebar = () => (
  <div className="sidebar-cont">
    <div>
      <i className="x-sidebar"><FontAwesomeIcon icon={faXmark} /></i>
      <img src={logo} alt="logo" className="logo-sidebar" />
    </div>
    <SidebarLinks />
    <SidebarMedia />
  </div>
);

export default Sidebar;
