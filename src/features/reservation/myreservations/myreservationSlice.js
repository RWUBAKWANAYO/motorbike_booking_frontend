/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import UseAuth from '../../../common/UseAuth';

const initialState = {
  loading: false,
  reserved: [],
  errors: [],
};

export const FetchReservations = createAsyncThunk('reservations', async (_, { rejectWithValue }) => {
  try {
    const { config, User } = UseAuth();
    const response = await axios.get(`https://pacific-cove-79167.herokuapp.com/api/v1/reservations/${User.id}`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const reservationslistSlice = createSlice({
  name: 'reservations',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchReservations.pending, (state) => {
      state.loading = true;
      state.reserved = [];
      state.errors = [];
    });
    builder.addCase(FetchReservations.fulfilled, (state, action) => {
      state.loading = false;
      state.reserved = action.payload.reservation;
      state.errors = [];
    });
    builder.addCase(FetchReservations.rejected, (state, action) => {
      state.loading = false;
      state.reserved = [];
      state.errors = action.error;
    });
  },
});

export default reservationslistSlice.reducer;
