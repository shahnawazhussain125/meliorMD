import React, { Component } from "react";
import { Row, Col, Button, Input, Icon, Checkbox } from "antd";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.css";
import logo from "../../assets/images/meliorMD-logo-no-background.svg";

import fire from '../../Authentication/fire'
import { connect } from 'react-redux';
import { signin, signout } from '../../Redux/Actions/authAction'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      usersCollection: fire.firestore().collection('users')
    }
  }
  componentDidMount()
    {
      console.log("Signin", this.state.userType)
      if(this.props.user)
      {
        // this.props.history.push(`/${this.props.userType}`);
      }
    }
    onClickLogin = (e) =>{
      e.preventDefault();
      const { email, password } = this.state;
  
      if(email !== "" && password !== "" )
      {
        this.props.signin({ email, password });
      }
      else
      {
        alert("Some field is empty");
      }
    }
    logOut = () =>{
      this.props.signout();
      this.props.history.push('./MainPage');
    }
    handleStatus = name => event => {
      this.setState({ [name]: event.target.value });
    };
    componentWillReceiveProps(nextProps)
    {
      if(nextProps.user)
      {
        this.handleClose();
        this.props.history.push(`/${ nextProps.userType }`);
      }
      else
      {
        alert(nextProps.signInError);
      }
    };
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
                value={this.state.email}
                prefix={
                  <Icon
                    className="username-icon"
                    type="mail"
                  />
                }
              />
            </Row>
            <Row className="input-password" type="flex" justify="center">
              <Input
                placeholder="Password"
                value={this.state.password}
                prefix={
                  <Icon
                    className="username-icon"
                    type="lock"
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
              <Button 
                onClick={this.onClickLogin} 
                className="signin-button"
                >Sign in
              </Button>
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
const mapStateToProps = (state) =>{
  console.log("Global State", state);
  return({
    user: state.authReducer.user,
    userType: state.authReducer.userType,
    signInError: state.authReducer.signInError,
  })
}

const mapDispatchToProps = (dispatch) =>{
  return({
      signin: (userData) => dispatch(signin(userData)),
      signout: () => dispatch(signout()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
