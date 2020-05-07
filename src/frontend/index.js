import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle, faTrash, faPlusCircle, faRadiation } from '@fortawesome/free-solid-svg-icons';
import App from './router/App';
import reducer from './reducers';

library.add(faGoogle, faTwitter, faPlayCircle, faTrash, faPlusCircle, faRadiation);

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers());

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
