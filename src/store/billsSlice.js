import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBills = createAsyncThunk(
  'bills/fetchBills',
  async () => {
    const response = await axios.get('http://localhost:8080/bills');
    return response.data;
  }
);

export const fetchUnpaidBills = createAsyncThunk(
    'bills/fetchUnpaidBills',
    async () => {
      const response = await axios.get('http://localhost:8080/bills/unpaid');
      return response.data;
    }
  );

const initialState = {
  bills: [],
  unpaidBills: [],
  status: "idle",
  error: null,
};

const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBills.fulfilled, (state, action) => {
        state.bills = action.payload;
      })
      .addCase(fetchUnpaidBills.fulfilled, (state, action) => {
          state.unpaidBills = action.payload;
        })
  },
});

export default billsSlice.reducer;