import React from "react";
import { Button, Panel, Divider, Form, FormControl, FormGroup } from "rsuite";

import "rsuite/dist/styles/rsuite-default.css";
import "../../styles/general.css";
import "../../styles/styles.css";

const SignIn = () => {
	return (
		<div className="backGround">
			<div className="Login verticalCenter">
				<Button className="secButton signupRedirect" block>
					Don't have an account?
				</Button>
				<React.Fragment>
					<Panel
						header={
							<div>
								<h3>Sign in </h3>
								<h5>to access Expensify</h5>
							</div>
						}
						className="LoginSignupPanel"
					/>
					<Form fluid className="formStyles">
						<FormGroup>
							<FormControl
								name="email"
								type="name"
								placeholder="Email Address"
								errorPlacement="bottomStart"
							/>
						</FormGroup>
						<FormGroup>
							<FormControl
								name="password"
								type="password"
								placeholder="Password"
								errorPlacement="bottomStart"
							/>
						</FormGroup>
						<FormGroup>
							<Button className="primaryButton" block>
								SIGN IN
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
