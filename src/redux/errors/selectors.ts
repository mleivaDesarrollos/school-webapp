import RootState from 'redux/RootState';
import { name } from './slice';

export const errorSelector = (state: RootState): string | null =>
  state[name].error;

export default {
  errorSelector,
};
