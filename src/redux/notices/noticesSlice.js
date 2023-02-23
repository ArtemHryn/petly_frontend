import {
  addNotice,
  deleteNotice,
  fetchNotices,
  getOwnerInfo,
} from './notices-operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  notices: [],
  cardOwner: {},
  isLoading: false,
  error: null,
  isUpdating: false,
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
        state.isUpdating = true;
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        state.isUpdating = false;
        state.error = null;
        const index = state.notices.findIndex(
          notice => notice._id === action.payload
        );
        state.notices.splice(index, 1);
      })
      .addCase(deleteNotice.rejected, (state, action) => {
        state.isUpdating = false;
        state.error = action.payload.message;
      })
      .addCase(getOwnerInfo.fulfilled, (state, action) => {
        state.error = null;
        state.cardOwner = { ...action.payload };
      })
      .addCase(getOwnerInfo.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(addNotice.pending, state => {
        state.isUpdating = true;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.isUpdating = false;
        state.notices.unshift(action.payload);
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.isUpdating = false;
        state.error = action.payload;
      }),
});

export const noticesReducer = noticesSlice.reducer;
