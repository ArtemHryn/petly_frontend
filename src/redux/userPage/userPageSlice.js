import { createSlice } from '@reduxjs/toolkit';
import { getUser, updateUser } from './userOperations';

const initialState = {
  userPage: {
    name: null,
    email: null,
    city: null,
    phone: null,
    userPhotoURL: null,
    birthday: null,
  },
  userPetsList: {
    name: null,
    date: null,
    bread: null,
    avatarURL: null,
    comments: null,
  },
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getUser.fulfilled, (state, action) => {})
      .addCase(getUser.pending, (state, action) => {})
      .addCase(getUser.rejected, (state, action) => {})
      .addCase(updateUser.fulfilled, (state, action) => {})
      .addCase(updateUser.pending, (state, action) => {})
      .addCase(updateUser.rejected, (state, action) => {}),
});

export const userPageReducer = userInfoSlice.reducer;
