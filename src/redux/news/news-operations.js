import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ search, signal = {} }, thunkAPI) => {
    try {
       const options = {
        signal,
        params: {
          query: search,
        },
      };
      const response = await axios.get('/news', options);
      return response.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);