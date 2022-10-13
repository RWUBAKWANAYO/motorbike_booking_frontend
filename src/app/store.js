/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import signupSlice from '../features/authenticate/signup/signupSlice';

export const store = configureStore({
  reducer: {
    signup: signupSlice,
  },

});
