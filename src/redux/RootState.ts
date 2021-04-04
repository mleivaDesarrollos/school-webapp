import { name as studentList, StudentState } from './studentList/slice';
import { name as studentAdd, StudentAddState } from './studentAdd/slice';
import { name as error, ErrorState } from './errors/slice';

interface RootState {
  [studentList]: StudentState;
  [studentAdd]: StudentAddState;
  [error]: ErrorState;
}

export default RootState;
