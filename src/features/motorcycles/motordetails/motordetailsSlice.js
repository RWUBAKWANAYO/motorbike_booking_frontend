/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import UseAuth from '../../../common/UseAuth';

const initialState = {
  loading: false,
  motor: [],
  errors: [],
};

export const FetchMotorDetails = createAsyncThunk('motordetails', async (motorid, { rejectWithValue }) => {
  const id = toast.loading('Loading data....');
  try {
    const { config } = UseAuth();
    const response = await axios.get(`https://pacific-cove-79167.herokuapp.com/api/v1/motorbikes/${motorid}`, config);
    toast.update(id, {
      render: 'Motor Displayed successfully',
      type: 'success',
      autoClose: 2000,
      isLoading: false,
    });
    return response.data;
  } catch (error) {
    toast.update(id, {
      render: 'Fail to load motor details',
      type: 'error',
      autoClose: 2000,
      isLoading: false,
    });
    return rejectWithValue(error);
  }
});

const motordetailsSlice = createSlice({
  name: 'motordetails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchMotorDetails.pending, (state) => {
      state.loading = true;
      state.motor = [];
      state.errors = [];
    });
    builder.addCase(FetchMotorDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.motor = action.payload;
      state.errors = [];
    });
    builder.addCase(FetchMotorDetails.rejected, (state, action) => {
      state.loading = false;
      state.motor = [];
      state.errors = action.error;
    });
  },
});

export default motordetailsSlice.reducer;
