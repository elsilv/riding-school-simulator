import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBills = createAsyncThunk(
  'bills/fetchBills',
  async (userId) => {
    const response = await axios.get(`http://localhost:8080/bills/${userId}`);
    return response.data;
  }
);

export const fetchUnpaidBills = createAsyncThunk(
    'bills/fetchUnpaidBills',
    async (userId) => {
      const response = await axios.get(`http://localhost:8080/bills/${userId}/unpaid`);
      return response.data;
    }
  );

export const payBill = createAsyncThunk(
  'bills/payBill',
  async (billId) => {
    const response = await axios.put(`http://localhost:8080/bills/${billId}/pay`);
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
      .addCase(payBill.fulfilled, (state, action) => {
        const updatedBill = action.payload;
        const index = state.bills.findIndex((bill) => bill.id === updatedBill.id);
        if (index !== -1) {
          state.bills[index] = updatedBill;
        }
      })
  },
});

export default billsSlice.reducer;