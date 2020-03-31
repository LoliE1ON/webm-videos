import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from "./components/Routes";

import { store } from "./store/store";
import {Layout} from "./components/template/Layout";

const Application = () => (
    <Provider store={store}>
        <Layout>
            <Routes/>
        </Layout>
    </Provider>
);

export default Application;
