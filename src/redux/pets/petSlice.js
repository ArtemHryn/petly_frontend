import { createSlice } from '@reduxjs/toolkit';
import { addPet, deletePet, getPets } from './petsOperations';

const initialState = {
  pets: [],
  isLoading: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getPets.fulfilled, (state, action) => {
        state.pets = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getPets.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(getPets.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.pets = [...state.pets, action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addPet.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(addPet.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        const index = state.pets.findIndex(pet => pet._id === action.payload);
        state.pets.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deletePet.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(deletePet.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      }),
});

export const petsReducer = petsSlice.reducer;
