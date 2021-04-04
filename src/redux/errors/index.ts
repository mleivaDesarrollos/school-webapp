import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { name as key, reducer } from './slice';
import saga from './saga';

export default function useErrorsRedux(): void {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
}
