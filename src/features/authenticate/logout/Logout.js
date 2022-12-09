import React from 'react';
import './logout.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SigninReset } from '../signin/signinSlice';
import { SignupReset } from '../signup/signupSlice';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(SigninReset());
    dispatch(SignupReset());
    return navigate('/');
  };
  return (
    <button type="button" onClick={handleClick} className="logout-btn">Logout</button>
  );
};

export default Logout;
