import React from "react";
import propTypes from "prop-types";

const Reservation = (props) => {
    const { reservation, motorcycles } = props;
    const motorcyle = motorcycles.length > 0 
    && motorcycles.find(motor) => motor.id === reservation.motorcycleId;

    return (
       <tr>
        <td>{motorcyle.model}</td>
        <td>{reservation.date}</td>
        <td>{reservation.city}</td>
       </tr>
    );
};

Reservation.propTypes = {
    reservation: propTypes.arrayOf.isRequired,
    motorcycles: propTypes.arrayOf.isRequired,
};

export default Reservation;