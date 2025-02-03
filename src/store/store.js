import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice';
import horseReducer from './horseSlice';
import lessonsReducer from './lessonsSlice';
import billsReducer from './billsSlice.js';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    horses: horseReducer,
    lessons: lessonsReducer,
    bills: billsReducer,
  },
});

export default store;
