import React, { Component } from "react";
import { Row, Col, Button, Input, Icon, Checkbox } from "antd";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.css";
import logo from "../../assets/images/meliorMD-logo-no-background.svg";

class Login extends Component {
  render() {
    return (
      <Row type="flex" justify="center" className="login-container">
        <Col xxl={5} xl={6} lg={7} md={9} sm={14} xs={22}>
          <Row className="row-login-box">
            <Row type="flex" justify="center">
              <img className="login-logo" src={logo} alt="logo" />
            </Row>
            <Row type="flex" justify="center">
              <h4 style={{textAlign:"center"}}>Welcome back! Please login to continue.</h4>
            </Row>
            <Row className="input-email" type="flex" justify="center">
              <Input
                placeholder="Username or Email"
                prefix={
                  <Icon
                    className="username-icon"
                    type="mail"
                    // style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
              />
            </Row>
            <Row className="input-password" type="flex" justify="center">
              <Input
                placeholder="Password"
                prefix={
                  <Icon
                    className="username-icon"
                    type="lock"
                    // style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
              />
            </Row>
            <Row className="row-remember-forgot-pass" type="flex" justify="center">
              <Col span={14}>
                <Checkbox className="check-box">
                  <span className="span2-text">Remember Me</span>
                </Checkbox>
              </Col>
              <Col span={10}>
                <Link className="forgot-pass-span">
                  <h5 className="h5-forgot-password">Forgot Password ?</h5>
                </Link>
              </Col>
            </Row>
            <Row className="row-signin-button" type="flex" justify="center">
              <Button className="signin-button">Sign in</Button>
            </Row>
          </Row>
          <Row type="flex" className="row-signup" justify="center">
            <h4 className="new-to-melior-text">
              New to meliorMD? <Link to="signup">Signup</Link>
            </h4>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Login;
