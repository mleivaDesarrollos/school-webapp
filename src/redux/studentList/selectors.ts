import { Student } from 'types';
import RootState from 'redux/RootState';
import { name } from './slice';

export const studentListLoadedSelector = (state: RootState): boolean =>
  state[name].loaded;

export const studentListItemsSelector = (state: RootState): Student[] =>
  state[name].items;
