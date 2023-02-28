/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import '../../../common/ListAll.css';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../common/sidebar/Sidebar';
import SidebarPop from '../../../common/sidebar/SidebarPop';
import { FetchReservations } from './myreservationSlice';
import { FetchMotors } from '../../motorcycles/motorslist/motorslistSlice';
import ReservedMotor from './ReservedMotor';

const MyReservations = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(FetchReservations()); dispatch(FetchMotors()); }, []);
  const reserved = useSelector((state) => state.reservations);
  const motorslist = useSelector((state) => state.motorslist.motors);

  return (
    <div className="list-all-cont">
      <Sidebar />
      <SidebarPop />
      <div className="list-all-wrapper">
        <h1 className="list-all-header">MY RESERVATIONS</h1>
        <table className="list-all-table">
          <thead>
            <tr>
              <th>City Of Reservation</th>
              <th>Reservation Date</th>
              <th>Reserved Bike</th>
            </tr>
          </thead>
          <tbody>
            {reserved.loading && <>loading....</>}
            {reserved.reserved.length > 0 && reserved.reserved.map((res) => (
              <tr key={res.id}>
                <td>{res.city}</td>
                <td>{res.date}</td>
                <td>
                  {motorslist.length > 0
                  && <img src={ReservedMotor({ motorId: res.motorbike_id, motorslist })} alt="motor" />}
                </td>
              </tr>

            ))}
            {reserved.errors.length > 0 && <>Error</>}
          </tbody>
        </table>
        <div />
      </div>
    </div>
  );
};

export default MyReservations;
