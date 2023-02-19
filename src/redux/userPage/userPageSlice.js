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
  // token:
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YwYWQ0ZGY0MjZlY2UyYTJiNWViMzkiLCJlbWFpbCI6ImtlbGx5c2hpa292YTMwMDRAZ21haWwuY29tIiwiaWF0IjoxNjc2ODQyNTc5LCJleHAiOjE2NzY5Mjg5Nzl9.DSJYAc2BoPN5FiAfoLhXblKTUs3p4QebM0SvYr_7fvo',
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
      .addCase(updateUser.fulfilled, (state, action) => {
        const keys = Object.keys(state.userInfo.user);
        const key = Object.keys(action.meta.arg);
        if (keys.includes(key.join(''))) {
          state.userInfo.user[key] = Object.values(action.meta.arg).join('');
        }
      })
      .addCase(updateUser.pending, (state, action) => {})
      .addCase(updateUser.rejected, (state, action) => {}),
});

export const userPageReducer = userInfoSlice.reducer;
