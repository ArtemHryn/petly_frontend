import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk('user/get', async (_, thunkAPI) => {
  try {
    const res = await axios.get('users/current');
    console.log(res);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  'user/update',
  async (info, thunkAPI) => {
    try {
      const res = await axios.patch('users/update', info);
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
