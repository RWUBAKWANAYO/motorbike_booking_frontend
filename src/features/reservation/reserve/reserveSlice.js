/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import UseAuth from '../../../common/UseAuth';

const initialState = {
  loading: false,
  reserve: [],
  errors: [],
};

export const CreateReservation = createAsyncThunk('newreserve', async (newreserve, { rejectWithValue }) => {
  const id = toast.loading('Loading....');
  try {
    const { config } = UseAuth();
    const response = await axios.post('https://pacific-cove-79167.herokuapp.com/api/v1/reservations',
      newreserve, config);
    toast.update(id, {
      render: 'Motor Reserved successfully',
      type: 'success',
      autoClose: 2000,
      isLoading: false,
    });
    return response.data;
  } catch (error) {
    toast.update(id, {
      render: 'Reserve Motor Failed',
      type: 'error',
      autoClose: 2000,
      isLoading: false,
    });
    return rejectWithValue(error);
  }
});

const newreserveSlice = createSlice({
  name: 'newreserve',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(CreateReservation.pending, (state) => {
      state.loading = true;
      state.reserve = [];
      state.errors = [];
    });
    builder.addCase(CreateReservation.fulfilled, (state, action) => {
      state.loading = false;
      state.reserve = action.payload;
      state.errors = [];
    });
    builder.addCase(CreateReservation.rejected, (state, action) => {
      state.loading = false;
      state.reserve = [];
      state.errors = action.error;
    });
  },
});

export default newreserveSlice.reducer;
