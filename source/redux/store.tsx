/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import repositorySlice from './reducers/repositorySlice';

// Main store of the app.
export const store = configureStore({
  reducer: {
    repository: repositorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
