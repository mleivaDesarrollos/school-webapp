import {
  call,
  put,
  takeLatest,
  StrictEffect,
  Effect,
} from 'redux-saga/effects';
import HttpClient from 'util/httpClient';
import { API } from 'app/defaultValues';
import { actions } from './slice';

function* fetchSaga(): Generator<StrictEffect, void, unknown> {
  try {
    const studentResponse = yield call(HttpClient.get, API.student.list);
    yield put({ type: actions.success.type, payload: studentResponse });
  } catch (error) {
    yield put({ type: actions.failure.type, payload: error });
  }
}

export default function* rootSaga(): Generator<Effect, void, unknown> {
  yield takeLatest(actions.fetch, fetchSaga);
}
