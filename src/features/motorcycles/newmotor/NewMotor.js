import React, { useState } from 'react';
import './NewMotor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage, faCalendarWeek, faCircleDollarToSlot, faGrip,
} from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../../../common/sidebar/Sidebar';

const NewMotor = () => {
  const [choosenimg, setChoosenimg] = useState('Upload motorcylce Image');
  return (
    <div className="add-motor-cont">
      <Sidebar />
      <div className="add-motor-wrapper">

        <form className="add-motor-form">
          <h1 className="add-motor-header">ADD MOTORCYLE</h1>

          <div className="add-motor-input-cont">
            <FontAwesomeIcon icon={faGrip} className="add-motor-icon" />
            <input type="text" placeholder="Brand Of Motorcycle" required />
          </div>

          <div className="add-motor-input-cont">
            <FontAwesomeIcon icon={faCircleDollarToSlot} className="add-motor-icon" />
            <input type="number" placeholder="Price Of Motorcycle" required />
          </div>

          <div className="add-motor-input-cont">
            <FontAwesomeIcon icon={faCalendarWeek} className="add-motor-icon" />
            <input type="text" placeholder="Year Of Release" required />
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
              onChange={(e) => setChoosenimg(e.target.files[0].name)}
            />
          </div>

          <div className="submit-cont">
            <input type="submit" value="CREATE MOTORCYLE" required />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewMotor;
