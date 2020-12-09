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
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import 'rsuite/dist/styles/rsuite-default.css';



const HomeRoute = () => {

    const [values, setValues] = useState({
        didRedirect: false
    });

    const { didRedirect } = values;

    const onSubmit = ()=>{
        setValues({
            didRedirect: true,
        });
    }

    const doRedirect = ()=>{
        if(didRedirect) {
            return <Redirect to="/user/dashboard"/>;
        }
    }

    const signInForm = () => {
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
                                                    <ControlLabel>Email address</ControlLabel>
                                                    <FormControl name="name"/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <ControlLabel>Password</ControlLabel>
                                                    <FormControl name="password" type="password"/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <ButtonToolbar>
                                                        <Button appearance="primary" onClick={onSubmit}>Sign in</Button>
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
    }
    return(
        <Container>
            {signInForm()}
            {doRedirect()}
        </Container>
    );
};

export default HomeRoute;