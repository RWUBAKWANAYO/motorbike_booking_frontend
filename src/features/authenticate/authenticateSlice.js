/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const authenticateSlice = createSlice({
  name: 'authforms',
  initialState: { visible: false },
  reducers: {
    HideForms: (state) => { state.visible = false; },
    ShowForms: (state) => { state.visible = true; },
  },
});

export const { HideForms, ShowForms } = authenticateSlice.actions;
export default authenticateSlice.reducer;
