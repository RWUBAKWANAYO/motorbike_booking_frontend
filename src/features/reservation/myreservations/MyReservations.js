import React from 'react';
import '../../../common/ListAll.css';
import Sidebar from '../../../common/sidebar/Sidebar';
import SidebarPop from '../../../common/sidebar/SidebarPop';
import motor1 from '../../../assets/images/motor1.png';

const MyReservations = () => (
  <div className="list-all-cont">
    <Sidebar />
    <SidebarPop />
    <div className="list-all-wrapper">
      <h1 className="list-all-header">MY RESERVATIONS</h1>
      <table className="list-all-table">
        <thead>
          <tr>
            <th>Motorcycle Image</th>
            <th>Motorcycle Name</th>
            <th>Reservation Date</th>
            <th>City Of Reservation</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(10).keys()).map((motor) => (
            <tr key={motor}>
              <td><img src={motor1} alt="motor" /></td>
              <td>VSP C-20</td>
              <td>2022/07/11</td>
              <td>London</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div />
    </div>
  </div>
);

export default MyReservations;
