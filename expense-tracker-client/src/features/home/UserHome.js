import {
    Button,
    ButtonToolbar,
    Col,
    Container,
    Content,
    ControlLabel,
    FlexboxGrid,
    Form,
    FormControl,
    FormGroup,
    Grid,
    Panel
} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const UserHome = () => {
    return (
        <div className="show-fake-browser login-page">
            <Grid fluid>
                <Col xs={24} sm={24} md={12}>
                    <Container style={{backgroundColor: "Red"}}>
                        <Content>
                            <FlexboxGrid justify="center">
                                <FlexboxGrid.Item colspan={24}>
                                    <Panel header={<h3>Expense Tracker</h3>} bordered>
                                        Welcome to Expense Tracker!
                                    </Panel>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </Content>
                    </Container>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <Container>
                        <Content>
                            <FlexboxGrid justify="center">
                                <FlexboxGrid.Item colspan={12}>
                                    <Panel header={<h3>Login</h3>} bordered>
                                        <Form fluid>
                                            <FormGroup>
                                                <ControlLabel>Username or email address</ControlLabel>
                                                <FormControl name="name"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Password</ControlLabel>
                                                <FormControl name="password" type="password"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ButtonToolbar>
                                                    <Button appearance="primary">Sign in</Button>
                                                    <Button appearance="link">Forgot password?</Button>
                                                </ButtonToolbar>
                                            </FormGroup>
                                        </Form>
                                    </Panel>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </Content>
                    </Container>
                </Col>
            </Grid>
        </div>
    );
};

export default UserHome;