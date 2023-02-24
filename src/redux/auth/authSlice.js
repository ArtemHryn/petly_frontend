import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  fetchUser,
  logIn,
  logout,
  pushUserPhoto,
  register,
  updateLike,
  updateUser,
  verifyUser,
} from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
    city: null,
    phone: null,
    userPhotoURL: null,
    birthday: null,
    favorites: [],
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  favoriteError: null,
  isChangingFavorite: false,
  isUpdating: false,
  isVerified: false,
};

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = { ...action.payload.user };
        state.token = action.payload.token;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(fetchUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = { ...action.payload.user };
        state.error = null;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateLike.pending, state => {
        state.error = null;
        state.isChangingFavorite = true;
      })
      .addCase(updateLike.rejected, (state, action) => {
        state.favoriteError = action.payload;
        state.isChangingFavorite = false;
      })
      .addCase(updateLike.fulfilled, (state, action) => {
        state.error = null;
        state.isChangingFavorite = false;
        if (action.payload.isLiked) {
          state.user.favorites.push(action.payload._id);
          return;
        }
        const index = state.user.favorites.findIndex(
          favorite => favorite === action.payload._id
        );
        state.user.favorites.splice(index, 1);
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const [data] = Object.entries(payload);
        const [name, value] = data;
        state.user = {
          ...state.user,
          [name]: value,
        };
        state.isUpdating = false;
      })
      .addCase(updateUser.pending, state => {
        state.isUpdating = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isUpdating = false;
      })
      .addCase(logout.fulfilled, state => {
        state.token = null;
        state.isLoggedIn = false;
        state.user = initialState.user;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(pushUserPhoto.fulfilled, (state, action) => {
        state.user.userPhotoURL = action.payload.userPhotoURL;
        state.isUpdating = false;
      })
      .addCase(pushUserPhoto.pending, (state, action) => {
        state.isUpdating = true;
      })
      .addCase(pushUserPhoto.rejected, (state, action) => {
        state.error = action.payload;
        state.isUpdating = false;
      })
      .addCase(verifyUser.fulfilled, (state, _) => {
        state.isVerified = true;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
