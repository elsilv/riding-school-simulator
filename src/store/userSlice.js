import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
    const response = await axios.get(`http://localhost:8080/users/${userId}`);
    return response.data;
  });

export const buyStall = createAsyncThunk(
  'user/buyStall',
  async (userId) => {
    const response = await axios.put(`http://localhost:8080/users/${userId}/buy-stall`);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    stallLimit: 6,
    balance: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    buyStall: (state) => {
      state.stallLimit += 1;
    },
  },
   extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stallLimit = action.payload.stallLimit || 6;
        state.balance = action.payload.balance;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(buyStall.fulfilled, (state, action) => {
        state.stallLimit = action.payload.stallLimit;
        state.balance = action.payload.balance;
      })
      .addCase(buyStall.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
