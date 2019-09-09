import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Collapse, Tooltip, Checkbox, Select, Pagination } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const InputGroup = Input.Group;
const { TabPane } = Tabs;
const { Option } = Select;
const { Panel } = Collapse;

class Search extends Component {

    render() {
      return (
        <div className="provoder-list-body">
            <Row className="row-container">
            <Col span={12}>
                <div className="div-container" style={{backgroundColor:'#5C96C6'}}>
                    <span style={{padding:'15px'}}>
                      <h1 style={{color:'#ffffff',textAlign:'center',fontFamily:'arial',fontSize:'35px'}}>Find your best Physicians</h1>
                      <h2 style={{color:'#ffffff',textAlign:'center',fontFamily:'arial'}}>meliorMD will help you in that important decision.</h2>
                        <Row type="flex" style={{padding:'10px'}}>
                          <Col span={10}>
                            <Row type="flex" justify="center">
                              <div>
                                <label><h6 style={{color:'#ffffff',fontFamily:'arial'}}>SPECIALITY BY PROVIDER CATEGORY</h6></label>
                                <Select
                                 showSearch
                                 style={{ width: 200 }}
                                 placeholder="Sort by"
                                 optionFilterProp="children"
                                >
                                 <Option value="jack">Jack</Option>
                                 <Option value="lucy">Lucy</Option>
                                 <Option value="tom">Tom</Option>
                                </Select>
                              </div>
                            </Row>
                          </Col>

                          <Col span={8}>
                            <Row type="flex" justify="center">
                                <div>
                                <label><h6 style={{color:'#ffffff',fontFamily:'arial'}}>LOCATION BY CITY</h6></label>
                                <Input placeholder="E.g San Francisc" />
                                </div>
                            </Row>
                          </Col>

                          <Col span={6}>
                                <div style={{paddingLeft:'20px', paddingTop:'20px'}}>
                                <Button 
                                style={{height:'30px',border:'2px solid #6D8496',borderRadius:'15px',color:'#6D8496',fontSize:'12px',display:'inline'}}
                                >
                                SEARCH >>>
                                </Button>
                                </div>
                          </Col>
                        </Row>

                        <Row type="flex">
                          <Col span={1}></Col>

                          <Col span={22}>
                          <Collapse defaultActiveKey={['1']} style={{backgroundColor:'#5C96C6',border:'0px',width:'100%'}}>
                            <Panel header="Advanced Search" key="1">
                              <div style={{backgroundColor:'#ffffff'}}>
                                <Row>
                                  <h3 style={{color:'#0D47A1'}}>Find a listing</h3>
                                </Row>

                                <div className="card-container">
                                  <Tabs type="card">
                                    <TabPane tab="Dentistry" key="1">
                                    <Row type="flex">
                                      <Col span={12}>
                                      <div style={{padding:'10px'}}>
                                        <Checkbox style={{marginBottom:'10px'}}>
                                            <span style={{color:'#8A8B8C'}}>General Dentist </span>
                                        </Checkbox><br/>
                                        <Checkbox style={{marginBottom:'10px'}}>
                                            <span style={{color:'#8A8B8C'}}>Endodontist</span>
                                        </Checkbox><br/>
                                        <Checkbox style={{marginBottom:'10px'}}>
                                            <span style={{color:'#8A8B8C'}}>Oral and Maxillofacial Surgeon</span>
                                        </Checkbox><br/>
                                        <Checkbox style={{marginBottom:'10px'}}>
                                            <span style={{color:'#8A8B8C'}}>Orthodontist</span>
                                        </Checkbox><br/>
                                      </div>
                                      </Col>

                                      <Col span={12}>
                                      <div style={{padding:'10px'}}>
                                        <Checkbox style={{marginBottom:'10px'}}>
                                            <span style={{color:'#8A8B8C'}}>Pediatric Dentist </span>
                                        </Checkbox><br/>
                                        <Checkbox style={{marginBottom:'10px'}}>
                                            <span style={{color:'#8A8B8C'}}>Periodontist </span>
                                        </Checkbox><br/>
                                        <Checkbox style={{marginBottom:'10px'}}>
                                            <span style={{color:'#8A8B8C'}}>Prosthodontics </span>
                                        </Checkbox>
                                      </div>
                                      </Col>
                                    </Row> 

                                    <Row type="flex" justify="center">
                                      <Col span="24">
                                      <div style={{padding:'10px'}}>
                                      <label><h5 style={{color:'#AEB1B1'}}>HOSPITAL/PRACTICE NAME</h5></label>
                                      <Input
                                          placeholder="Search by business name"
                                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                          suffix={
                                              <Tooltip title="Extra information">
                                              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                              </Tooltip>
                                            }
                                          /><br/><br/>

                                          <Col span="11">
                                          <div>
                                              <label><h5 style={{color:'#AEB1B1'}}>CITY OR STATE</h5></label>
                                              <Input placeholder="e.g California" />
                                          </div>
                                          </Col>
                                          <Col span="2">
                                          </Col>
                                          <Col span="11">
                                          <div>
                                              <label><h5 style={{color:'#AEB1B1'}}>ZIP CODE</h5></label>
                                              <Input placeholder="e.g California" />
                                          </div>
                                          </Col>
                                          
                                      </div>
                                      </Col>
                                    </Row>
                                    </TabPane>
                                    <TabPane tab="Physicians" key="2">
                                      <p>Content of Tab Pane 2</p>
                                      <p>Content of Tab Pane 2</p>
                                      <p>Content of Tab Pane 2</p>
                                    </TabPane>
                                    <TabPane tab="Other Healthcare Providers" key="3">
                                      <p>Content of Tab Pane 3</p>
                                      <p>Content of Tab Pane 3</p>
                                      <p>Content of Tab Pane 3</p>
                                    </TabPane>
                                  </Tabs>
                                </div>
                              </div>
                            </Panel>
                          </Collapse>
                          </Col>

                          <Col span={1}></Col>
                        </Row>

                    </span>
                </div>
            </Col>
            </Row>
        </div>
      )
    }
}


export default Search;