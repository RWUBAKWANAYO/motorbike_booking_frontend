/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import SaveCredentials from '../SaveCredentials';

const initialState = {
  user: [],
  loading: false,
  errors: [],
};

export const RegisterUser = createAsyncThunk('signup', async (userData, { rejectWithValue }) => {
  const id = toast.loading('Please wait...');
  try {
    const response = await axios.post('https://pacific-cove-79167.herokuapp.com/signup', { user: userData });
    SaveCredentials({ authorization: response.headers.authorization, user: response.data.user });
    toast.update(id, {
      render: response.data.message,
      type: 'success',
      autoClose: 2000,
      isLoading: false,
    });
    return response.data;
  } catch (error) {
    const err = error.response.data.errors || ['something went wrong'];
    toast.update(id, {
      render: err[0],
      type: 'error',
      autoClose: 2000,
      isLoading: false,
    });
    return rejectWithValue(err);
  }
});

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    SignupReset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(RegisterUser.pending, (state) => {
      state.loading = true;
      state.user = [];
      state.errors = false;
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = [action.payload.user];
      state.errors = [];
    });
    builder.addCase(RegisterUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.errors = action.payload;
    });
  },
});

export const { SignupReset } = signupSlice.actions;
export default signupSlice.reducer;
