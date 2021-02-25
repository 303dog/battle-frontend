import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  reducer, 
  composeWithDevTools(
      applyMiddleware(thunk, logger)
  )
);



ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


