import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './userOperations';

const initialState = {
  user: {
    name: 'Kseniia',
    email: 'kellyshikova3004@gmail.com',
    city: 'Kh',
    phone: '+980666805185',
    userPhotoURL: null,
    birthday: '30/04/1994',
  },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YwYWQ0ZGY0MjZlY2UyYTJiNWViMzkiLCJlbWFpbCI6ImtlbGx5c2hpa292YTMwMDRAZ21haWwuY29tIiwiaWF0IjoxNjc2NzQ4ODM0LCJleHAiOjE2NzY4MzUyMzR9.P1gy6R6s40UBfB3LHKvEr_0hppzE7U0qlVb7tVFcieg',
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
      .addCase(updateUser.pending, (state, action) => {
        console.log('arg', action.meta.arg);
      })
      .addCase(updateUser.rejected, (state, action) => {}),
});

export const userPageReducer = userInfoSlice.reducer;
