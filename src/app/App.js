import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DeleteMotor from '../features/motorcycles/deletemotor/DeleteMotor';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" />
        <Route exact path="/motorcycles" />
        <Route exact path="/motorcycles/:motor_id/details" />
        <Route exact path="/add_motorcycle" />
        <Route exact path="/delete_motorcycle" element={<DeleteMotor />} />
        <Route exact path="/my_reservations" />
        <Route exact path="/reserve/:motor_id" />
      </Routes>
    </div>
  );
}

export default App;
