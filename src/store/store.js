import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice';
import horseReducer from './horseSlice';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    horses: horseReducer,
  },
});

export default store;
