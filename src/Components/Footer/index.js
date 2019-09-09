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
                    <Col span={2}>
                        <Row type="flex" justify="center">
                        </Row>
                    </Col>

                    <Col span={8}>
                        <Row type="flex" justify="center">
                        <div>
                            <img className="header-logo" src={logo} alt="logo" />
                        </div>
                        <div>
                            <p>
                                MeliorMD is a one-stop shop for finding healthcare providers
                                across specialties. Finding a healthcare provider can be
                            </p>
                        </div>
                        </Row>
                    </Col>

                    <Col span={4}>
                        <Row type="flex" justify="center">
                        </Row>
                    </Col>

                    <Col span={3}>
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

                    <Col span={3}>
                        <Row type="flex" justify="center">
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

                    <Col span={3}>
                        <Row type="flex" justify="center">
                            <div>
                                <p>FOLLOW<br/></p>
                            </div>
                            <div className="icons-list"><br/>
                                <Icon type="linkedin" /><br/>
                                <IconFont type="icon-facebook" /> <br/>
                                <IconFont type="icon-twitter" />
                            </div>
                            <br/>
                            
                        </Row>
                    </Col>

                    <Col span={1}>
                        <Row type="flex" justify="center">
                        </Row>
                    </Col>
                </Row>
                    
                <Row type="flex" justify="center">
                    <div>
                        <p>© 2019 CityNetworksGroup. All rights reserved</p>
                    </div>
                    <div>
                    Legal Terms Privacy devias.i
                    </div>
                </Row>
            </div>
        )
    }
}


export default Footer;