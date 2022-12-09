/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './MotorsList.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MotorCard from '../../../common/motorcard/MotorCard';
import Sidebar from '../../../common/sidebar/Sidebar';
import SidebarPop from '../../../common/sidebar/SidebarPop';
import MotorsListHeader from './MotorsListHeader';
import { FetchMotors } from './motorslistSlice';
import { CardSkeleton } from '../../../common/skeleton/Skeleton';

const Motorcycles = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const motorslist = useSelector((state) => state.motorslist);
  const HandleDetails = (id) => navigate(`/motorcycles/${id}/details`);

  useEffect(() => {
    dispatch(FetchMotors());
  }, []);

  return (
    <div className="motorslist-cont">
      <SidebarPop />
      <Sidebar />
      <div className="motorslist-wrapper">
        <MotorsListHeader />
        <div className="motor-cards-list">
          {motorslist.loading && <CardSkeleton />}
          {motorslist.motors.length > 0 && motorslist.motors.map((motor) => (
            <div
              key={motor.id}
              className="motor-card"
              onClick={() => { HandleDetails(motor.id); }}
              aria-hidden="true"
            >
              <MotorCard motor={motor} />
            </div>
          ))}
          {motorslist.errors.length > 0 && <p>Error</p>}
        </div>
      </div>
    </div>
  );
};

export default Motorcycles;
