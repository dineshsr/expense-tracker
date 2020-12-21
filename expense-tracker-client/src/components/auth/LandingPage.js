import React from "react";
import { Carousel, Col, Container, Content, Panel, Row } from "rsuite";

import "rsuite/dist/styles/rsuite-default.css";
import "../../styles/general.css";
import logo from "../../images/logo-icon.png";

import SignUp from "./SignUp";

const totalPanel = {
	backgroundColor: "#FFF",
	margin: "100px",
	position: "relative",
	height: "auto",
	boxShadow: "3px 3px 18px grey",
	zIndex: 2
};
const panelLeft = {
	backgroundColor: "#E8FFFD",
	minHeight: "100%"
};
const panelRight = {
	backgroundColor: "#FFF",
	height: "inherit"
};
const ellipseBg = {
	height: "100%",
	width: "50%",
	marginLeft: "-30%",
	backgroundColor: "#166678",
	borderRadius: "100%",
	float: "left",
	zIndex: 1,
	position: "absolute"
};

const LandingPage = () => {
	return (
		<div className="show-container">
			<Container>
				<Content>
					<span style={ellipseBg}></span>
					<Panel style={totalPanel}>
						<Row>
							<Col xsHidden md={12} style={panelLeft}>
								<Panel header={<h3>Expense Manager</h3>}>
									<Carousel
										autoplay
										className="custom-slider"
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
								</Panel>
							</Col>
							<Col md={12} style={panelRight}>
								<Panel>
									<img src={logo} height={75} alt="logo" />
								</Panel>
								<SignUp />
							</Col>
						</Row>
					</Panel>
				</Content>
			</Container>
		</div>
	);
};

export default LandingPage;
