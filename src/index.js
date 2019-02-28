import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import App from './components/App';

import { fetchMemes } from './actions/index';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    composeWithDevTools()
  )
);

store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
