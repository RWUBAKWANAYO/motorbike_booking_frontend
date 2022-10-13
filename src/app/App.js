import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../features/home/Home';
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

        <Route exact path="/" element={<Home />} />
        <Route exact path="/motorcycles" element={<Motorcycles />} />
        <Route exact path="/motorcycles/:motor_id/details" element={<MotorDetails />} />
        <Route exact path="/add_motorcycle" element={<NewMotor />} />
        <Route exact path="/delete_motorcycle" element={<DeleteMotor />} />
        <Route exact path="/my_reservations" element={<MyReservations />} />
        <Route exact path="/reserve/:motor_id" element={<Reserve />} />
      </Routes>
    </div>
  );
}

export default App;
