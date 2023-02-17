import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./news-operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchNews.pending]: handlePending,
        [fetchNews.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchNews.rejected]: handleRejected,
    },
});

export const newsReducer = newsSlice.reducer;