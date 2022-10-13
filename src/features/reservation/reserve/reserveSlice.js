import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  motor: [],
  errors: [],
};

export const ReserveMotor = createAsyncThunk('reservemotor', async (motorid, { rejectWithValue }) => {
  const id = toast.loading('Reserving...');
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/reserve/${motorid}`);
    toast.update(id, {
      render: 'Motor Reserved!', type: toast.TYPE.SUCCESS, isLoading: false, autoClose: 2000,
    });
    return response.data;
  } catch (error) {
    toast.update(id, {
      render: 'Failed to reserve motor', type: toast.TYPE.ERROR, isLoading: false, autoClose: 2000,
    });
    return rejectWithValue(error);
  }
});

const reserveSlice = createSlice({
  name: 'reservemotor',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(ReserveMotor.pending, (state) => {
      state.loading = true; state.motor = []; state.errors = [];
    });
    builder.addCase(ReserveMotor.fulfilled, (state, { payload }) => {
      state.loading = false; state.motor = payload; state.errors = [];
    });
    builder.addCase(ReserveMotor.rejected, (state, { payload }) => {
      state.loading = false; state.motor = []; state.errors = payload;
    });
  },
});

export default reserveSlice.reducer;
