import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  // CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
} from 'cdbreact';

// const Navbar = () => (
//   <nav className="navbar navbar-expand-md navbar-light bg-light">
//     <NavLink to="/" className="navbar-brand"> Vespa</NavLink>
//     <button className="navbar-toggler"
//  type="button" data-toggle="collapse" data-target="#navbarNav">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//           <NavLink to="/models" className="nav-link"> Models </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/Lifestyle" className="nav-link"> Lifestyle</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/Shop" className="nav-link"> Shop</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/Testdrive" className="nav-link"> Test drive</NavLink>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );

// export default Navbar;
// import React from 'react';
const Navbar = () => (
  <div className="border" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#000" backgroundColor="#fff">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" />}>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          <img className="logo" src="https://logoeps.com/wp-content/uploads/2013/06/vespa-motorcycle-vector-logo.png" alt="Vespa logo" />
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <div className="nav-link-div">
            <NavLink exact to="/Models" className={({ isActive }) => (isActive ? 'activeClicked text-white font-weight-bold' : 'font-weight-bold')}>
              MODELS
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
