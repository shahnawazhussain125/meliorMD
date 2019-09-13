import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Collapse, Tooltip, Checkbox, Select } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

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
                      <h1 className="text-style" style={{fontSize:'35px'}}>Find your best Physicians</h1>
                      <h2 className="text-style" >meliorMD will help you in that important decision.</h2>
                        <Row type="flex" style={{padding:'10px'}}>
                          <Col span={10}>
                            <Row type="flex" justify="center">
                              <div>
                                <label><h6 className="h6-style">SPECIALITY BY PROVIDER CATEGORY</h6></label>
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
                                <label><h6 className="h6-style">LOCATION BY CITY</h6></label>
                                <Input placeholder="E.g San Francisc" />
                                </div>
                            </Row>
                          </Col>

                          <Col span={6}>
                                <div style={{paddingLeft:'20px', paddingTop:'20px'}}>
                                <Button className="button-style">
                                  SEARCH >>
                                </Button>
                                </div>
                          </Col>
                        </Row>

                        <Row type="flex">
                          <Col span={1}></Col>

                          <Col span={22}>
                          <Collapse className="collapse-tab" defaultActiveKey={['1']}>
                            <Panel header="Advanced Search" key="1">
                              <div style={{backgroundColor:'#ffffff',height:'auto'}}>
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
                                      </Row><br/>
                                          
                                          <Row type="flex" justify="center">
                                            <Col span="24">
                                              <h6 style={{color:'#AEB1B1'}}>TYPE OF PATIENT SERVED</h6>
                                              <div style={{padding:'10px'}}>
                                                <Checkbox style={{marginBottom:'10px'}}>
                                                    <span style={{color:'#8A8B8C'}}>Adults Only </span>
                                                </Checkbox><br/>
                                                <Checkbox style={{marginBottom:'10px'}}>
                                                    <span style={{color:'#8A8B8C'}}>Both Adults and Children &  </span>
                                                </Checkbox><br/>
                                                <Checkbox style={{marginBottom:'10px'}}>
                                                    <span style={{color:'#8A8B8C'}}>Children & Adolescents Only </span>
                                                </Checkbox>
                                              </div>
                                            </Col>
                                          </Row>

                                          <Row type="flex" justify="center">
                                            <Col span="24">
                                              <h6 style={{color:'#AEB1B1'}}>GENDER OF HEALTHCARE PROVIDER</h6>
                                              <div style={{padding:'10px'}}>
                                                <Checkbox style={{marginBottom:'10px'}}>
                                                    <span style={{color:'#8A8B8C'}}>Female </span>
                                                </Checkbox><br/>
                                                <Checkbox style={{marginBottom:'10px'}}>
                                                    <span style={{color:'#8A8B8C'}}>Male </span>
                                                </Checkbox>
                                              </div>
                                            </Col>
                                          </Row>

                                          <Row type="flex" justify="center">
                                            <Col span="24">
                                              <div style={{paddingLeft:'15px', paddingTop:'10px'}}>
                                                <Button className="button-style2">
                                                  SHOW HEALTHCARE PROVIDERS (212 RESULTS)
                                                </Button>
                                              </div>
                                            </Col>
                                          </Row><br/>

                                          <div style={{border:'2px solid #DDDEE5',padding:'15px'}}>
                                          <Row type="flex" justify="center">
                                            <Col span="24">
                                              <Row type="flex"><h2>Search by State:</h2></Row>
                                                <Col span="4">
                                                  <div style={{textAlign:'center'}}>
                                                    <h5><a href="">Alabama</a></h5>
                                                    <h5><a href="">Alaska</a></h5>
                                                    <h5><a href="">Arizona</a></h5>
                                                    <h5><a href="">Arkansas</a></h5>
                                                    <h5><a href="">California</a></h5>
                                                    <h5><a href="">Colorado</a></h5>
                                                    <h5><a href="">Connecticut</a></h5>
                                                    <h5><a href="">Delaware</a></h5>
                                                    <h5><a href="">Florida</a></h5>
                                                    <h5><a href="">Georgia</a></h5>
                                                    <h5><a href="">Idaho</a></h5>
                                                  </div>                          
                                                </Col>
                                                <Col span="1"></Col>
                                                <Col span="4">
                                                  <div style={{textAlign:'center'}}>
                                                    <h5><a href="">Idaho</a></h5>
                                                    <h5><a href="">Illinois</a></h5>
                                                    <h5><a href="">Indiana</a></h5>
                                                    <h5><a href="">lowa</a></h5>
                                                    <h5><a href="">Kansas</a></h5>
                                                    <h5><a href="">Kentucky</a></h5>
                                                    <h5><a href="">Louisiana</a></h5>
                                                    <h5><a href="">Maine</a></h5>
                                                    <h5><a href="">Maryland</a></h5>
                                                    <h5><a href="">Massachusetts</a></h5>
                                                    <h5><a href="">Michigan</a></h5>
                                                  </div>     
                                                </Col>
                                                <Col span="1"></Col>
                                                <Col span="4">
                                                  <div style={{textAlign:'center'}}>
                                                    <h5><a href="">Minnesota</a></h5>
                                                    <h5><a href="">Mississippi</a></h5>
                                                    <h5><a href="">Missouri</a></h5>
                                                    <h5><a href="">Montana</a></h5>
                                                    <h5><a href="">Nebraska</a></h5>
                                                    <h5><a href="">Nevada</a></h5>
                                                    <h5><a href="">New Hampshire</a></h5>
                                                    <h5><a href="">New Jersey</a></h5>
                                                    <h5><a href="">New Mexico</a></h5>
                                                    <h5><a href="">New York</a></h5>
                                                    <h5><a href="">North Carolia</a></h5>
                                                  </div>     
                                                </Col>
                                                <Col span="1"></Col>
                                                <Col span="4">
                                                  <div style={{textAlign:'center'}}>
                                                    <h5><a href="">North Dakota</a></h5>
                                                    <h5><a href="">Ohio</a></h5>
                                                    <h5><a href="">Oklahoma</a></h5>
                                                    <h5><a href="">Oregon</a></h5>
                                                    <h5><a href="">Pennsylvania</a></h5>
                                                    <h5><a href="">Puerto Rico</a></h5>
                                                    <h5><a href="">Rhode Island</a></h5>
                                                    <h5><a href="">South Carolina</a></h5>
                                                    <h5><a href="">South Dakota</a></h5>
                                                    <h5><a href="">Tennessee</a></h5>
                                                    <h5><a href="">Texas</a></h5>
                                                  </div>     
                                                </Col>
                                                <Col span="1"></Col>
                                                <Col span="4">
                                                  <div style={{textAlign:'center'}}>
                                                    <h5><a href="">Utah</a></h5>
                                                    <h5><a href="">Vermont</a></h5>
                                                    <h5><a href="">Virginia</a></h5>
                                                    <h5><a href="">Washington</a></h5>
                                                    <h5><a href="">Washington DC</a></h5>
                                                    <h5><a href="">West Virginia</a></h5>
                                                    <h5><a href="">Wisconsin</a></h5>
                                                    <h5><a href="">Wyoming</a></h5>
                                                    <h5><a href=""></a></h5>
                                                    <h5><a href=""></a></h5>
                                                    <h5><a href=""></a></h5>
                                                  </div>     
                                                </Col>
                                            </Col>
                                          </Row>
                                          </div>
                                      
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