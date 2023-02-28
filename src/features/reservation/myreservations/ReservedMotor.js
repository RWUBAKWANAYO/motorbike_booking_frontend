import PropTypes from 'prop-types';

const ReservedMotor = ({ motorId, motorslist }) => {
  const motorbike = motorslist.filter((motor) => motor.id === motorId);
  return motorbike.length > 0 ? (motorbike[0].image) : null;
};
export default ReservedMotor;

ReservedMotor.propTypes = {
  motorId: PropTypes.number.isRequired,
  motorslist: PropTypes.arrayOf(PropTypes.object = {
    id: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};
