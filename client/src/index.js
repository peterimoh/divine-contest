import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducer/index'
import thunk from 'redux-thunk';
import App from './App';
import './global.css';
import './responsive.css';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f //------USE CHROME EXTENSION FOR REDUX------------------
  )
);


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);
