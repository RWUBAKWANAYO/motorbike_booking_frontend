import React, { useState } from 'react';
import './Authenticate.css';
import Signin from './signin/Signin';
import Signup from './signup/Signup';

const Authenticate = () => {
  const [activePage, setActivePage] = useState(true);
  const ChangePage = (status) => setActivePage(status);
  return (
    <div className="auth-wrapper">
      {activePage && <Signin ChangePage={ChangePage} />}
      {!activePage && <Signup ChangePage={ChangePage} />}
    </div>
  );
};

export default Authenticate;
