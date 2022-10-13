import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Authenticate from '../authenticate/Authenticate';

const Home = () => (
  <div className="home-container">
    <h1>MOTORBIKE BOOKING</h1>
    <button type="button" className="explore">
      Explore the App
      <i><FontAwesomeIcon icon={faChevronRight} className="chevron-right" /></i>
    </button>
    <Authenticate />
  </div>
);

export default Home;
