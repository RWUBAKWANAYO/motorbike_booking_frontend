/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './MotorDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../common/sidebar/Sidebar';
import motorcolors from '../../../assets/images/motorcolors.png';
import { FetchMotorDetails } from './motordetailsSlice';

const MotorDetails = () => {
  const { motorId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const motordetails = useSelector((state) => state.motordetails.motor);

  useEffect(() => { dispatch(FetchMotorDetails(motorId)); }, []);
  const HandleNavigation = (id) => navigate(`/reserve/${id}`);

  return (
    <div className="motordetails-cont">
      <Sidebar />
      <div className="motordetails-wrapper">
        <div className="motordetails-image"><img src={motordetails.image} alt="motor" /></div>
        <div className="motordetails-desc">
          <h1>{motordetails.motor_name}</h1>
          <h4>{motordetails.description}</h4>
          <div className="motor-info-list">
            <span>
              <small>Brand</small>
              <small>Benz Motorcyle</small>
            </span>
            <span>
              <small>Price</small>
              <small>
                $
                {motordetails.price}
              </small>
            </span>
            <span>
              <small>Year</small>
              <small>{motordetails.year}</small>
            </span>
            <span>
              <small>Duration</small>
              <small>24 Hours</small>
            </span>
          </div>
          <div className="motor-colors"><img src={motorcolors} alt="available colors" /></div>
          <button type="button" className="details-book-btn" onClick={() => HandleNavigation(motordetails.id)}>
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
