import React from "react";
import { Button, Panel, Divider, Form, FormControl, FormGroup } from "rsuite";

import "rsuite/dist/styles/rsuite-default.css";
import "../../styles/general.css";

const SignIn = () => {
	return (
		<div className="backGround">
			<div className="Login verticalCenter">
				<Button className="secButton" style={{ float: "right" }}>
					Already have an account?
				</Button>
				<React.Fragment>
					<Panel
						header={
							<div>
								<h3>Create your Expensify Account</h3>
							</div>
						}
						style={{ marginTop: "20px" }}
					/>
					<Form fluid>
						<FormGroup>
							<FormControl
								name="fname"
								placeholder="First Name"
							/>
						</FormGroup>
						<FormGroup>
							<FormControl name="lname" placeholder="Last Name" />
						</FormGroup>
						<FormGroup>
							<FormControl
								name="email"
								style={{ width: "maximum" }}
								placeholder="Email Address"
							/>
						</FormGroup>
						<FormGroup fluid>
							<FormControl
								name="password"
								type="password"
								placeholder="Password"
							/>
						</FormGroup>
						<FormGroup>
							<Button className="primaryButton" block>
								SIGN UP
							</Button>
						</FormGroup>
						<Divider />
						<FormGroup>
							<Button className="primaryButton" block>
								Try as Demo User
							</Button>
						</FormGroup>
					</Form>
				</React.Fragment>
			</div>
		</div>
	);
};

export default SignIn;
