import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Radio, Breadcrumb, Rate, Checkbox, Select, TimePicker, Tooltip, DatePicker } from 'antd';
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
                        <Breadcrumb style={{backgroundColor:'#F1F4F6',padding:'5px', paddingLeft:'15px', borderBottom:'1px solid #E0E1E2'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>California</Breadcrumb.Item>
                            <Breadcrumb.Item>San Francisc</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row type="flex" >
                    <Col span={5} style={{padding:'2%', backgroundColor:'#F1F4F6', borderRight:'1px solid #E0E1E2'}}>
                        <div>
                            <h1>Filter Result</h1>
                        </div>
                        <div>
                            <div>
                                <label>LOCATIONS BY CITY</label>
                                <Input placeholder="E.g San Francisc" />
                            </div><br/>
                        </div>
                        <div>
                            <div>
                                <label>ZIP COD</label>
                                <Input placeholder="Zip cod" />
                            </div><br/>
                        </div>
                        <div>
                            <div>
                                <label>PROVIDER CATEGOR</label>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a provider"
                                    optionFilterProp="children"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div><br/>
                        </div>
                        <div>
                            <div>
                                <label>SPECIALITY BY PROVIDER CATEGOR</label>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                >
                                    <Option value="jack" select>Obstercician/Gynecologis</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                            <div><br/>
                                <div>
                                    <label>HEALTH INSURANCE</label>
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Select a provider"
                                        optionFilterProp="children"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </div>
                            </div><br/><br/>
                            <Row>
                                <div>
                                    <p>HIDE ADVANCED SEARCH <Icon type="caret-right" /></p>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <p>TYPE OF PATIENT SERVED</p>
                                    <ul>
                                        <li>
                                            <Radio style={{fontSize:"12px"}} value="Adults Only">Adults Only</Radio>
                                        </li>
                                        <li>
                                            <Radio style={{fontSize:"12px"}} value="Both Adults and Children">Both Adults and Children</Radio>
                                        </li>
                                        <li>
                                            <Radio style={{fontSize:"12px"}} value="Children & Adolescents Only">Children & Adolescents Only</Radio>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p>GENDER OF HEALTHCARE PROVIDER</p>
                                    <ul>
                                        <li>
                                            <Radio style={{fontSize:"12px"}} value="Female">Female</Radio>
                                        </li>
                                        <li>
                                            <Radio style={{fontSize:"12px"}} value="Male">Male</Radio>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </Col>

                    <Col span={11} style={{backgroundColor:'#ffffff'}}>
                        <Row type="flex" justify="center">
                            <Col span={18}>
                                <div style={{marginTop:'50px',border:'2px solid #E5E8E8'}}>
                                <Tabs defaultActiveKey="1" 
                                style={{backgroundColor:'#2A70A9',color:'#ffffff'}}>

                                    <TabPane tab="Overview" key="1" style={{backgroundColor:'#ffffff',color:'#000000',padding:'10px'}}>
                                        <Row>
                                        <Col span={10}>Picture</Col>
                                        <Col span={14}>
                                            <span><h6 style={{color:'#696A6A'}}>DENTRISTRY-GENERAL DENTISTRY</h6></span>
                                            <span><h3 style={{color:'#696A6A'}}>Abby Abelson, MD, FACR</h3></span>
                                            <span><Rate disabled defaultValue={3} /></span><br/><br/>
                                            <span><h5 style={{color:'#696A6A'}}>ADDRESS<br/>2726 Shinn Street, Newyork -view map</h5></span>
                                            <span>
                                                <span style={{color:'#696A6A',fontWeight:'bold'}}>CALL</span><br/>
                                                <span style={{fontSize:'20px',fontWeight:'bold',color:'#0F6AB6'}}>216.445.2030</span>
                                            </span><br/><br/>
                                        </Col>
                                        </Row>
                                        <div style={{borderTop:'2px solid #E5E8E8',padding:'8px'}}>
                                            <h5 style={{color:'#696A6A'}}>
                                                <span style={{fontSize:'15px'}}>Professional statement</span><br/>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            </h5>
                                            <h5 style={{color:'#696A6A'}}>
                                                <span style={{fontSize:'15px'}}>Education & Fellowships</span><br/>
                                                Fellowship - Vanderbilt University Medical Center<br/>
                                                Hematology<br/>
                                                Nashville, TN USA<br/>
                                                1991<br/><br/>
                                                Residency - University of Missouri Hospitals & Clinics<br/>
                                                Internal Medicine<br/>
                                                Columbia, MO USA<br/>
                                                1988
                                            </h5>
                                            <h5 style={{color:'#696A6A'}}>
                                                <span style={{fontSize:'15px'}}>Certifications</span><br/>
                                                • Internal Medicinez<br/>
                                                • Internal Medicine - Hematology<br/>
                                                • Pathology - Blood Banking/Transfusion Medicine<br/>
                                            </h5>
                                        </div>
                                    </TabPane>

                                    <TabPane tab="Patient Satisfaction reviews" key="2" style={{backgroundColor:'#ffffff',color:'#000000',padding:'7px'}}>
                                    Content of Tab Pane 2
                                    </TabPane>
                                </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={5} style={{backgroundColor:'#ffffff'}}>
                        <Row type="flex" justify="center">
                            <Col span={18}>
                                <div style={{marginTop:'50px',border:'2px solid #ECEEEE'}}>
                                    <div style={{backgroundColor:'#2A70A9',padding:'8px',}}>
                                        <h2 style={{color:'#ffffff'}}>BOOK A VISIT</h2>
                                        <h5 style={{color:'#ffffff'}}>Monday to Friday 09.00am-06.00pm</h5>
                                    </div>

                                    <div style={{padding:'10px'}}>
                                    <label><h5 style={{color:'#AEB1B1'}}>PHONE NAME</h5></label>
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

                                    <div style={{padding:'10px'}}>
                                        <label><h5 style={{color:'#AEB1B1'}}>PHONE NUMBER</h5></label>
                                        <Input placeholder="Your phone number" />
                                    </div>
                                    
                                    <div style={{padding:'10px'}}>
                                        <label><h5 style={{color:'#AEB1B1'}}>SELECT DATE</h5></label>
                                        <DatePicker defaultValue={moment('00/00/2019', dateFormatList[0])} format={dateFormatList} />
                                    </div>
                                    
                                    <div style={{padding:'10px'}}>
                                        <label><h5 style={{color:'#AEB1B1'}}>SELECT TIME</h5></label>
                                        <TimePicker defaultValue={moment('00:00', format)} format={format} />
                                    </div>
                                    
                                    <div style={{padding:'10px'}}>
                                        <Checkbox>
                                            <span style={{color:'#AEB1B1'}}>Oral Maintainance</span>
                                        </Checkbox><br/>

                                        <Checkbox>
                                            <span style={{color:'#AEB1B1'}}>General Visit</span>
                                        </Checkbox><br/>

                                        <Checkbox>
                                            <span style={{color:'#AEB1B1'}}>Oral Flow</span>
                                        </Checkbox>
                                    </div>

                                    <div style={{padding:'10px'}}>
                                    <Button style={{height:'30px',border:'2px solid #6D8496',borderRadius:'15px',color:'#6D8496', fontSize:'10px', fontWeight:'bold'}}>REQUEST APPOINTMENT >>></Button>
                                    </div>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={3} style={{backgroundColor:'#ffffff'}}>
                        <Row type="flex" justify="center">
                            
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default SearchResult;