import React from 'react';
import './MotorDetails.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../../common/sidebar/Sidebar';
import SidebarPop from '../../../common/sidebar/SidebarPop';
import motor1 from '../../../assets/images/motor1.png';
import motorcolors from '../../../assets/images/motorcolors.png';

const MotorDetails = () => {
  const navigate = useNavigate();
  const HandleNavigation = (id) => navigate(`/reserve/${id}`);

  return (
    <div className="motordetails-cont">
      <Sidebar />
      <SidebarPop />
      <div className="motordetails-wrapper">
        <div className="motordetails-image"><img src={motor1} alt="motor" /></div>
        <div className="motordetails-desc">
          <h1>VESP C-20</h1>
          <h4>
            This motorcycle is very interesting and has a lot of features that riders love.

          </h4>
          <div className="motor-info-list">
            <span>
              <small>Brand</small>
              <small>Benz Motorcyle</small>
            </span>
            <span>
              <small>Price</small>
              <small>$300</small>
            </span>
            <span>
              <small>Year</small>
              <small>2005</small>
            </span>
            <span>
              <small>Duration</small>
              <small>24 Hours</small>
            </span>
          </div>
          <div className="motor-colors"><img src={motorcolors} alt="available colors" /></div>
          <button type="button" className="details-book-btn" onClick={() => HandleNavigation(2)}>
            <i className="reserve-motor-icon"><FontAwesomeIcon icon={faCashRegister} /></i>
            <b>Reserve</b>
            <i className="details-chevron-right"><FontAwesomeIcon icon={faChevronRight} /></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotorDetails;
