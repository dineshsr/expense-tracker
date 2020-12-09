import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import UserHome from "./features/home/UserHome.js";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={UserHome} exact></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;