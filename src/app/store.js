/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import signupSlice from '../features/authenticate/signup/signupSlice';
import signinSlice from '../features/authenticate/signin/signinSlice';
import authenticateSlice from '../features/authenticate/authenticateSlice';
import motorslistSlice from '../features/motorcycles/motorslist/motorslistSlice';
import newmotorSlice from '../features/motorcycles/newmotor/newmotorSlice';
import deletemotorSlice from '../features/motorcycles/deletemotor/deletemotorSlice';
import reserveSlice from '../features/reservation/reserve/reserveSlice';

export const store = configureStore({
  reducer: {
    authforms: authenticateSlice,
    signup: signupSlice,
    signin: signinSlice,
    motorslist: motorslistSlice,
    newmotor: newmotorSlice,
    deletemotor: deletemotorSlice,
    reservemotor: reserveSlice,
  },

});
