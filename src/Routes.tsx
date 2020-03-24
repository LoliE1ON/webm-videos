import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {Home} from "./components/pages/home/Home";

export const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route path="/">

                <Home>
                    <Home.Welcome>
                        Welcome!
                    </Home.Welcome>
                </Home>

            </Route>
        </Switch>
    </BrowserRouter>
);