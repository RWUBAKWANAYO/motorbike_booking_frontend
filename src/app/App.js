import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyReservations from '../features/reservation/myreservations/MyReservations';
import Reserve from '../features/reservation/reserve/Reserve';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" />
        <Route exact path="/motorcycles" />
        <Route exact path="/motorcycles/:motor_id/details" />
        <Route exact path="/add_motorcycle" />
        <Route exact path="/delete_motorcycle" />
        <Route exact path="/my_reservations" element={<MyReservations />} />
        <Route exact path="/reserve/:motor_id" element={<Reserve />} />
      </Routes>
    </div>
  );
}

export default App;
