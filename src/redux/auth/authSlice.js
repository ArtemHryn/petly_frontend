import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logIn, register } from './auth-operations';

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
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
    initialState,
  extraReducers: builder => builder.addCase(logIn.fulfilled, (state, action) => { }.addCase(register.fulfilled, (state, action) => {
    state.user = {...state.user, action.payload.user}
  }))
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);