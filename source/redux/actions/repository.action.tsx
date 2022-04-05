/* eslint-disable prettier/prettier */
import {PayloadAction} from '@reduxjs/toolkit';

const SAVE_REPOSITORIES_DATA = (state: any, action: PayloadAction<any>) => {
  if (action.payload.length === 0) {
    state.data = [];
    state.page = 1;
  } else {
    state.data = [...state.data, ...action.payload];
    state.page += 1;
  }
};

const UPDATE_LOADER = (state: any, action: PayloadAction<any>) => {
  state.isLoading = action.payload;
};

const SAVE_REPOSITORY_DETAILS = (state: any, action: PayloadAction<any>) => {
  state.repositoryDetails = action.payload;
};

export {SAVE_REPOSITORIES_DATA, UPDATE_LOADER, SAVE_REPOSITORY_DETAILS};
