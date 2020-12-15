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
    Panel,
    Row,Icon
} from 'rsuite';

import 'rsuite/dist/styles/rsuite-default.css';

const maxHeight = {
    height: '100vh'
};
const headerStyles = {
    backgroundColor: "Orange",
    overflowX: 'hidden',
    height: '100vh'
};
const loginBox = {
    backgroundColor: "Red",
    marginTop:"50%",
    border:'solid white'
};
const prodDetails = {
    backgroundColor:'white',
    marginTop:"50%"
};

const UserHome = () => {
    return (
        <div className="show-container login-page">
            <Container style={headerStyles}>
                <Row>
                    <Col xs={24} sm={24} md={12}>
                        <Content >
                            <FlexboxGrid justify="center" fluid>
                                <FlexboxGrid.Item colspan={16}>
                                    <Panel header={<h3>Expense Tracker</h3>} style={prodDetails} fluid>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    </Panel>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </Content>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Content style={{backgroundColor: "Green"}}>
                            <FlexboxGrid justify="center" style={maxHeight}>
                                <FlexboxGrid.Item colspan={12}>
                                    <Panel header={<h3>Login</h3>} style={loginBox}>
                                        <Form fluid>
                                            <FormGroup>
                                                <ControlLabel><Icon icon='envelope'/> Email address</ControlLabel>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserHome;