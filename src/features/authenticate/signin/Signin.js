import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import profile from '../../../assets/images/profile.png';

const Signin = ({ ChangePage }) => (
  <form className="auth-form">
    <img src={profile} alt="profile" />

    <div className="input-cont">
      <FontAwesomeIcon icon={faEnvelope} className="auth-icon" />
      <input type="email" placeholder="Email" required />
    </div>
    <div className="input-cont">
      <FontAwesomeIcon icon={faLock} className="auth-icon" />
      <input type="text" placeholder="Password" required />
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
Signin.propTypes = {
  ChangePage: PropTypes.func.isRequired,
};
export default Signin;
