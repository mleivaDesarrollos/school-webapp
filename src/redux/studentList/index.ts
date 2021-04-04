import { useEffect } from 'react';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch } from 'react-redux';
import saga from './saga';
import { name as key, reducer, actions } from './slice';

export default function useStudentRedux(): void {
  const dispatch = useDispatch();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  useEffect(() => {
    dispatch(actions.fetch());
  }, [dispatch]);
}
