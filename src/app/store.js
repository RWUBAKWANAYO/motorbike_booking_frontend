/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import deletemotorSlice from '../features/motorcycles/deletemotor/deletemotorSlice';
import motordetailsSlice from '../features/motorcycles/motordetails/motordetailsSlice';
import motorslistSlice from '../features/motorcycles/motorslist/motorslistSlice';
import newmotorSlice from '../features/motorcycles/newmotor/newmotorSlice';

export const store = configureStore({
  reducer: {
    motorslist: motorslistSlice,
    newmotor: newmotorSlice,
    deletemotor: deletemotorSlice,
    motordetails: motordetailsSlice,
  },
});
