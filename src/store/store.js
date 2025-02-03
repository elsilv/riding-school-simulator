import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice';
import horseReducer from './horseSlice';
import lessonsReducer from './lessonsSlice';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    horses: horseReducer,
    lessons: lessonsReducer,
  },
});

export default store;
