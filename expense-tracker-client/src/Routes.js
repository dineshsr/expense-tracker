import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeRoute from "./home/HomeRoute.js";
import UserDashboard from "./user/UserDashboard";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeRoute}/>
                <Route
                    path="/user/dashboard"
                    exact
                    component={UserDashboard}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;