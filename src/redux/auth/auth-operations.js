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

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/signup', credentials);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', loginData);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  'auth/relogin',
  async (_, thunkAPI) => {
    const currentToken = thunkAPI.getState().auth.token;
    if (currentToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(currentToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      token.unset();
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue(
        'something went wrong, please, try again'
      );
    }
  }
);

export const updateLike = createAsyncThunk(
  'notices/updateLike',
  async ({ isLiked, _id }, thunkAPI) => {
    try {
      if (isLiked) {
        const result = await axios.put(`notices/favorites/${_id}`);
        return { isLiked: !isLiked, _id, notice: result.data.data };
      }
      const result = await axios.patch(`notices/favorites/${_id}`);
      return { isLiked: !isLiked, _id, notice: result.data.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);