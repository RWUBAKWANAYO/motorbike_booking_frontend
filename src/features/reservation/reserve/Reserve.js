import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import motor1 from '../../../assets/images/motor1.png';
import Sidebar from '../../../common/sidebar/Sidebar';
import SidebarPop from '../../../common/sidebar/SidebarPop';
import './Reserve.css';
import ReserveForm from './ReserveForm';
import { FetchMotors } from '../../../motors/motorsSlice';

const Reserve = () => {
  const dispatch = useDispatch();
  const [motorbikes, setMotorbikes] = useState([]);
  const motorslist = useSelector((state) => state.motorslist);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="reserve-cont">
      <SidebarPop />
      {showSidebar && (
      <div className="reserve-sidebar">
        <Sidebar />
        <i
          onClick={() => setShowSidebar(false)}
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={faXmark} />
        </i>
      </div>
      )}

      <div className="reserve-bg">
        <img src={motor1} alt="motorcycle" className="reserve-bg" />
        <div />
      </div>

      <div className="reserve-wrapper">
        { !showSidebar && (
        <i
          className="reserve-menu"
          onClick={() => setShowSidebar(true)}
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={faBars} />
        </i>
        )}
        <h1>BOOK A VERSPA C-20 MOTORCYCLE</h1>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </p>
        <ReserveForm />
      </div>
    </div>
  );
};

export default Reserve;
