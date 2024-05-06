import { configureStore } from '@reduxjs/toolkit'; // configure store from redux-toolkit
import jobReducer from '../jobSlice'; // I impoted jobReducer from jobslice

export const store = configureStore({
  reducer: {
    job: jobReducer, // job reducer
  },
});