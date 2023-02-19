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
        console.log(1);
        return favorite.data.favorites;
      }
      if (category === 'own') {
        const own = await axios.get(`notices/owner`, options);
        return own.data.result;
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

export const updateLike = createAsyncThunk(
  'notices/updateLike',
  async ({ isLiked, _id }, thunkAPI) => {
    try {
      if (isLiked) {
        await axios.put(`notices/favorites/${_id}`);
        return { isLiked: !isLiked, _id };
      }
      await axios.patch(`notices/favorites/${_id}`);
      return { isLiked: !isLiked, _id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
