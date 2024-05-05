// jobSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    data: [],
    filteredData: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    filterData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { fetchData, filterData } = jobSlice.actions;

export const selectData = (state) => state.job.data;
export const selectFilteredData = (state) => state.job.filteredData;

export default jobSlice.reducer;
