import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import dataReducer from './reducers/dataReducer';
import { propertiesMiddleware } from './middlewares/middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        dataReducer, 
        composeEnhancers(applyMiddleware(propertiesMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
