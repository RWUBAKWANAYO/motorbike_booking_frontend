const ReservedMotor = ({ motorId, motorslist }) => {
  const motorbike = motorslist.filter((motor) => motor.id === motorId);
  console.log(motorbike, 'motorbike[0].image');
  return motorbike.length > 0 ? (motorbike[0].image) : null;
};
export default ReservedMotor;
