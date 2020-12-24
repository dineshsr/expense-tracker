import React from "react";
import { Carousel } from "rsuite";

import "rsuite/dist/styles/rsuite-default.css";
import logo from "../../images/logo-icon.png";
import "../../styles/general.css";

import SignUp from "./SignUp";
import SignIn from "./SignIn";

const LandingPage = () => {
	return (
		<div className="show-container">
			<span className="ellipseBg"></span>
			<div className="totalPanel verticalCenter">
				<div xsHidden md={12} className="panelLeft">
					<h3>Expense Manager</h3>
					<br />
					<Carousel
						autoplay
						className="custom-slider"
						style={{ display: "flex" }}
					>
						<img
							src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
							height="250"
							alt="images"
						/>
						<img
							src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
							height="250"
							alt="images"
						/>
						<img
							src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
							height="250"
							alt="images"
						/>
						<img
							src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
							height="250"
							alt="images"
						/>
						<img
							src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
							height="250"
							alt="images"
						/>
					</Carousel>
				</div>
				<div md={12} className="panelRight">
					<img src={logo} height={75} alt="logo" />
					<SignUp />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
