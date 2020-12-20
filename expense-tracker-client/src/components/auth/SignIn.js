import {
	Button,
	Checkbox,
	Divider,
	Form,
	FormControl,
	FormGroup,
	Panel,
	Row
} from "rsuite";

import "rsuite/dist/styles/rsuite-default.css";

const SignIn = () => {
	return (
		<React.Fragment>
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
				<Checkbox id="agreement" style={{ marginBottom: 10 }}>
					{" "}
					I agree to the Terms of service and Privacy policies of
					Expense Manager
				</Checkbox>
				<FormGroup>
					<Button style={primaryButton} block>
						SIGN UP
					</Button>
				</FormGroup>
				<Divider />
				<FormGroup>
					<p style={{ marginBottom: 10 }}>
						Already have an account?
						<Button
							appearance="link"
							style={{
								linkButton,
								marginTop: -2
							}}
						>
							Sign in
						</Button>
					</p>
					<Button style={primaryButton} block>
						Try as Demo User
					</Button>
				</FormGroup>
			</Form>
		</React.Fragment>
	);
};
