import React from 'react';
import {
  NavLink, useLocation, useNavigate, useParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import Logout from '../../features/authenticate/logout/Logout';
import UseAuth from '../UseAuth';

const SidebarLinks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { motorId } = useParams();

  const handleReserve = () => {
    if (location.pathname.includes('/reserve/')) return;
    if (location.pathname.includes('/details')) {
      toast.dismiss();
      setTimeout(() => navigate(`/reserve/${motorId}`));
    } else {
      toast.error('Select motor you want to book');
      setTimeout(() => navigate('/motorcycles'), 2000);
    }
  };

  const links = [
    { id: 1, path: '/motorcycles', text: 'MOTORCYCLES' },
    { id: 2, path: '/reserve', text: 'RESERVE' },
    { id: 3, path: '/my_reservations', text: 'MY RESERVATIONS' },
    { id: 4, path: '/add_motorcycle', text: 'ADD MOTOCYCLE' },
    { id: 5, path: '/delete_motorcycle', text: 'DELETE MOTORCYCLE' },
  ];

  const { User } = UseAuth();

  return (
    <div className="sidebar-routes-links">

      {links.map((el) => (
        <NavLink
          to={el.path !== '/reserve' && el.path}
          key={el.id}
          id={location.pathname.includes(el.path) ? 'link_active' : ''}
          onClick={() => (el.path === '/reserve' && handleReserve())}
        >
          {el.text}
        </NavLink>
      ))}
      {User && <Logout />}
    </div>
  );
};

export default SidebarLinks;
