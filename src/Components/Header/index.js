import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import logo from '../../assets/images/md-logo.webp';
import DrawerTab from '../Drawer'

class Header extends Component {

    render() {
        return (
            <div className="header-div">
                <Row type="flex" className="header-bar">
                <Col lg={5} md={5} sm={8} xs={8}>
                    <Col span={6}>
                        <DrawerTab/>
                    </Col>
                    <Col span={14}>
                        <img className="header-logo" src={logo} alt="logo" />
                    </Col>
                </Col>
                    <Col lg={15} md={15} sm={0} xs={0}>
                        <div className="navbar">
                            <ul className="navbar-links">
                                <li>ABOUT</li>
                                <li>DIRECTORY</li>
                                <li>CONTACT US</li>
                                <li>ADD A PROVIDER LIST</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={8} xs={8}>
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