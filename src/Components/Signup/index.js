import React, { Component } from "react";
import { Row, Col, Button, Input, Icon, Checkbox } from "antd";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.css";
import logo from "../../assets/images/md-logo.webp";

class SignUp extends Component {
  render() {
    return (
      <Row type="flex" justify="center" className="signup-container">
        <Col span={6}>
          <Row className="signup-box">
            <Row type="flex" justify="center">
              <img className="SignUp-logo" src={logo} alt="logo" />
            </Row>
            <Row type="flex" justify="center">
              <h4>Hey there! Let's get started.</h4>
            </Row>
            <Row className="input-name" type="flex" justify="center">
              <Input
                placeholder="Name"
                prefix={
                  <Icon
                    className="username-icon"
                    type="user"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
              />
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
            <Row className="input-password" type="flex" justify="center">
              <Button className="signup-button">Sign up</Button>
            </Row>
          </Row>
          <Row type="flex" justify="center">
            <h4 className="new-to-melior-text">Existing User? <Link to="login">Login</Link></h4>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default SignUp;
