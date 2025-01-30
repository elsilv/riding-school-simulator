import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ownedHorses: [],
};

const horseSlice = createSlice({
  name: 'horses',
  initialState,
  reducers: {
    addHorse: (state, action) => {
      state.ownedHorses.push(action.payload);
    },
  },
});

export const { addHorse } = horseSlice.actions;
export default horseSlice.reducer;
