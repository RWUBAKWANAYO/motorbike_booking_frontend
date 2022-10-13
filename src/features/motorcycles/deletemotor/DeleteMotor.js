/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import '../../../common/ListAll.css';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../common/sidebar/Sidebar';
import SidebarPop from '../../../common/sidebar/SidebarPop';
import { FetchMotors } from '../motorslist/motorslistSlice';
import { DeleteMotors } from './deletemotorSlice';

const DeleteMotor = () => {
  const dispatch = useDispatch();
  const [motorbikes, setMotorbikes] = useState([]);

  const motorslist = useSelector((state) => state.motorslist);
  const deletemotor = useSelector((state) => state.deletemotor.motor);

  useEffect(() => { dispatch(FetchMotors()); }, []);
  useEffect(() => { setMotorbikes(motorslist.motors); }, [motorslist]);
  useEffect(() => {
    setMotorbikes(motorbikes.filter((el) => el.id !== deletemotor.id));
  }, [deletemotor]);

  const handleClick = (motorid) => dispatch(DeleteMotors(motorid));

  return (
    <div className="list-all-cont">
      <Sidebar />
      <SidebarPop />
      <div className="list-all-wrapper">
        <h1 className="list-all-header">DELETE MOTORCYLE</h1>
        <table className="list-all-table">
          <thead>
            <tr>
              <th>Motorcycle Image</th>
              <th>Motorcycle Name</th>
              <th>Action To Take</th>
            </tr>
          </thead>
          <tbody>
            {motorslist.loading && <>loading....</>}
            {motorslist.motors.length > 0 && motorbikes.map((motor) => (
              <tr key={motor.id}>
                <td><img src={motor.image} alt="motor" /></td>
                <td>{motor.name}</td>
                <td><button type="button" onClick={() => handleClick(motor.id)}>Delete</button></td>
              </tr>
            ))}
            {motorslist.errors.length > 0 && <>Error</>}
          </tbody>
        </table>
        <div />
      </div>
    </div>
  );
};

export default DeleteMotor;
