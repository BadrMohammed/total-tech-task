/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
// Imported actions
import {
  SAVE_REPOSITORIES_DATA,
  UPDATE_LOADER,
  SAVE_REPOSITORY_DETAILS,
} from '../actions/repository.action';
import {DetailsType} from '../../core/types/Details';
const initialState = {
  data: [],
  isLoading: true,
  page: 1,
  repositoryDetails: {} as DetailsType,
};

export const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    saveRepositoriesData: SAVE_REPOSITORIES_DATA,
    updateLoader: UPDATE_LOADER,
    saveRepositoryDetails: SAVE_REPOSITORY_DETAILS,
  },
});

export const repository = (state: RootState) => state.repository;

export const {saveRepositoriesData, updateLoader, saveRepositoryDetails} =
  repositorySlice.actions;

export default repositorySlice.reducer;
