import React, { useState } from 'react';
import './NewMotor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage, faCalendarWeek, faCircleDollarToSlot, faGrip,
} from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import Sidebar from '../../../common/sidebar/Sidebar';
import SidebarPop from '../../../common/sidebar/SidebarPop';
import { CreateMotors } from './newmotorSlice';
import CategorySelect from './CategorySelect';

const NewMotor = () => {
  const dispatch = useDispatch();

  const [motorData, setMotorData] = useState({
    motor_name: '',
    year: '',
    category_id: '',
    price: '',
    description: '',
    image: { text: 'Upload motorcylce Image', photo: '' },
  });

  const handleCategory = (ID) => setMotorData({ ...motorData, category_id: ID });

  const handleCreate = (e) => {
    e.preventDefault();
    if (motorData.category_id === '') return toast.error('Please select a category');
    toast.loading('Please wait...');
    const formData = new FormData();
    formData.append('file', motorData.image.photo);
    formData.append('upload_preset', 'finalcapstone');
    formData.append('cloud_name', 'nayo');
    return axios.post('https://api.cloudinary.com/v1_1/nayo/image/upload', formData)
      .then((res) => {
        toast.dismiss();
        const data = { ...motorData, image: res.data.url };
        return dispatch(CreateMotors(data));
      }).catch((err) => toast.error(err));
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
            <CategorySelect handleCategory={handleCategory} />
          </div>
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
              {motorData.image.text}
            </div>
            <input
              type="file"
              placeholder="Full name"
              required
              className="upload-image-input"
              style={{ color: motorData.image.text === 'Upload motorcylce Image' ? '' : '#000' }}
              onChange={(e) => {
                setMotorData({
                  ...motorData,
                  image: {
                    text: e.target.files[0].name,
                    photo: e.target.files[0],
                  },
                });
              }}
            />
          </div>
          <textarea
            className="add-motor-textarea-cont"
            placeholder="Motorcycle Description"
            required
            onChange={(e) => setMotorData({ ...motorData, description: e.target.value })}
          />
          <div className="submit-cont">
            <input type="submit" value="CREATE MOTORCYLE" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewMotor;
