/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import '../../../common/ListAll.css';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../common/sidebar/Sidebar';
import SidebarPop from '../../../common/sidebar/SidebarPop';
import { FetchReservations } from './myreservationSlice';

const MyReservations = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(FetchReservations()); }, []);
  const reserved = useSelector((state) => state.reservations);
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
            </tr>
          </thead>
          <tbody>
            {reserved.loading && <>loading....</>}
            {reserved.reserved.length > 0 && reserved.reserved.map((res) => (
              <tr key={res.id}>
                <td>{res.city}</td>
                <td>{res.date}</td>
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
