import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import logo from '../../assets/images/md-logo.png';

class Header extends Component {

    render() {
        return (
            <div>
                <Row type="flex" className="header-bar">
                    <Col span={4}>
                        <img className="header-logo" src={logo} alt="logo" />
                    </Col>
                    <Col span={16}>
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
                        <div className="vl">
                            <div>
                                <Button type="primary" className="provider-button">Provider Login</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Header;