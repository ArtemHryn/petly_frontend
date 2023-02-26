import { createSlice } from '@reduxjs/toolkit';
import { getSponsors } from './partnersOperations';

const initialState = {
  partners: null,
  isLoading: false,
  error: null
};

const partnersSlice = createSlice({
  name: 'sponsors',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getSponsors.fulfilled, (state, action) => {
        state.partners = action.payload.data;
        state.isLoading = false
      })
      .addCase(getSponsors.pending, state => {
        state.isLoading = true
        state.partners = null;
      })
      .addCase(getSponsors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message
      }),
});

export const partnersReducer = partnersSlice.reducer;
