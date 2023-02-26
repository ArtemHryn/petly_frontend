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
export const reset = createAsyncThunk(
  'auth/forgot-password',
  async (resetData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/forgot-password', resetData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  `auth/restore-password`,
  async ({ password, token }, { rejectWithValue }) => {
    try {
      console.log(password);
      const response = await axios.patch(`/users/restore-password/${token}`, {
        password: `${password}`,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
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

export const updateUser = createAsyncThunk(
  'users/update',
  async (info, thunkAPI) => {
    try {
      await axios.patch('users/update', info);
      return info;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  const currentToken = thunkAPI.getState().auth.token;
  if (currentToken === null) {
    return thunkAPI.rejectWithValue();
  }
  try {
    const { data } = await axios.get('/users/logout');
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
    return thunkAPI.rejectWithValue('something went wrong, please, try again');
  }
});

export const pushUserPhoto = createAsyncThunk(
  'users/photo',
  async (photo, thunkAPI) => {
    const currentToken = thunkAPI.getState().auth.token;
    if (currentToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const res = await axios.patch('/users/photo', photo, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue(
        'something went wrong, please, try again'
      );
    }
  }
);
