import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker'

import Main from './Main';
import reducers from './reduxStore/reducers';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
