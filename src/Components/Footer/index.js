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
            <div>
                <Row className="footer">
                    <Col span={2} ></Col>
                    <Col span={6} className="footer-logo-container">
                        <Row className="footer-logo">
                            <img src={logo} alt="logo" />
                        </Row>
                        <Row className="footer-logo-text">
                            <p>
                                MeliorMD is a one-stop shop for finding healthcare providers
                                <br/>
                                across specialties. Finding a healthcare provider can be
                            </p>
                        </Row>
                    </Col>

                    <Col span={4} className="border-black">
                        <Row type="flex" justify="center">
                            <div>
                                <div>
                                    <p>FEATURES</p>
                                </div>
                                <div>
                                    <ul>
                                        <li>Find Doctors</li>
                                        <li>Add a provider listing</li>
                                        <li>About</li>
                                        <li>Mission</li>
                                    </ul>
                                </div>
                            </div>
                        </Row>
                    </Col>

                    <Col span={4} className="border-black">
                        <Row>
                            <div>
                                <div>
                                    <p>Company</p>
                                </div>
                                <div>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Pricing</li>
                                        <li>Careers</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </Row>
                    </Col>

                    <Col span={4} className="border-black">
                        <Row >
                            <div>
                                <p>FOLLOW<br /></p>
                            </div>
                            <div className="icons-list"><br />
                                <Icon type="linkedin" /><br />
                                <IconFont type="icon-facebook" /> <br />
                                <IconFont type="icon-twitter" />
                            </div>
                            <br />
                        </Row>
                    </Col>
                    
                    <Col span={2} ></Col>
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