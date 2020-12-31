import React from "react";
import { Link, Redirect } from "react-router-dom";

const leftPanel = () => {
	return (
		<div>
			<Redirect to="/signin">Sign</Redirect>
		</div>
	);
};

const content = () => {
	return (
		<div className="Login verticalCenter">
			<h2>Logged In!</h2>
			<button className="primaryButton" onClick={leftPanel}>
				Click me!
			</button>
		</div>
	);
};

const UserDashboard = () => {
	return (
		<div>
			{content()}
			{leftPanel()}
		</div>
	);
};

export default UserDashboard;
