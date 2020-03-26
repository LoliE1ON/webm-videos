import React from 'react';

import { createStore } from 'redux';
import { reducers } from './store/reducers';
import { Provider } from 'react-redux';
import { Routes } from "./components/Routes";

import CssBaseline from '@material-ui/core/CssBaseline';

const store = createStore(reducers);

const Application = () => (
    <Provider store={store}>
        <Routes/>
    </Provider>
);

export default Application;
