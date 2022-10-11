import React from 'react';
import './MotorCard.css';
import motor1 from '../../assets/images/motor1.png';
import MotorCardMedia from './MotorCardMedia';

const MotorCard = () => (
  <div className="motor-card-cont">
    <img src={motor1} alt="motocycle" />
    <small className="motor-card-name">VSP C-20 </small>
    <small className="motor-card-break">..................</small>
    <p className="motor-desc">
      An electric motor is a new electrical machine designed world
    </p>
    <MotorCardMedia />
  </div>
);

export default MotorCard;
