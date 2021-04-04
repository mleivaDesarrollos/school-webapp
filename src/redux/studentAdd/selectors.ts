import RootState from 'redux/RootState';
import { StudentAdd } from 'types/student';
import { name } from './slice';

export const studentAddSubmittingSelector = (state: RootState): boolean =>
  state[name].submitting;

export const studentAddSuccessSelector = (state: RootState): boolean =>
  state[name].success;

export const studentAddStudentSelector = (
  state: RootState,
): StudentAdd | null => state[name].student;
