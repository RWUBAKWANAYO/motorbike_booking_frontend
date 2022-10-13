import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Motorcycles from '../features/motorcycles/motorslist/MotorsList';
import MotorDetails from '../features/motorcycles/motordetails/MotorDetails';
import NewMotor from '../features/motorcycles/newmotor/NewMotor';
import DeleteMotor from '../features/motorcycles/deletemotor/DeleteMotor';
import MyReservations from '../features/reservation/myreservations/MyReservations';
import Reserve from '../features/reservation/reserve/Reserve';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" />
        <Route exact path="/motorcycles" element={<Motorcycles />} />
        <Route exact path="/motorcycles/:motorid/details" element={<MotorDetails />} />
        <Route exact path="/add_motorcycle" element={<NewMotor />} />
        <Route exact path="/delete_motorcycle" element={<DeleteMotor />} />
        <Route exact path="/my_reservations" element={<MyReservations />} />
        <Route exact path="/reserve/:motorid" element={<Reserve />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
