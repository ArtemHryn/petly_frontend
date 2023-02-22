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
      if (category === 'favorite') {
        const favorite = await axios.get(`notices/favorites/all`, options);
        return favorite.data.favorites;
      }
      if (category === 'own') {
        const own = await axios.get(`notices/owner`, options);
        return own.data.notices;
      }
      const notices = await axios.get(`notices/${category}`, options);
      return notices.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (_id, thunkAPI) => {
    try {
      await axios.delete(`notices/${_id}`);
      return _id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnerInfo = createAsyncThunk(
  'noticces/getOwnerInfo',
  async (owner, thunkAPI) => {
    try {
      const result = await axios(`notices/notice/${owner}`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (formData, thunkAPI) => {
    try {
      const result = await axios.post('notices/', formData)
      return result.data.pet
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
