import React from 'react';
import './logout.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return navigate('/');
  };
  return (
    <button type="button" onClick={handleClick} className="logout-btn">Logout</button>
  );
};

export default Logout;
