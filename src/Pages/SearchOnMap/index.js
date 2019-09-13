import React, { Component } from 'react'
import { Row, Col, Input, Button, Icon, Tabs, Rate, Breadcrumb, Select } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const { Option } = Select;
const { Search } = Input;

class SearchOnMap extends Component {
    render() {
        return (
            <div>
            <Row type="flex" justify="center">
                <Col span="12">
                    <Row type="flex" justify='center'>
                        <Col span="24">
                            <Search
                                placeholder="E.g Newyork"
                                onSearch={value => console.log(value)}
                                style={{ width:'100%',marginTop:'3px' }}
                              />
                        </Col>
                    </Row>
                    <Row className="layout-row">
                        <Col span="24">
                            <Breadcrumb className="bread-crumb">
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>California</Breadcrumb.Item>
                                <Breadcrumb.Item>San Francisc</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row className="search-row">
                        <Col span="6">
                            <span className="num-doctors">422 Doctors</span>
                        </Col>
                        <Col span="5"></Col>
                        <Col span="3"><div style={{marginTop:'10%',margin:'1px'}}>More Filters</div></Col>
                        <Col span="5">
                            <Select
                                className="show-search"
                                showSearch
                                placeholder="E.g Physician"
                                optionFilterProp="Physician"
                                // onChange={onChange}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="physician">Physician</Option>
                                <Option value="surgeon">Surgeon</Option>
                                <Option value="dentist">Dentist</Option>
                            </Select>
                        </Col>

                        <Col span="5">
                            <Select
                                className="show-search"
                                showSearch
                                placeholder="Sort by"
                                optionFilterProp="Physician"
                                // onChange={onChange}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Col>
                    </Row>

                    <Row type="flex" justify="center" className="card-style" >
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>
                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p className="patient-rating">108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>
                                <Col span="4"></Col>
                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p className="patient-rating">DEPARTMENTS<br/>
                                        Dentistry — General Dentistry<br/>
                                        LOCATIONS<br/>
                                        Hilcrest Hospital
                                    </p>
                                    </Row>
                                </Col>
                            </div>
                            </Row>
                            <Row type="flex">
                                <Col span="16"><h6>View on Map | Directions</h6></Col>
                                <Col span="8">
                                    <Button className="button-appointment">REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row type="flex" justify="center" className="card-style">
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>
                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p className="patient-rating">108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>
                                <Col span="4"></Col>
                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p className="patient-rating">DEPARTMENTS<br/>
                                        Dentistry — General Dentistry<br/>
                                        LOCATIONS<br/>
                                        Hilcrest Hospital
                                    </p>
                                    </Row>
                                </Col>
                            </div>
                            </Row>
                            <Row type="flex">
                                <Col span="16"><h6>View on Map | Directions</h6></Col>
                                <Col span="8">
                                    <Button className="button-appointment">REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row type="flex" justify="center" className="card-style">                        
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>
                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p className="patient-rating">108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>
                                <Col span="4"></Col>
                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p className="patient-rating">DEPARTMENTS<br/>
                                        Dentistry — General Dentistry<br/>
                                        LOCATIONS<br/>
                                        Hilcrest Hospital
                                    </p>
                                    </Row>
                                </Col>
                            </div>
                            </Row>
                            <Row type="flex">
                                <Col span="16"><h6>View on Map | Directions</h6></Col>
                                <Col span="8">
                                    <Button className="button-appointment">REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row type="flex" justify="center" className="card-style">                        
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>
                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p className="patient-rating">108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>
                                <Col span="4"></Col>
                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p className="patient-rating">DEPARTMENTS<br/>
                                        Dentistry — General Dentistry<br/>
                                        LOCATIONS<br/>
                                        Hilcrest Hospital
                                    </p>
                                    </Row>
                                </Col>
                            </div>
                            </Row>
                            <Row type="flex">
                                <Col span="16"><h6>View on Map | Directions</h6></Col>
                                <Col span="8">
                                    <Button className="button-appointment">REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row type="flex" justify="center" className="card-style">                        
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>
                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p className="patient-rating">108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>
                                <Col span="4"></Col>
                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p className="patient-rating">DEPARTMENTS<br/>
                                        Dentistry — General Dentistry<br/>
                                        LOCATIONS<br/>
                                        Hilcrest Hospital
                                    </p>
                                    </Row>
                                </Col>
                            </div>
                            </Row>
                            <Row type="flex">
                                <Col span="16"><h6>View on Map | Directions</h6></Col>
                                <Col span="8">
                                    <Button className="button-appointment">REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row type="flex" justify="center" className="card-style">                        
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>
                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p className="patient-rating">108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>
                                <Col span="4"></Col>
                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p className="patient-rating">DEPARTMENTS<br/>
                                        Dentistry — General Dentistry<br/>
                                        LOCATIONS<br/>
                                        Hilcrest Hospital
                                    </p>
                                    </Row>
                                </Col>
                            </div>
                            </Row>
                            <Row type="flex">
                                <Col span="16"><h6>View on Map | Directions</h6></Col>
                                <Col span="8">
                                    <Button className="button-appointment">REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col span="12">
                    <div className="map-border">
                        Map Picture here<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </Col>
            </Row>
            </div>
        )
    }
}

export default SearchOnMap;
