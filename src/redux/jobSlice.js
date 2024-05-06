// jobSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    data: [],// Initial state for job data
    filteredData: [], // Initial state for filtered job data
  },
  reducers: {
    fetchData: (state, action) => {
      // Reducer to update job data and filtered job data
      state.data = action.payload; // Update job data
      // Update filtered job data
      state.filteredData = action.payload;
    },
    filterData: (state, action) => {
       // Reducer to update filtered job data
      state.filteredData = action.payload;
    },
  },
});

export const { fetchData, filterData } = jobSlice.actions;

export const selectData = (state) => state.job.data; // Selector to get job data
export const selectFilteredData = (state) => state.job.filteredData;  // Selector to get filtered job data

export default jobSlice.reducer;