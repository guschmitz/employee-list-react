import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import mainReducer from './store';

const store = applyMiddleware(thunk, multi)(createStore)(mainReducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);