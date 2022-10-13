import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import profile from '../../../assets/images/profile.png';

const Signup = ({ ChangePage }) => (
  <form className="auth-form">
    <img src={profile} alt="profile" />
    <div className="input-cont">
      <FontAwesomeIcon icon={faUser} className="auth-icon" />
      <input type="text" placeholder="Full name" required />
    </div>
    <div className="input-cont">
      <FontAwesomeIcon icon={faEnvelope} className="auth-icon" />
      <input type="email" placeholder="Email" required />
    </div>
    <div className="input-cont">
      <FontAwesomeIcon icon={faLock} className="auth-icon" />
      <input type="text" placeholder="Password" required />
    </div>
    <div className="input-cont">
      <FontAwesomeIcon icon={faLock} className="auth-icon" />
      <input type="text" placeholder="Confirm password" required />
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

Signup.propTypes = {
  ChangePage: PropTypes.func.isRequired,
};
export default Signup;
