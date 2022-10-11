import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import motor1 from '../../../assets/images/motor1.png';
import Sidebar from '../../../common/sidebar/Sidebar';
import './Reserve.css';

const Reserve = () => (
  <div className="list-all-cont">
    <Sidebar />
    <div className="list-all-wrapper">
      <FontAwesomeIcon icon={faBars} />
      <div>
        <h1>BOOK A VERSPA C-20 MOTORCYCLE</h1>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </p>

        <form>
          <select name="City">
            {Array.from(Array(10).keys()).map((el) => <option key={el} value="London">London</option>)}
          </select>
          <input type="date" id="birthday" name="birthday" />
          <input type="submit" value="Book" />
        </form>
      </div>
    </div>
  </div>
);

export default Reserve;
