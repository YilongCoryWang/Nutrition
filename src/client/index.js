import React from 'react';
import { render } from 'react-dom';
import { combineReducers , createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routerReducer } from 'react-router-redux';
// import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import userRecordReducer from './reducers/userRecordReducer.js';
import App from './App.js';

const store = createStore(
    combineReducers({
        userRecordReducer,
        routing: routerReducer
    }),
    // applyMiddleware(createLogger(),thunk)
    applyMiddleware(thunk)
);

const history = createBrowserHistory();

render(
    <Provider store={store} history={history}>
        <Router>
            <App></App>
        </Router>
    </Provider>
    ,
    document.getElementById("container")
);