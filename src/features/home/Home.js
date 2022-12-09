/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import { ShowForms } from '../authenticate/authenticateSlice';
import Authenticate from '../authenticate/Authenticate';
import UseAuth from '../../common/UseAuth';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerinfo = useSelector((state) => state.signup);
  const logininfo = useSelector((state) => state.signin);
  const { User } = UseAuth();

  useEffect(() => {
    if (registerinfo.user.length || logininfo.user.length || User) navigate('/motorcycles');
  }, [registerinfo, logininfo]);

  const authforms = useSelector((state) => state.authforms);

  const handleNavigate = () => {
    if (User) return navigate('/motorcycles');
    return dispatch(ShowForms());
  };
  return (
    <div className="home-container">
      <Slide />
      <h1>MOTORBIKE BOOKING</h1>
      <button
        type="button"
        className="explore"
        onClick={handleNavigate}
      >
        Explore the App
        <i><FontAwesomeIcon icon={faChevronRight} className="chevron-right" /></i>
      </button>
      {authforms.visible && <Authenticate />}
    </div>
  );
};

export default Home;
