import { deleteNotice, fetchNotices } from './notices-operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  notices: [],
  cardOwner: {},
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.notices = action.payload;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteNotice.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.notices.findIndex(
          notice => notice._id === action.payload
        );
        state.notices.splice(index, 1);
      })
      .addCase(deleteNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }),
});

export const noticesReducer = noticesSlice.reducer;
