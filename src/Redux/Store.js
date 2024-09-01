import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Reducer';

const store = configureStore({
  reducer: {
    theme: themeReducer, // Add the theme reducer to the store
  },
});

export default store;
