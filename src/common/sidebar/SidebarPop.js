import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import logo from '../../assets/images/logo.png';
import SidebarLinks from './SidebarLinks';
import SidebarMedia from './SidebarMedia';

const SidebarPop = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };
  return (
    <div className="sidebarmenu-cont">
      <div>
        <img src={logo} alt="logo" className="logo-sidebar" />
      </div>
      <nav ref={navRef}>
        <SidebarLinks />
        <SidebarMedia />
        <button className="close-btn" type="button" onClick={showNavbar}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </nav>
      <button type="button" onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default SidebarPop;
