import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {Home} from "./pages/home/Home";
import {Header} from "./template/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

export const Routes = () => (
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