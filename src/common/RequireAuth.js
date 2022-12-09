/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import UseAuth from './UseAuth';

const RequireAuth = ({ allowedRole }) => {
  const location = useLocation();
  const { User } = UseAuth();
  if (!User) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (User) {
    if (User.role === allowedRole || User.role === 'admin') return <Outlet />;
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }
};

RequireAuth.propTypes = {
  allowedRole: PropTypes.string.isRequired,
};

export default RequireAuth;
