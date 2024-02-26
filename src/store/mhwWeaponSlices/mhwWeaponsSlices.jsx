import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllWeapons = createAsyncThunk('weapons/getAll', async (url) => {
 const response = await axios.get(url);
 return response.data;
});

const weaponsSlice = createSlice({
 name: 'weapons',
 initialState: [],
 reducers: {},
 extraReducers: (builder) => {
  builder
    .addCase(getAllWeapons.fulfilled, (state, action) => {
      return action.payload;
    });
 },
});

export default weaponsSlice.reducer;