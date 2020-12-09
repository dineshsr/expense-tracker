import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeRoute from "./home/HomeRoute.js";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeRoute}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;