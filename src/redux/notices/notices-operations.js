import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async ({ category, search, signal = {} }, thunkAPI) => {
    try {
      const options = {
        signal,
        params: {
          query: search,
        },
      };
      if (category === 'for-free') {
        category = 'in-good-hands';
      }
      const notices = await axios.get(`notices/notice/${category}`, options);
      return notices.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk('notices/deleteNotice', async (_id, thunkAPI) => {
  try {
    await axios.delete(`notices/${_id}`);
    return _id
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})