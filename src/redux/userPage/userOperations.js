import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateUser = createAsyncThunk(
  'users/update',
  async (info, thunkAPI) => {
    try {
      console.log('info', info);
      const res = await axios.patch('users/update', info);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
