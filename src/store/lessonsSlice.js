import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLessons = createAsyncThunk(
  'lessons/fetchLessons',
  async () => {
    const response = await axios.get('http://localhost:8080/lessons');
    return response.data;
  }
);

const initialState = {
  lessons: [],
  status: "idle",
  error: null,
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.lessons = action.payload;
      })
  },
});

export default lessonsSlice.reducer;