import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Authenticate.css';
import { HideForms } from './authenticateSlice';
import Signin from './signin/Signin';
import Signup from './signup/Signup';

const Authenticate = () => {
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(true);
  const ChangePage = (status) => setActivePage(status);

  return (
    <div className="auth-wrapper">
      <div
        className="auth-bg"
        onClick={() => dispatch(HideForms())}
        aria-hidden="true"
      />
      {activePage && <Signin ChangePage={ChangePage} />}
      {!activePage && <Signup ChangePage={ChangePage} />}
    </div>
  );
};

export default Authenticate;
