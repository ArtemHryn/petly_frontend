import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSponsors = createAsyncThunk(
  'sponsors/get',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/sponsors');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
