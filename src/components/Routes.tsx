import React, {useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {Home} from "./pages/home/Home";
import {Header} from "./template/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

import {useDispatch} from "react-redux";
import {fetchVideo} from "../store/webm/actions";

export const Routes = () => {

    const dispatch = useDispatch();

    // Fetching videos
    useEffect(() => {
        dispatch(fetchVideo());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <CssBaseline />
            <Header/>
            <main>
                <Switch>
                    <Route path="/">

                        <Home>
                            <Home.Welcome>
                                Welcome!
                            </Home.Welcome>
                        </Home>

                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
};