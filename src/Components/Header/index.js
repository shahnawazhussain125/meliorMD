import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import logo from '../../assets/images/md-logo.png';

class Header extends Component {

    render() {
        return (
            <div>
                <Row className="header-bar">
                    <Col span={8}>
                        <img className="header-logo" src={logo} alt="logo" />
                    </Col>
                    <Col span={12}>
                        <div className="navbar">
                            <ul className="navbar-links">
                                <li>ABOUT</li>
                                <li>DIRECTORY</li>
                                <li>CONTACT US</li>
                                <li>ADD A PROVIDER LIST</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={4}>
                    <   div class="vl"></div>
                        <div>
                            <Button type="primary">Provider Login</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Header;