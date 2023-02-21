import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPet = createAsyncThunk('pets/add', async (info, thunkAPI) => {
  const currentToken = thunkAPI.getState().auth.token;
  if (currentToken === null) {
    return thunkAPI.rejectWithValue();
  }
  try {
    await axios.post('pets', info);
    return info;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getPets = createAsyncThunk('pets/get', async (_, thunkAPI) => {
  const currentToken = thunkAPI.getState().auth.token;
  if (currentToken === null) {
    return thunkAPI.rejectWithValue();
  }
  try {
    const { data } = await axios.get('pets');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deletePet = createAsyncThunk(
  'pets/delete',
  async (id, thunkAPI) => {
    const currentToken = thunkAPI.getState().auth.token;
    if (currentToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const { data } = await axios.delete(`pets/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
