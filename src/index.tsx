import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from 'redux/store';
import HttpClient from 'util/httpClient';
import { API_URL } from 'app/defaultValues';
import App from './App';
import './index.css';

HttpClient.create(API_URL);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
