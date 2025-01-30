import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: 10000,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    increaseBalance: (state, action) => {
      state.amount += action.payload;
    },
    decreaseBalance: (state, action) => {
      if (state.amount >= action.payload) {
        state.amount -= action.payload;
      }
    },
  },
});

export const { increaseBalance, decreaseBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
