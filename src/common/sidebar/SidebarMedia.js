import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faLinkedinIn, faGithub, faDiscord, faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';

const SidebarMedia = () => {
  const links = [
    { id: 1, path: '/twitter', icon: faTwitter },
    { id: 2, path: '/gmail', icon: faGooglePlusG },
    { id: 3, path: '/github', icon: faGithub },
    { id: 4, path: '/linkein', icon: faLinkedinIn },
    { id: 5, path: '/discord', icon: faDiscord },
  ];

  return (
    <div className="media-links">
      <div>
        {links.map((el) => (
          <NavLink key={el.id} to={el.path}>
            <FontAwesomeIcon icon={el.icon} className="facebook" />
          </NavLink>
        ))}
      </div>
      <p>@2022 MOTORBIKE BOOKING</p>
    </div>
  );
};

export default SidebarMedia;
