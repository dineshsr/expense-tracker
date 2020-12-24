import React from "react";
import { Button, Panel, Divider, Form, FormControl, FormGroup } from "rsuite";

import "rsuite/dist/styles/rsuite-default.css";
import "../../styles/general.css";

const SignIn = () => {
	return (
		<React.Fragment>
			<Panel header={<h3>Login into Expense Tracker</h3>}></Panel>
			<Form fluid>
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
	);
};

export default SignIn;
