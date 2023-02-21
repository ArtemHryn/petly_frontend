import { createSlice } from '@reduxjs/toolkit';
import { getSponsors } from './partnersOperations';

const initialState = {
  partners: [],
};

const partnersSlice = createSlice({
  name: 'sponsors',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getSponsors.fulfilled, (state, action) => {
        state.partners = action.payload.data;
      })
      .addCase(getSponsors.pending, (state, action) => {
        state.partners = null;
      })
      .addCase(getSponsors.rejected, (state, action) => {}),
});

export const partnersReducer = partnersSlice.reducer;
