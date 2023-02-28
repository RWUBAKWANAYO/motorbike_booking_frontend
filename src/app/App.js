import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../features/home/Home';
import Motorcycles from '../features/motorcycles/motorslist/MotorsList';
import MotorDetails from '../features/motorcycles/motordetails/MotorDetails';
import NewMotor from '../features/motorcycles/newmotor/NewMotor';
import DeleteMotor from '../features/motorcycles/deletemotor/DeleteMotor';
import MyReservations from '../features/reservation/myreservations/MyReservations';
import Reserve from '../features/reservation/reserve/Reserve';
import RequireAuth from '../common/RequireAuth';
import MissingRoute from '../features/unaccessible/MissingRoute';
import UnauthorizedRoute from '../features/unaccessible/UnauthorizedRoute';

const ROLES = { user: 'user', admin: 'admin' };

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route element={<RequireAuth allowedRole={ROLES.user} />}>
        <Route exact path="/motorcycles" element={<Motorcycles />} />
        <Route exact path="/motorcycles/:motorId/details" element={<MotorDetails />} />
        <Route exact path="/my_reservations" element={<MyReservations />} />
        <Route exact path="/reserve/:motorId" element={<Reserve />} />
      </Route>

      <Route element={<RequireAuth allowedRole={ROLES.admin} />}>
        <Route exact path="/add_motorcycle" element={<NewMotor />} />
        <Route exact path="/delete_motorcycle" element={<DeleteMotor />} />
      </Route>

      <Route path="/unauthorized" element={<UnauthorizedRoute />} />
      <Route path="*" element={<MissingRoute />} />
    </Routes>
    <ToastContainer autoClose={2000} />
  </>
);

export default App;
