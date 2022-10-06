import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  // CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
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
  <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" />}>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Vespa
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink exact to="/Models" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Models</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/Lifestyle" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="table">Lifestyle</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/Shop" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">Shop</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/Testdrive" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="chart-line">Test drive</CDBSidebarMenuItem>
          </NavLink>
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
