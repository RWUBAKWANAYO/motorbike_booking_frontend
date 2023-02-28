/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import UseAuth from '../../../common/UseAuth';

const initialState = {
  loading: false,
  motors: [],
  errors: [],
};

export const FetchMotors = createAsyncThunk('motorslist', async (_, { rejectWithValue }) => {
  try {
    const { config } = UseAuth();
    const response = await axios.get('https://pacific-cove-79167.herokuapp.com/api/v1/motorbikes', config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const motorslistSlice = createSlice({
  name: 'motorslist',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchMotors.pending, (state) => {
      state.loading = true;
      state.motors = [];
      state.errors = [];
    });
    builder.addCase(FetchMotors.fulfilled, (state, action) => {
      state.loading = false;
      state.motors = action.payload;
      state.errors = [];
    });
    builder.addCase(FetchMotors.rejected, (state, action) => {
      state.loading = false;
      state.motors = [];
      state.errors = action.error;
    });
  },
});

export default motorslistSlice.reducer;
