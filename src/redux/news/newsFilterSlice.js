import { createSlice } from '@reduxjs/toolkit';

const newsFilterSlice = createSlice({
  name: "filter",
  initialState: { search: ''},
  reducers: {
     setNewsFilter(state, action) {
        state.search = action.payload;
      },
    },
  },
);

export const { setNewsFilter } = newsFilterSlice.actions;
export const filterReducer = newsFilterSlice.reducer;