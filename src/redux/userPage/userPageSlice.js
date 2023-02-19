import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './userOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    city: null,
    phone: null,
    userPhotoURL: null,
    birthday: null,
  },
  token: null,
  isLoggedIn: true,
  isRefreshing: false,
  error: null,
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(updateUser.fulfilled, (state, action) => {})
      .addCase(updateUser.pending, (state, action) => {})
      .addCase(updateUser.rejected, (state, action) => {}),
});

export const userPageReducer = userInfoSlice.reducer;
