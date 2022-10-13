import React from 'react';
import '../../../common/ListAll.css';
import Sidebar from '../../../common/sidebar/Sidebar';
import SidebarPop from '../../../common/sidebar/SidebarPop';
import motor1 from '../../../assets/images/motor1.png';

const DeleteMotor = () => (
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
          {Array.from(Array(10).keys()).map((motor) => (
            <tr key={motor}>
              <td><img src={motor1} alt="motor" /></td>
              <td>VSP C-20</td>
              <td><button type="button">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div />
    </div>
  </div>
);

export default DeleteMotor;
