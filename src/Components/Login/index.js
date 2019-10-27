import React, { Component } from "react";
import { Row, Col, Button, Input, Icon, Checkbox } from "antd";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.css";
import logo from "../../assets/images/md-logo.webp";

class Login extends Component {
  render() {
    return (
      <Row type="flex" justify="center" className="login-container">
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
                prefix={
                  <Icon
                    className="username-icon"
                    type="mail"
                    style={{ color: "rgba(0,0,0,.25)" }}
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
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
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
