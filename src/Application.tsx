import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger'
import {reducers, RootState} from './store/reducers';
import { Provider } from 'react-redux';

import { ThemeSwitcher } from "./components/template/ThemeSwitcher";
import { Routes } from "./components/Routes";
import {fetchVideo} from "./store/webm/actions";
import {IWebmActions} from "./store/webm/types";

const store = createStore(reducers, applyMiddleware(thunk as ThunkMiddleware<RootState, IWebmActions>, logger));
store.dispatch(fetchVideo());

const Application = () => (
    <Provider store={store}>
        <ThemeSwitcher>
            <Routes/>
        </ThemeSwitcher>
    </Provider>
);

export default Application;
