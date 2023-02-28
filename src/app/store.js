/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import signupSlice from '../features/authenticate/signup/signupSlice';
import signinSlice from '../features/authenticate/signin/signinSlice';
import authenticateSlice from '../features/authenticate/authenticateSlice';
import motorslistSlice from '../features/motorcycles/motorslist/motorslistSlice';
import newmotorSlice from '../features/motorcycles/newmotor/newmotorSlice';
import deletemotorSlice from '../features/motorcycles/deletemotor/deletemotorSlice';
import motordetailsSlice from '../features/motorcycles/motordetails/motordetailsSlice';
import reservationslistSlice from '../features/reservation/myreservations/myreservationSlice';
import reserveSlice from '../features/reservation/reserve/reserveSlice';
import categoriesSlice from '../features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    authforms: authenticateSlice,
    signup: signupSlice,
    signin: signinSlice,
    categories: categoriesSlice,
    motorslist: motorslistSlice,
    newmotor: newmotorSlice,
    deletemotor: deletemotorSlice,
    motordetails: motordetailsSlice,
    reservations: reservationslistSlice,
    newreserve: reserveSlice,
  },

});
