import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  motor: [],
  errors: [],
};

export const ReserveMotor = createAsyncThunk('reservemotor', async (motorid, { rejectWithValue }) => {
    const id = toast.loading('Reserving...');
    try {
        const response = await axios.post(`http://localhost:5000/api/reserve/${motorid}`);
        toast.dismiss(id);
        toast.success('Motor Reserved Successfully');
        return response.data;
        } catch (error) {
            toast.dismiss(id);
            toast.error('Error Reserving Motor');
            return rejectWithValue(error.response.data);
        }
});

export const reserveSlice = createSlice({
    name: "reservemotor",
    initialState,
    reducers: {},
    extraReducers: {
        [ReserveMotor.pending]: (state) => {
            state.loading = true;
        },
        [ReserveMotor.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.motor = payload;
        },
        [ReserveMotor.rejected]: (state, { payload }) => {
            state.loading = false;
            state.errors = payload;
        },
    },
});