import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./news-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
  extraReducers: builder => 
    builder
    .addCase(fetchNews.pending, state => {
        state.isLoading = true;
    })
    .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    })
    .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
});

export const newsReducer = newsSlice.reducer;