import {
  call,
  put,
  takeLatest,
  StrictEffect,
  Effect,
} from 'redux-saga/effects';
import { StudentAdd } from 'types/student';
import httpClient from 'util/httpClient';
import { API } from 'app/defaultValues';
import { PayloadAction } from '@reduxjs/toolkit';
import { actions } from './slice';

function* submitAddSaga(
  action: PayloadAction<StudentAdd>,
): Generator<StrictEffect, void, unknown> {
  try {
    const newStudent = action.payload;
    console.log('new Student: ', newStudent);
    yield call(httpClient.post, API.student.add, newStudent);
    yield put({ type: actions.success.type });
  } catch (error) {
    yield put({ type: actions.failureOnSubmit.type, payload: error });
  }
}

export default function* rootSaga(): Generator<Effect, void, unknown> {
  yield takeLatest(actions.submit, submitAddSaga);
}
