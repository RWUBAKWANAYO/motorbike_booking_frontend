import React from 'react';
import PropTypes from 'prop-types';
import './MotorCard.css';
import MotorCardMedia from './MotorCardMedia';

const MotorCard = ({ motor }) => (
  <div className="motor-card-cont">
    <img src={motor.image} alt="motocycle" />
    <small className="motor-card-name">{motor.motor_name}</small>
    <small className="motor-card-break">..................</small>
    <p className="motor-desc">
      { motor.description.slice(0, 40)}
      ...
    </p>
    <MotorCardMedia />
  </div>
);

MotorCard.propTypes = {
  motor: PropTypes.shape({
    image: PropTypes.string.isRequired,
    motor_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
MotorCard.defaultProps = {
  motor: {
    image: 'image',
    motor_name: 'name',
    description: 'description',
  },
};
export default MotorCard;
