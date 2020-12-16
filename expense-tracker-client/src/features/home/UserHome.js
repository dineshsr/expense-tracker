import {
    Button,
    ButtonToolbar,
    Carousel,
    Checkbox,
    Col,
    Container,
    Content,
    Divider,
    Form,
    FormControl,
    FormGroup,
    Panel,
    Row
} from 'rsuite';

import 'rsuite/dist/styles/rsuite-default.css';
import logo from '../../images/logo-icon.png';

const maxHeight = {
    height: '100vh'
};
const primaryButton = {
    backgroundColor: "#166678",
    color: 'white'
};
const fullPage = {
    backgroundColor: '#FFF',
    height: '100vh'
};
const totalPanel = {
    backgroundColor: '#FFF',
    margin: "100px",
    position:'absolute',
    boxShadow: "3px 3px 18px grey",
    zIndex:2
};
const panelLeft = {
    backgroundColor: '#E8FFFD',
}
const panelRight = {
    backgroundColor: '#FFF',
    height: 'inherit'
}
const ellipseBg = {
    height: '100vh',
    width: '100vh',
    marginLeft:'-60vh',
    backgroundColor: '#166678',
    borderRadius: '50%',
    float: 'left',
    zIndex:1,
    position:'relative'
};

const UserHome = () => {
    return (
        <div className="show-container">
            <Container style={fullPage}>
                <Content>
                    <span style={ellipseBg}></span>
                    <Panel style={totalPanel}>
                        <Row>
                            <Col xsHidden md={12} style={panelLeft}>
                                <Panel header={<h3>Expense Manager</h3>}>
                                    <Carousel autoplay className="custom-slider">
                                        <img
                                            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
                                            height="250"
                                        />
                                        <img
                                            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
                                            height="250"
                                        />
                                        <img
                                            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
                                            height="250"
                                        />
                                        <img
                                            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
                                            height="250"
                                        />
                                        <img
                                            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
                                            height="250"
                                        />
                                    </Carousel>
                                </Panel>
                            </Col>
                            <Col md={12} style={panelRight}>
                                <Panel>
                                    <img
                                        src={logo}
                                        height={75}
                                    />
                                </Panel>
                                <Panel header={<h3>Create your account</h3>}>
                                    <Form fluid>
                                        <FormGroup>
                                            <FormControl name="fname" placeholder="First Name"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControl name="lname" placeholder="Last Name"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControl name="email" style={{width: 'maximum'}}
                                                         placeholder="Email Address"/>
                                        </FormGroup>
                                        <FormGroup fluid>
                                            <FormControl name="password" type="password" placeholder="Password"/>
                                        </FormGroup>
                                        <Checkbox id='agreement'> I agree to the Terms of service and Privacy policies
                                            of Expense Manager</Checkbox>
                                        <FormGroup>
                                            <ButtonToolbar>
                                                <Button style={primaryButton} block>SIGN UP</Button>
                                            </ButtonToolbar>
                                        </FormGroup>
                                        <Divider/>
                                        <FormGroup>
                                            <ButtonToolbar>
                                                <Button style={primaryButton} block>Try as Demo User</Button>
                                            </ButtonToolbar>
                                        </FormGroup>
                                    </Form>
                                </Panel>
                            </Col>
                        </Row>
                    </Panel>
                </Content>
            </Container>
        </div>
    );
};

export default UserHome;