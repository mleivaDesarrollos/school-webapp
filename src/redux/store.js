import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const createReducer = (injectedReducer = {}) =>
  combineReducers({
    router: connectRouter(history),
    ...injectedReducer,
  });

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  routerMiddleware(history),
  sagaMiddleware,
];

const { run: runSaga } = sagaMiddleware;

const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
];

const reducer = createReducer();

const store = configureStore({
  reducer,
  middleware,
  enhancers,
});

export default store;
