import { createSlice } from '@reduxjs/toolkit';
import { addPet, deletePet, getPets } from './petsOperations';

const initialState = {
  pets: [],
  isLoading: false,
  error: null,
  isUpdating: false,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getPets.fulfilled, (state, action) => {
        state.pets = action.payload.pets;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getPets.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.pets = [action.payload, ...state.pets];
        state.isUpdating = false;
        state.error = null;
      })
      .addCase(addPet.pending, state => {
        state.isUpdating = true;
      })
      .addCase(addPet.rejected, (state, action) => {
        state.isUpdating = false;
        state.error = action.payload;
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        const index = state.pets.findIndex(pet => pet._id === action.payload);
        state.pets.splice(index, 1);
        state.isUpdating = false;
        state.error = null;
      })
      .addCase(deletePet.pending, state => {
        state.isUpdating = true;
      })
      .addCase(deletePet.rejected, (state, action) => {
        state.isUpdating = false;
        state.error = action.payload;
      }),
});

export const petsReducer = petsSlice.reducer;
