import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import logo from '../../assets/images/footer-lgo.png';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class Footer extends Component {

    render() {
        return (
            <div className="footer-div">
                <Row className="footer">
                    <Col lg={2} md={1} sm={0} xs={0}></Col>

                    <Col lg={6} md={6} sm={6} xs={7} className="footer-logo-container">
                        <Row className="footer-logo">
                            <img className="melior-logo" src={logo} alt="logo" />
                        </Row>
                        <Row className="footer-logo-text">
                            <p>
                                MeliorMD is a one stop shop for finding health care providers 
                                across specialties. Finding a healthcare provider can be
                            </p>
                        </Row>
                    </Col>

                    <Col lg={0} md={0} sm={0} xs={1}></Col>

                    <Col lg={4} md={4} sm={4} xs={6} className="border-black">
                        <Row className="links-title">
                            <h4>FEATURES</h4>
                        </Row>
                        <Row className="links-list">
                            <ul>
                                <li className="li-padding">Find Doctors</li>
                                <li className="li-padding">Add a provider listing</li>
                                <li className="li-padding">About</li>
                                <li className="li-padding">Mission</li>
                            </ul>
                        </Row>
                    </Col>

                    <Col lg={4} md={4} sm={4} xs={5} className="border-black">
                        <Row className="links-title">
                            <h4>COMPANY</h4>
                        </Row>
                        <Row className="links-list">
                            <ul>
                                <li className="li-padding">About Us</li>
                                <li className="li-padding">Pricing</li>
                                <li className="li-padding">Careers</li>
                                <li className="li-padding">Contact Us</li>
                            </ul>
                        </Row>
                    </Col>

                    <Col lg={0} md={0} sm={0} xs={1}></Col>

                    <Col lg={4} md={4} sm={4} xs={4} className="border-black">
                        <Row className="links-title">
                            <h4>FOLLOW</h4>
                        </Row>
                        <Row type="flex">
                                <Col lg={6} md={6} sm={6} xs={24}>
                                    <Icon type="linkedin" className="icon" />
                                </Col>

                                <Col lg={1} md={1} sm={1} xs={0}></Col>

                                <Col lg={6} md={6} sm={6} xs={24}>
                                    <IconFont type="icon-facebook" className="icon" />
                                </Col>

                                <Col lg={1} md={1} sm={1} xs={0}></Col>

                                <Col lg={6} md={6} sm={6} xs={24}>
                                    <IconFont type="icon-twitter" className="icon" />
                                </Col>
                            <br />
                        </Row>
                    </Col>

                    <Col lg={2} md={1} sm={0} xs={0}></Col>
                </Row>

                <Row type="flex" justify="space-around">
                    <div className="copy-right-container">
                        <p>© 2019 CityNetworksGroup. All rights reserved</p>
                    </div>
                    <div className="footer-bottom">
                        <ul className="terms-privacy">
                            <li>Legal</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>devias.i</li>
                        </ul>
                    </div>
                </Row>
            </div>
        )
    }
}


export default Footer;