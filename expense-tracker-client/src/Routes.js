import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "rsuite/dist/styles/rsuite-default.css";
import "./styles/general.css";

import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Navbar from "./components/user/Navbar";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/signup" component={SignUp} exact></Route>
				<Route path="/signin" component={SignIn} exact></Route>
				<Route path="/" component={Navbar} exact></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
