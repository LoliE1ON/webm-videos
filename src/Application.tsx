import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import logger from 'redux-logger'
import { reducers } from './store/reducers';
import { Provider } from 'react-redux';

import { ThemeSwitcher } from "./components/template/ThemeSwitcher";
import { Routes } from "./components/Routes";

const store = createStore(reducers, applyMiddleware(thunk, logger));

const Application = () => (
    <Provider store={store}>
        <ThemeSwitcher>
            <Routes/>
        </ThemeSwitcher>
    </Provider>
);

export default Application;
