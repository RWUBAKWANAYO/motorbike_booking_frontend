import React from 'react';
import './unaccessible.css';

const UnauthorizedRoute = () => (
  <div className="missing-container">
    <div className="missing-wrapper">
      <div />
      <h1>401</h1>
      <h3>You&apos;re not authorized to access this route</h3>
    </div>
  </div>
);

export default UnauthorizedRoute;
