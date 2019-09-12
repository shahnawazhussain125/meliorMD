import React, { Component } from 'react'
import { Row, Col, Input, Button, Icon, Tabs, Rate, Breadcrumb, Select, Pagination } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const InputGroup = Input.Group;
const { TabPane } = Tabs;
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
                            <span style={{fontSize:'200%',marginLeft:'10px'}}>422 Doctors</span>
                        </Col>
                        <Col span="5"></Col>
                        <Col span="3"><div style={{marginTop:'10%',margin:'1px'}}>More Filters</div></Col>
                        <Col span="5">
                            <Select
                                showSearch
                                style={{ width:'100%',marginTop:'5px' }}
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
                                showSearch
                                style={{ width:'100%',marginTop:'5px',marginLeft:'5px' }}
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

                    <Row type="flex" justify="center" style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>

                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p style={{fontSize:'12px',padding:'2px'}}>108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>

                                <Col span="4"></Col>

                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p style={{fontSize:'12px',padding:'2px'}}>DEPARTMENTS<br/>
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
                                    <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row type="flex" justify="center" style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>

                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p style={{fontSize:'12px',padding:'2px'}}>108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>

                                <Col span="4"></Col>

                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p style={{fontSize:'12px',padding:'2px'}}>DEPARTMENTS<br/>
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
                                    <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row type="flex" justify="center" style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>

                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p style={{fontSize:'12px',padding:'2px'}}>108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>

                                <Col span="4"></Col>

                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p style={{fontSize:'12px',padding:'2px'}}>DEPARTMENTS<br/>
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
                                    <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row type="flex" justify="center" style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>

                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p style={{fontSize:'12px',padding:'2px'}}>108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>

                                <Col span="4"></Col>

                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p style={{fontSize:'12px',padding:'2px'}}>DEPARTMENTS<br/>
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
                                    <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row type="flex" justify="center" style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>

                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p style={{fontSize:'12px',padding:'2px'}}>108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>

                                <Col span="4"></Col>

                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p style={{fontSize:'12px',padding:'2px'}}>DEPARTMENTS<br/>
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
                                    <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row type="flex" justify="center" style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                        <Col span={6}>
                            <p>Helwo</p>
                        </Col>

                        <Col span={18}>
                            <Row type="flex" style={{borderBottom:'2px solid #DDDEE5'}}>
                            <div >
                                <h4>Abby Abelson, MD, FACR</h4>
                                <Col span="12">
                                    <Rate disabled defaultValue={4} />
                                    <p style={{fontSize:'12px',padding:'2px'}}>108 Patient Satisfaction Ratings<br/>10 Patient Comments</p>
                                </Col>

                                <Col span="4"></Col>

                                <Col span="8">
                                    <Row type="flex" justify="center">
                                    <p style={{fontSize:'12px',padding:'2px'}}>DEPARTMENTS<br/>
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
                                    <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>REQUEST APPOINTMENT >></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </Col>

                <Col span="12">
                    <div style={{border:'2px solid #E7E7E7',margin:'10px'}}>
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
