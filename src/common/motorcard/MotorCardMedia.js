import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faLinkedinIn, faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';

const MotorCardMedia = () => {
  const links = [
    { id: 2, path: '/gmail', icon: faGooglePlusG },
    { id: 1, path: '/twitter', icon: faTwitter },
    { id: 4, path: '/linkein', icon: faLinkedinIn },
  ];

  return (
    <div className="motor-media-links">
      {links.map((el) => (
        <NavLink key={el.id} to={el.path}>
          <FontAwesomeIcon icon={el.icon} className="facebook" />
        </NavLink>
      ))}
    </div>
  );
};

export default MotorCardMedia;
