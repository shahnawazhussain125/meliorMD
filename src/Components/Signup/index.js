import React, { Component } from 'react';
import { Row, Col, Button, Input, Icon, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import logo from '../../assets/images/md-logo.webp';
import DrawerTab from '../Drawer'

class Header extends Component {

    render() {
        return (
            <div>
                <Row type="flex">
                    <Col span={9}></Col>
                    <Col span={6}>
                    <Row className="login-box">    
                        <Row type="flex" justify="center">
                            <img className="header-logo" src={logo} alt="logo" />
                        </Row>
                        <Row type="flex" justify="center">
                            <h4>Hey there! Let's get started.</h4>
                        </Row>
                        <Row className="input-name" type="flex" justify="center">
                            <Input
                                placeholder="Name"
                                prefix={<Icon className="username-icon" type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                             />
                        </Row>
                        <Row className="input-email" type="flex" justify="center">
                            <Input
                                placeholder="Username or Email"
                                prefix={<Icon className="username-icon" type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                             />
                        </Row>
                        <Row className="input-password" type="flex" justify="center">
                            <Input
                                placeholder="Password"
                                prefix={<Icon className="username-icon" type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            />
                        </Row>
                        <Row type="flex">
                            <h5>Password Strength: <span><i>Strong</i></span></h5>
                        </Row>
                        <Row type="flex">
                                <Checkbox className="check-box">
                                    <span className="span2-text">I agree with <a>Privacy Policy</a></span>
                                </Checkbox>
                        </Row>
                        <Row className="input-password" type="flex" justify="center">
                            <Button className="signup-button">Sign up</Button>
                        </Row>
                    </Row>
                    <Row type="flex" justify="center">
                        <h4 className="new-to-melior-text">New to meliorMD?</h4>
                        <Button className="login-button">Login</Button>
                    </Row>
                    </Col>
                    <Col span={9}></Col>
                </Row>
            </div>
        )
    }
}


export default Header;