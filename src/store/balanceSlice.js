import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = "http://localhost:8080/balance";

export const fetchBalance = createAsyncThunk('balance/fetchBalance',
  async (userId) => {
    const response = await fetch (`http://localhost:8080/balance/${userId}`);
    const data = await response.json();
    console.log('Value: ', data.amount)
    return data;
  });

export const updateBalance = createAsyncThunk("balance/updateBalance",
  async ({userId, newBalance}) => {
    const response = await fetch(`http://localhost:8080/balance/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: newBalance }),
    });
    const data = await response.json();
    return data.amount;
    });

const initialState = {
  amount: 0,
  status: "idle",
  error: null,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBalance.fulfilled, (state, action) => {
        state.amount = action.payload.amount;
      })
      .addCase(updateBalance.fulfilled, (state, action) => {
        state.amount = action.payload;
      });
  }
});

export default balanceSlice.reducer;
