import React from "react";
import { Carousel, Col, Container, Content, Panel, Row } from "rsuite";

import "rsuite/dist/styles/rsuite-default.css";
import logo from "../../images/logo-icon.png";
import "../../styles/general.css";

import SignUp from "./SignUp";
import SignIn from "./SignIn";

const LandingPage = () => {
	return (
		<div className="show-container">
			<Container>
				<Content>
					<span className="ellipseBg"></span>
					<Panel className="totalPanel verticalCenter">
						<Row>
							<Col xsHidden md={12}>
								<Panel
									className="panelLeft"
									header={<h3>Expense Manager</h3>}
								>
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
							<Col md={12} className="panelRight">
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
