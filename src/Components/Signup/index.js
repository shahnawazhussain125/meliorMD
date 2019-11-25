import React, { Component } from "react";
import { Row, Col, Button, Input, Icon, Checkbox } from "antd";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreater from '../../Redux/Actions/authAction';
import logo from "../../assets/images/Group24.svg";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.user) {
      this.props.history.push(`/${nextprops.userType}`)
    } else {
      alert(nextprops.signUpError);
    }
  }

  onClickSignup = () => {
    const { name, email, password } = this.state;
    if (name !== "" && email !== "" && password !== "" && name !== " " && email !== " ") {
      this.props.authActionCreater.signUp({ name, email, password }, this.props.history);
      alert("Signup Successful");
    }
    else {
      alert("In complete fields");
    }
  }
  render() {
    return (
      <Row type="flex" justify="center" className="signup-container">
        <Col xxl={5} xl={6} lg={7} md={9} sm={14} xs={22}>
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
                value={this.state.name}
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
                value={this.state.email}
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
                value={this.state.password}
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


const mapStateToProps = (state) => {
  return ({
    isLoading: state.authReducer.isLoading,
    user: state.authReducer.user,
  })
}

const mapDispatchToProps = (dispatch) => ({
  authActionCreater: bindActionCreators(authActionCreater, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);



