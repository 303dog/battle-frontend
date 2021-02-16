import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './redux/reducer';


const store = createStore(
  reducer, 
  compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);



ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


