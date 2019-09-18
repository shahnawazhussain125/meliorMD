import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Breadcrumb, Rate, Checkbox, Select, TimePicker, Tooltip, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import moment from 'moment';

const InputGroup = Input.Group;
const { TabPane } = Tabs;
const { Option } = Select;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const format = 'HH:mm';

class SearchResult extends Component {

    render() {
        return (
            <div className="provoder-list-body">
                <Row>
                    <Col>
                        <Breadcrumb className="bread-crumb">
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>California</Breadcrumb.Item>
                            <Breadcrumb.Item>San Francisc</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row type="flex" >
                    <Col sm={5} md={5} xs={24} className="search-content">
                        <div>
                            <h1>Filter Result</h1>
                        </div>
                        <div>
                            <div>
                                <label className="input-label">LOCATIONS BY CITY</label>
                                <Input className="search-input" placeholder="E.g San Francisc" />
                            </div><br />
                        </div>
                        <div>
                            <div>
                                <label className="input-label">ZIP COD</label>
                                <Input className="search-input" placeholder="Zip cod" />
                            </div><br />
                        </div>
                        <div>
                            <div>
                                <label className="input-label">PROVIDER CATEGOR</label>
                                <Select
                                    showSearch
                                    className="search-input"
                                    placeholder="Select a provider"
                                    optionFilterProp="children"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div><br />
                        </div>
                        <div>
                            <div>
                                <label className="input-label">SPECIALITY BY PROVIDER CATEGOR</label>
                                <Select
                                    showSearch
                                    className="search-input"
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                >
                                    <Option value="jack" select>Obstercician/Gynecologis</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                            <div><br />
                                <div>
                                    <label className="input-label">HEALTH INSURANCE</label>
                                    <Select
                                        showSearch
                                        className="search-input"
                                        placeholder="Select a provider"
                                        optionFilterProp="children"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </div>
                            </div><br /><br />
                            <Row>
                                <div>
                                    <p>HIDE ADVANCED SEARCH <Icon type="caret-right" /></p>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <p className="input-label">TYPE OF PATIENT SERVED</p>
                                    <ul className="input-ul">
                                        <li>
                                            <Checkbox className="input-checkbox" value="Adults Only">Adults Only</Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox className="input-checkbox" value="Both Adults and Children">Both Adults and Children</Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox className="input-checkbox" value="Children & Adolescents Only">Children & Adolescents Only</Checkbox>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="input-label">GENDER OF HEALTHCARE PROVIDER</p>
                                    <ul className="input-ul">
                                        <li>
                                            <Checkbox className="input-checkbox" value="Female">Female</Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox className="input-checkbox" value="Male">Male</Checkbox>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </Col>


                    <Col className="col-profile" sm={11} md={11} xs={24}>
                        <Row type="flex" justify="center">
                            <Col span={22}>
                                <div className="div-profile">
                                    <Tabs defaultActiveKey="1"
                                      className="tabs-container">

                                        <TabPane className="tab-pane" tab="Overview" key="1">
                                            <Row>
                                                <Col span={10}>Picture</Col>
                                                <Col span={14}>
                                                    <span><h6 className="font">DENTRISTRY-GENERAL DENTISTRY</h6></span>
                                                    <span><h3 className="font">Abby Abelson, MD, FACR</h3></span>
                                                    <span><Rate disabled defaultValue={3} /></span><br /><br />
                                                    <span><h5 className="font">ADDRESS<br />2726 Shinn Street, Newyork -view map</h5></span>
                                                    <span>
                                                        <span className="span-call">CALL</span><br />
                                                        <span className="contact-num">216.445.2030</span>
                                                    </span><br /><br />
                                                </Col>
                                            </Row>
                                            <div className="div-text">
                                                <h5 className="h5-style">
                                                    <span className="span-text">Professional statement</span><br />
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            </h5>
                                                <h5 className="h5-style">
                                                    <span className="span-text">Education & Fellowships</span><br />
                                                    Fellowship - Vanderbilt University Medical Center<br />
                                                    Hematology<br />
                                                    Nashville, TN USA<br />
                                                    1991<br /><br />
                                                    Residency - University of Missouri Hospitals & Clinics<br />
                                                    Internal Medicine<br />
                                                    Columbia, MO USA<br />
                                                    1988
                                            </h5>
                                                <h5 className="h5-style">
                                                    <span className="span-text">Certifications</span><br />
                                                    • Internal Medicinez<br />
                                                    • Internal Medicine - Hematology<br />
                                                    • Pathology - Blood Banking/Transfusion Medicine<br />
                                                </h5>
                                            </div>
                                        </TabPane>

                                        <TabPane className="tab-pane" tab="Patient Satisfaction reviews" key="2">
                                            Content of Tab Pane 2
                                    </TabPane>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={8} md={5} xs={24} className="col-profile">
                        <Row type="flex" justify="center">
                            <Col span={24}>
                                <div className="div-profile">
                                    <div className="div-head">
                                        <h2 style={{ color:'#ffffff' }}>BOOK A VISIT</h2>
                                        <h5 style={{ color:'#ffffff' }}>Monday to Friday 09.00am-06.00pm</h5>
                                    </div>

                                    <div className="div-pad">
                                        <label><h5 className="span2-text">PHONE NAME</h5></label>
                                        <Input
                                            placeholder="Enter your username"
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            suffix={
                                                <Tooltip title="Extra information">
                                                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                                </Tooltip>
                                            }
                                        />
                                    </div>

                                    <div className="div-pad">
                                        <label><h5 className="span2-text">PHONE NUMBER</h5></label>
                                        <Input placeholder="Your phone number" />
                                    </div>

                                    <div className="div-pad">
                                        <label><h5 className="span2-text">SELECT DATE</h5></label>
                                        <DatePicker defaultValue={moment('00/00/2019', dateFormatList[0])} format={dateFormatList} />
                                    </div>

                                    <div className="div-pad">
                                        <label><h5 className="span2-text">SELECT TIME</h5></label>
                                        <TimePicker defaultValue={moment('00:00', format)} format={format} />
                                    </div>

                                    <div className="div-pad">
                                        <Checkbox>
                                            <span className="span2-text">Oral Maintainance</span>
                                        </Checkbox><br />

                                        <Checkbox>
                                            <span className="span2-text">General Visit</span>
                                        </Checkbox><br />

                                        <Checkbox>
                                            <span className="span2-text">Oral Flow</span>
                                        </Checkbox>
                                    </div>

                                    
                                    <div className="div-pad">
                                    <Row type="flex" justify="center">
                                        <Col span="24">
                                            <Button className="request-appoint">REQUEST<br/>APPOINTMENT</Button>
                                        </Col>
                                    </Row>
                                    </div>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={3} style={{ backgroundColor: '#ffffff' }}>
                        <Row type="flex" justify="center">

                        </Row>
                    </Col>
                </Row>
            </div >
        )
    }
}


export default SearchResult;