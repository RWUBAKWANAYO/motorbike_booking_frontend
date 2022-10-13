/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  motor: [],
  errors: [],
};

export const DeleteMotors = createAsyncThunk('deletemotor', async (motorid, { rejectWithValue }) => {
  const id = toast.loading('Deleting....');
  try {
    const response = await axios.delete(`http://127.0.0.1:3000/api/v1/motorbikes/${motorid}`);
    toast.update(id, {
      render: 'Motor Deleted successfully', type: 'success', autoClose: 2000, isLoading: false,
    });
    return { message: response.data, id: motorid };
  } catch (error) {
    toast.update(id, {
      render: 'Delete Motor Failed', type: 'error', autoClose: 2000, isLoading: false,
    });
    return rejectWithValue(error);
  }
});

const deletemotorSlice = createSlice({
  name: 'deletemotor',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(DeleteMotors.pending, (state) => {
      state.loading = true; state.motor = []; state.errors = [];
    });
    builder.addCase(DeleteMotors.fulfilled, (state, action) => {
      state.loading = false; state.motor = action.payload; state.errors = [];
    });
    builder.addCase(DeleteMotors.rejected, (state, action) => {
      state.loading = false; state.motor = []; state.errors = action.error;
    });
  },
});

export default deletemotorSlice.reducer;
