import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "rsuite/dist/styles/rsuite-default.css";
import "./styles/general.css";

import LandingPage from "./components/auth/LandingPage";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/signup" component={LandingPage} exact></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
