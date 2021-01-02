import React from "react";
import Navbar from "./Navbar";
import BaseNavbar from "./BaseNavbar";

const test = () => {
	return <div>Hellooo</div>;
};

const UserDashboard = () => {
	return (
		<div>
			<BaseNavbar>{test()}</BaseNavbar>
		</div>
	);
};

export default UserDashboard;
