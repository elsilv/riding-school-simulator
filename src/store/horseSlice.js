import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHorses = createAsyncThunk(
  'horses/fetchHorses',
  async () => {
    const response = await axios.get('http://localhost:8080/horses');
    return response.data;
  }
);

export const addHorseAsync = createAsyncThunk(
  'horses/addHorseAsync',
  async (horseData) => {
    const response = await axios.post('http://localhost:8080/horses', horseData);
    return response.data;
  }
);

const initialState = {
  ownedHorses: [],
  status: 'idle',
  error: null,
};

const horseSlice = createSlice({
  name: 'horses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHorses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHorses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ownedHorses = action.payload;
      })
      .addCase(fetchHorses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addHorseAsync.fulfilled, (state, action) => {
        state.ownedHorses.push(action.payload);
      });
  },
});

export default horseSlice.reducer;
