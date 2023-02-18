import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './loginAuth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  [logIn.fulfilled](state, { payload }) {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
});

export const authReducer = authSlice.reducer;
