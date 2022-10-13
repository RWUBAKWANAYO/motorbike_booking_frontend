import React, { useState } from 'react';
import './NewMotor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage, faCalendarWeek, faCircleDollarToSlot, faGrip,
} from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import Sidebar from '../../../common/sidebar/Sidebar';
import SidebarPop from '../../../common/sidebar/SidebarPop';
import { CreateMotors } from './newmotorSlice';

const NewMotor = () => {
  const dispatch = useDispatch();

  const [choosenimg, setChoosenimg] = useState('Upload motorcylce Image');
  const [motorData, setMotorData] = useState({
    motor_name: '',
    year: '',
    category_id: 2,
    image: 'https://i.pinimg.com/474x/00/72/55/0072551c8158edff2d18537bdae73886.jpg',
    price: '',
  });

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(CreateMotors(motorData));
  };

  return (
    <div className="add-motor-cont">
      <Sidebar />
      <SidebarPop />
      <div className="add-motor-wrapper">

        <form className="add-motor-form" onSubmit={(e) => handleCreate(e)}>
          <h1 className="add-motor-header">ADD MOTORCYLE</h1>

          <div className="add-motor-input-cont">
            <FontAwesomeIcon icon={faGrip} className="add-motor-icon" />
            <input
              type="text"
              placeholder="Brand Of Motorcycle"
              required
              onChange={(e) => setMotorData({ ...motorData, motor_name: e.target.value })}
            />
          </div>

          <div className="add-motor-input-cont">
            <FontAwesomeIcon icon={faCircleDollarToSlot} className="add-motor-icon" />
            <input
              type="number"
              placeholder="Price Of Motorcycle"
              required
              onChange={(e) => setMotorData({ ...motorData, price: e.target.value })}
            />
          </div>

          <div className="add-motor-input-cont">
            <FontAwesomeIcon icon={faCalendarWeek} className="add-motor-icon" />
            <input
              type="text"
              placeholder="Year Of Release"
              required
              onChange={(e) => setMotorData({ ...motorData, year: e.target.value })}
            />
          </div>

          <div className="add-motor-input-cont">
            <div className="upload-cont">
              <FontAwesomeIcon icon={faImage} className="add-motor-icon" />
              {choosenimg}
            </div>
            <input
              type="file"
              placeholder="Full name"
              required
              className="upload-image-input"
              style={{ color: choosenimg === 'Upload motorcylce Image' ? '' : '#000' }}
              onChange={(e) => {
                setChoosenimg(e.target.files[0].name);
              }}
            />
          </div>

          <div className="submit-cont">
            <input type="submit" value="CREATE MOTORCYLE" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewMotor;
