import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { search: '', category: '' },
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const {changeSearch, changeCategory} = filterSlice.actions