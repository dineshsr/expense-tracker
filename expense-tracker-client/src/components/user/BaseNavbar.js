import React from "react";
import Navbar from "./Navbar";

const BaseNavbar = ({ children }) => {
	return (
		<div>
			<div style={{ float: "left" }}>
				<Navbar></Navbar>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default BaseNavbar;
