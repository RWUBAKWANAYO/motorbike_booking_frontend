/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import UseAuth from '../../common/UseAuth';

const initialState = {
  loading: false,
  categories: [],
  errors: [],
};

export const FetchCategories = createAsyncThunk('categories', async (_, { rejectWithValue }) => {
  try {
    const { config } = UseAuth();
    const response = await axios.get('https://pacific-cove-79167.herokuapp.com/api/v1/categories', config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchCategories.pending, (state) => {
      state.loading = true;
      state.categories = [];
      state.errors = [];
    });
    builder.addCase(FetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.errors = [];
    });
    builder.addCase(FetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.categories = [];
      state.errors = action.error;
    });
  },
});

export default categoriesSlice.reducer;
