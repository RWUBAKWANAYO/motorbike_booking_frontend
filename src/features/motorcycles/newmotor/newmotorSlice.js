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

export const CreateMotors = createAsyncThunk('newmotor', async (newmotor, { rejectWithValue }) => {
  const id = toast.loading('Almost there....');
  try {
    const { config } = UseAuth();
    const response = await axios.post('https://pacific-cove-79167.herokuapp.com/api/v1/motorbikes', newmotor, config);
    toast.update(id, {
      render: 'Motor Created successfully',
      type: 'success',
      autoClose: 2000,
      isLoading: false,
    });
    return response.data;
  } catch (error) {
    toast.update(id, {
      render: 'Create Motor Failed',
      type: 'error',
      autoClose: 2000,
      isLoading: false,
    });
    return rejectWithValue(error);
  }
});

const newmotorlistSlice = createSlice({
  name: 'newmotor',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(CreateMotors.pending, (state) => {
      state.loading = true;
      state.motor = [];
      state.errors = [];
    });
    builder.addCase(CreateMotors.fulfilled, (state, action) => {
      state.loading = false;
      state.motor = action.payload;
      state.errors = [];
    });
    builder.addCase(CreateMotors.rejected, (state, action) => {
      state.loading = false;
      state.motor = [];
      state.errors = action.error;
    });
  },
});

export default newmotorlistSlice.reducer;
