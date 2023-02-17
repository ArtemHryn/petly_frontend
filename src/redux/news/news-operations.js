import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://arcane-everglades-20653.herokuapp.com';

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/news');
      return response.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);