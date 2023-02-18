import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://arcane-everglades-20653.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VjMjM0MTdiOGNhYmMzMWIwYTA1Y2YiLCJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwiaWF0IjoxNjc2NzQ3MTYxLCJleHAiOjE2NzY4MzM1NjF9.IW14Ijnc3KtN99vF9w4p1R9e9AHk-3YyNH-8DWBbj-4';

//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/signup', credentials);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    console.log(token);
    return { credentials, thunkAPI };
  }
);
