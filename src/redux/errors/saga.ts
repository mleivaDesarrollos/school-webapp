import {
  put,
  delay,
  StrictEffect,
  takeEvery,
  all,
  Effect,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { ReduxError } from 'types';
import { actions } from './slice';
import { actions as studentListActions } from '../studentList/slice';
import { actions as studentAddActions } from '../studentAdd/slice';

function* handleErrorSaga(
  action: PayloadAction<ReduxError>,
): Generator<StrictEffect, void, unknown> {
  const rawError = action.payload;
  let errorMessage = 'Ocurrio un error en la llamada';
  if (rawError instanceof Error) {
    if (rawError.message.toLowerCase().includes('network error')) {
      errorMessage = 'Ocurrio un error en la llamada de red';
    }
  } else if (typeof rawError === 'string') {
    errorMessage = rawError;
  }
  yield put({ type: actions.setError.type, payload: errorMessage });
  yield delay(500);
  yield put({ type: actions.cleanError.type });
}

export default function* rootSaga(): Generator<Effect, void, unknown> {
  yield all([
    takeEvery(studentListActions.failure, handleErrorSaga),
    takeEvery(studentAddActions.failureOnSubmit, handleErrorSaga),
  ]);
}
