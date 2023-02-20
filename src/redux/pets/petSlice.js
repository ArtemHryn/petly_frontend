import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pets: [],
  isLoading: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: builder => builder,
  // .addCase(.fulfilled, (state, action) => {})
  // .addCase(.pending, (state, action) => {})
  // .addCase(.rejected, (state, action) => {}),
});

export const petsReducer = petsSlice.reducer;
