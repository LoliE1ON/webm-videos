import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./home/Home";

import { useDispatch } from "react-redux";
import { fetchVideo } from "../store/webm/actions";

export const Routes = () => {

    const dispatch = useDispatch();

    // Fetching videos
    useEffect(() => {
        dispatch(fetchVideo());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};