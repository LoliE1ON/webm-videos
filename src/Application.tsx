import React from 'react';

import { createStore } from 'redux';
import { reducers } from './store/reducers';
import { Provider } from 'react-redux';
import { Routes } from "./Routes";

import CssBaseline from '@material-ui/core/CssBaseline';

const store = createStore(reducers);

const Application = () => (
    <CssBaseline>
        <Provider store={store}>
            <Routes/>
        </Provider>
    </CssBaseline>
);

export default Application;
