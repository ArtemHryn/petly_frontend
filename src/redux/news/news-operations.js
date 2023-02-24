import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ search }, thunkAPI) => {
    try {
       const options = {
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