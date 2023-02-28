import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { RegisterUser } from './signupSlice';
import profile from '../../../assets/images/profile.png';

const Signup = ({ ChangePage }) => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const HandleSignup = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(userData));
  };
  return (
    <form className="auth-form" onSubmit={(e) => HandleSignup(e)}>
      <img src={profile} alt="profile" />
      <div className="input-cont">
        <FontAwesomeIcon icon={faUser} className="auth-icon" />
        <input
          type="text"
          placeholder="Full name"
          required
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </div>
      <div className="input-cont">
        <FontAwesomeIcon icon={faEnvelope} className="auth-icon" />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div className="input-cont">
        <FontAwesomeIcon icon={faLock} className="auth-icon" />
        <input
          type="text"
          placeholder="Password"
          required
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
      </div>
      <div className="input-cont">
        <FontAwesomeIcon icon={faLock} className="auth-icon" />
        <input
          type="text"
          placeholder="Confirm password"
          required
          onChange={(e) => setUserData({ ...userData, confirm_password: e.target.value })}
        />
      </div>
      <div className="submit-cont">
        <input type="submit" value="REGISTER" required />
      </div>

      <div className="navigate-cont">
        Arleady have an account!&nbsp;
        <button type="button" onClick={() => ChangePage(true)}>Signin</button>
      </div>
    </form>
  );
};

Signup.propTypes = {
  ChangePage: PropTypes.func.isRequired,
};
export default Signup;
