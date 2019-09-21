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
                        <Row  type="flex" justify="center"> 
                            <Col span={15} className="search-result-body-setting" >
                                <Row> 
                                    <Col span={18}>
                                        <h1 className="search-result-number"><span style={{color:"#0F6AB6"}}>202 </span> Physicians</h1>
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
                            <Col span={16}>

                                <Row className="profile-list">
                                    <Col span={6} className="profile-img-container">
                                        <img src={dr_image} alt="dr_image" className="profile-img" />
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button className="view-profile">VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                
                                <Row className="profile-list">
                                    <Col span={6} className="profile-img-container">
                                        <img src={dr_image} alt="dr_image" className="profile-img" />
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button className="view-profile">VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="profile-list">
                                    <Col span={6} className="profile-img-container">
                                        <img src={dr_image} alt="dr_image" className="profile-img" />
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button className="view-profile">VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="profile-list">
                                    <Col span={6} className="profile-img-container">
                                        <img src={dr_image} alt="dr_image" className="profile-img" />
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button className="view-profile">VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="profile-list">
                                    <Col span={6} className="profile-img-container">
                                        <img src={dr_image} alt="dr_image" className="profile-img" />
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button className="view-profile">VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="profile-list">
                                    <Col span={6} className="profile-img-container">
                                        <img src={dr_image} alt="dr_image" className="profile-img" />
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button className="view-profile">VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="profile-list">
                                    <Col span={6} className="profile-img-container">
                                        <img src={dr_image} alt="dr_image" className="profile-img" />
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button className="view-profile">VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
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