import React, { Component } from "react";
import { Row, Col, Button, Input, Icon, Checkbox } from "antd";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.css";
import logo from "../../assets/images/meliorMD-logo-no-background.svg";

class SignUp extends Component {
  render() {
    return (
      <Row type="flex" justify="center" className="signup-container">
        <Col xxl={6} xl={6} lg={7} md={9} sm={14} xs={22}>
          <Row className="signup-box">
            <Row type="flex" justify="center">
              <img className="signup-logo" src={logo} alt="logo" />
            </Row>
            <Row type="flex" justify="center">
              <h4>Hey there! Let's get started.</h4>
            </Row>
            <Row className="row-input-name" type="flex" justify="center">
              <Input
                placeholder="Name"
                className="input-name"
                prefix={
                  <Icon
                    className="username-icon"
                    type="user"
                    // style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
              />
            </Row>
            <Row className="row-input-email" type="flex" justify="center">
              <Input
                placeholder="Username or Email"
                className="input-email"
                prefix={
                  <Icon
                    className="username-icon"
                    type="mail"
                    // style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
              />
            </Row>
            <Row className="row-input-password" type="flex" justify="center">
              <Input
                placeholder="Password"
                className="input-password"
                prefix={
                  <Icon
                    className="username-icon"
                    type="lock"
                    // style={{ color: "rgba(128, 128, 128, 0.986)" }}
                  />
                }
              />
            </Row>
            <Row type="flex">
              <h5>
                Password Strength :{" "}
                <span className="pass-strength">
                  <i>Strong</i>
                </span>
              </h5>
            </Row>
            <Row type="flex">
              <Checkbox className="check-box">
                <span className="span2-text">
                  I agree with <a>Privacy Policy</a>
                </span>
              </Checkbox>
            </Row>
            <Row className="row-signup-button" type="flex" justify="center">
              <Button className="signup-button">Sign up</Button>
            </Row>
          </Row>
          <Row className="row-login" type="flex" justify="center">
            <h4 className="new-to-melior-text">Existing User? <Link to="login">Login</Link></h4>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default SignUp;
