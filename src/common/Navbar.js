import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
} from 'cdbreact';
import './Navbar.css';

const Navbar = () => (
  <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#000" backgroundColor="#fff">
      <CDBSidebarHeader>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Motorbike Booking
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <div className="nav-link-div">
            <NavLink exact to="/brands" className={({ isActive }) => (isActive ? 'activeClicked text-white font-weight-bold' : 'font-weight-bold')}>
              Brand
            </NavLink>
            <NavLink exact to="/Lifestyle" className={({ isActive }) => (isActive ? 'activeClicked text-white font-weight-bold' : 'font-weight-bold')}>
              LIFESTYLE
            </NavLink>
            <NavLink exact to="/Shop" className={({ isActive }) => (isActive ? 'activeClicked text-white font-weight-bold' : 'font-weight-bold')}>
              SHOP
            </NavLink>
            <NavLink exact to="/Testdrive" className={({ isActive }) => (isActive ? 'activeClicked text-white font-weight-bold' : 'font-weight-bold')}>
              TEST DRIVE
            </NavLink>
          </div>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      {/*
      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '20px 5px',
          }}
        >
          Sidebar Footer
        </div>
      </CDBSidebarFooter> */}
    </CDBSidebar>
  </div>
);

export default Navbar;
