import React from 'react';
import './MotorsList.css';
import { useNavigate } from 'react-router-dom';
import MotorCard from '../../../common/motorcard/MotorCard';
import Sidebar from '../../../common/sidebar/Sidebar';
import MotorsListHeader from './MotorsListHeader';

const Motorcycles = () => {
  const navigate = useNavigate();
  const HandleDetails = (id) => navigate(`/motorcycles/${id}/details`);

  return (
    <div className="motorslist-cont">
      <Sidebar />
      <div className="motorslist-wrapper">
        <MotorsListHeader />
        <div className="motor-cards-list">
          {Array.from(Array(10).keys()).map((motor) => (
            <div
              key={motor}
              className="motor-card"
              onClick={() => { HandleDetails(motor); }}
              aria-hidden="true"
            >
              <MotorCard motor={motor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Motorcycles;
