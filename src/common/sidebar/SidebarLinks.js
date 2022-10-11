import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarLinks = () => {
  const location = useLocation();

  const links = [
    { id: 1, path: '/motorcycles', text: 'MOTORCYCLES' },
    { id: 2, path: '/reserve', text: 'RESERVE' },
    { id: 3, path: '/my_reservations', text: 'MY RESERVATIONS' },
    { id: 4, path: '/add_motorcycle', text: 'ADD MOTOCYCLE' },
    { id: 5, path: '/delete_motorcycle', text: 'DELETE MOTORCYCLE' },
  ];
  return (
    <div className="sidebar-routes-links">
      {links.map((el) => (
        <NavLink
          to={el.path}
          key={el.id}
          id={location.pathname.includes(el.path) ? 'link_active' : ''}
        >
          {el.text}
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarLinks;
