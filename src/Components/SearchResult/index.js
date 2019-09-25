import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Checkbox, Breadcrumb, Select } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import dr_image from '../../assets/images/dr_img1.jpg';

const { Option } = Select;

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
                    <Col span={5} className="search-content">
                        <div>
                            <h1>Filter Result</h1>
                        </div>
                        <div className="input-spacing">
                            <div>
                                <label className="input-label">LOCATIONS BY CITY</label>
                                <Input className="search-input" placeholder="E.g San Francisc" />
                            </div>
                        </div>
                        <div className="input-spacing">
                            <div>
                                <label className="input-label">ZIP COD</label>
                                <Input className="search-input" placeholder="Zip cod" />
                            </div>
                        </div>
                        <div className="input-spacing">
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
                            </div>
                        </div>
                        <div className="input-spacing">
                            <div className="input-spacing">
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
                            <div className="input-spacing">
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
                            </div>
                            <Row>
                                <div>
                                    <p className="advance-search">HIDE ADVANCED SEARCH <Icon type="caret-right" /></p>
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

                    <Col span={19} className="search-result-body">
                        <Row type="flex" justify="center">
                            <Col xxl={14} xl={15} lg={16} md={20} className="search-result-body-setting" >
                                <Row>
                                    <Col span={18}>
                                        <h1 className="search-result-number"><span style={{ color: "#0F6AB6" }}>202 </span> Physicians</h1>
                                    </Col>
                                    <Col span={6} type="flex" justify="flex-end">
                                        <Select
                                            showSearch
                                            style={{ width: '100%' }}
                                            placeholder="Sort by"
                                            optionFilterProp="children"
                                        >
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="tom">Tom</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row type="flex" justify="center">
                            <Col xxl={14} xl={15} lg={16} md={20} sm={23} xs={24}>

                                <Row className="profile-list">
                                    <Col lg={5} md={6} sm={6} xs={10} className="profile-img-container">
                                        <img src={dr_image} alt="dr_image" className="profile-img" />
                                    </Col>
                                    <Col lg={10} md={11} sm={10} xs={14}>
                                        <Row >
                                            <h4 className="h4-card">Abby Abelson, MD, FACR</h4>
                                            <h5 className="h5-card">
                                                <span className="h5-card-span1">Physician </span>
                                                    — Obstetrician/Gynecologist<br />
                                                <span className="h5-card-span2">ADDRESS</span><br />
                                                    2726 Shinn Street, New York - 
                                                <span className="h5-card-span3"> View on map </span>
                                            </h5>
                                            <Button className="view-profile">VIEW PROFILE</Button>
                                        </Row>
                                    </Col>
                                    <Col lg={2} md={1} sm={0} xs={0}>
                                    </Col>
                                    <Col lg={6} md={6} sm={8} xs={24}>
                                        <Row className="profile-list-call-container">
                                            <div>
                                                <p className="profile-list-call-text">CALL : </p>
                                                <h3 className="profile-list-call">218.445.2030</h3>
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default SearchResult;