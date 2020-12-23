import React from "react";
import { Button, Divider, Form, FormControl, FormGroup, Panel } from "rsuite";

import "rsuite/dist/styles/rsuite-default.css";
import "../../styles/general.css";

const SignUp = () => {
	return (
		<React.Fragment>
			<Panel header={<h3>Create your account</h3>}>
				<Form fluid>
					<FormGroup>
						<FormControl name="fname" placeholder="First Name" />
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
						<p style={{ marginBottom: 10 }}>
							Already have an account?
							<Button
								appearance="link"
								className="linkButton"
								style={{ marginTop: -2 }}
							>
								Sign in
							</Button>
						</p>
						<Button className="primaryButton" block>
							Try as Demo User
						</Button>
					</FormGroup>
				</Form>
			</Panel>
		</React.Fragment>
	);
};

export default SignUp;
