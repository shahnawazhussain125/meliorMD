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
                <Row span={24} className="footer">
                    <Col span={12}>
                        <div>
                            <img className="header-logo" src={logo} alt="logo" />
                        </div>
                        <div>
                            <p>
                                MeliorMD is a one-stop shop for finding healthcare providers
                                across specialties. Finding a healthcare provider can be
                            </p>
                        </div>
                    </Col>
                    <Col span={12}>
                        <Row gutter={24}>
                            <Col span={8}>
                                <div>
                                    <div>
                                        <p>FEATURE</p>
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
                            </Col>
                            <Col span={8}>
                                <div>
                                    <div>
                                        <p></p>
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
                            </Col>
                            <Col span={8}>
                                <div>
                                    <p>FOLLO</p>
                                </div>
                                <div className="icons-list">
                                    <Icon type="linkedin" />
                                    <IconFont type="icon-facebook" />
                                    <IconFont type="icon-twitter" />
                                </div>
                                <div>
                                    <p>ENGLISH</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr/>
                <Row type="flex" justify="center">
                    <div>
                        <p>© 2019 CityNetworksGroup. All rights reserved</p>
                    </div>
                    <div>
                        <ul>
                            <li>Legal</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>devias.io</li>
                        </ul>
                    </div>
                </Row>
            </div>
        )
    }
}


export default Footer;