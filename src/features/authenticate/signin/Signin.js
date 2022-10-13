import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginUser } from './signinSlice';
import profile from '../../../assets/images/profile.png';

const Signin = ({ ChangePage }) => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({ email: '', password: '' });

  const HandleSignin = (e) => {
    e.preventDefault();
    dispatch(LoginUser(userData));
  };
  return (
    <form className="auth-form" onSubmit={(e) => HandleSignin(e)}>
      <img src={profile} alt="profile" />

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

      <div className="submit-cont">
        <input type="submit" value="LOGIN" required />
      </div>

      <div className="navigate-cont">
        Don&apos;t havean account?&nbsp;

        <button type="button" onClick={() => ChangePage(false)}>Signup</button>
      </div>
    </form>
  );
};

Signin.propTypes = {
  ChangePage: PropTypes.func.isRequired,
};
export default Signin;
