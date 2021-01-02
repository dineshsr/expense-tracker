import React from "react";
import BaseNavbar from "./BaseNavbar";

const test = () => {
	return <div>From Dashboard</div>;
};

const UserDashboard = () => {
	return <BaseNavbar>{test()}</BaseNavbar>;
};

export default UserDashboard;
