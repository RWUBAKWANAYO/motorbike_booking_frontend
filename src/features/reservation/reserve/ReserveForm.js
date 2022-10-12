import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Cities from './Cities';

const ReserveForm = () => {
  const [reserveData, setReserveData] = useState({ city: null, date: '' });
  return (
    <form className="reserve-form" required>
      <div className="reserve-item">
        <div className="reserve-display">
          <small>{reserveData.city ? reserveData.city : 'Select city'}</small>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.59808 1.5L5 6L2.40192 1.5L7.59808 1.5Z" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <select
          required
          onChange={(e) => setReserveData({ ...reserveData, city: e.target.value })}
        >
          {Cities.map((city) => <option key={city} value={city}>{city}</option>)}
        </select>
      </div>

      <div className="reserve-item">
        <div className="reserve-display">
          <small>{reserveData.date ? reserveData.date : 'Select date'}</small>
          <i><FontAwesomeIcon icon={faCalendar} /></i>
        </div>

        <input
          type="date"
          className="reserve-date"
          required
          onChange={(e) => setReserveData({ ...reserveData, date: e.target.value })}
        />
      </div>

      <input type="submit" value="Book Now" className="reserve-submit" />
    </form>
  );
};

export default ReserveForm;
