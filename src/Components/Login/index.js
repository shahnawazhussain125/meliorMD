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
                            <h4>Welcome back! Please login to continue.</h4>
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
                        <Row type="flex" justify="center">
                            <Col span={14}>
                                <Checkbox className="check-box">
                                    <span className="span2-text">Remember Me</span>
                                </Checkbox>
                            </Col>
                            <Col span={10}>
                                <h5 className="forgot-pass-text">Forgot Password ?</h5>
                            </Col>
                        </Row>
                        <Row className="input-password" type="flex" justify="center">
                            <Button className="signin-button">Sign in</Button>
                        </Row>
                    </Row>
                    <Row type="flex" justify="center">
                        <h4 className="new-to-melior-text">New to meliorMD?</h4>
                        <Button className="signup-button">Sign Up</Button>
                    </Row>
                    </Col>
                    <Col span={9}></Col>
                </Row>
            </div>
        )
    }
}


export default Header;