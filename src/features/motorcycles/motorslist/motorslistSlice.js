/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  motors: [],
  errors: [],
};

export const FetchMotors = createAsyncThunk('motorslist', async (mydata, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/motorbikes');
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
      state.loading = true; state.motors = []; state.errors = [];
    });
    builder.addCase(FetchMotors.fulfilled, (state, action) => {
      state.loading = false; state.motors = action.payload; state.errors = [];
    });
    builder.addCase(FetchMotors.rejected, (state, action) => {
      state.loading = false; state.motors = []; state.errors = action.error;
    });
  },
});

export default motorslistSlice.reducer;
