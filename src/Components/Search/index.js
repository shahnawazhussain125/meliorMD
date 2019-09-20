import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Collapse, Tooltip, Checkbox, Select } from 'antd';
import { searchByState } from '../../Redux/Actions/searchActions';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';


const { TabPane } = Tabs;
const { Option } = Select;
const { Panel } = Collapse;

class Search extends Component {

  handleClick = (state_name) => {
    console.log("this.props  ==> ", this.props);
    this.props.searchByState(state_name);
  }


  render() {
    return (
      <div className="provoder-list-body">
        <Row className="row-container">
          <Col md={12} sm={16} xs={23}>
            <div className="div-container">
              <span style={{ padding: '15px' }}>
                <h1 className="text-style1">Find your best Physicians</h1>
                <h2 className="text-style2">meliorMD will help you in that important decision</h2>
                <Row type="flex" justify="center" style={{ padding: '10px' }}>

                  <Col span={10}>
                    <Row type="flex" justify="center">
                      <div>
                        <label><h6 className="h6-style">SPECIALITY BY PROVIDER CATEGORY</h6></label>
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
                    <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>
                      <Button className="button-style">SEARCH <Icon type="arrow-right" className="icon" style={{ color: "white" }} /></Button>
                    </div>
                  </Col>
                </Row>

                <Row type="flex" justify="center">
                  <Col span={24}>
                    <Collapse className="collapse-tab" defaultActiveKey={['1']}>
                      <Panel header="Advanced Search" key="1">
                        <div style={{ backgroundColor: '#ffffff', height: 'auto' }}>
                          <Row>
                            <h3 style={{ color: '#0D47A1' }}>Find a listing</h3>
                          </Row>

                          <div className="card-container">
                            <Tabs type="card">
                              <TabPane tab="Dentistry" key="1">
                                <Row type="flex">
                                  <Col span={12}>
                                    <div className="check-box-container">
                                      <Checkbox className="check-box">
                                        <span className="check-box-text">General Dentist </span>
                                      </Checkbox><br />
                                      <Checkbox className="check-box">
                                        <span className="check-box-text">Endodontist</span>
                                      </Checkbox><br />
                                      <Checkbox className="check-box">
                                        <span className="check-box-text">Oral and Maxillofacial Surgeon</span>
                                      </Checkbox><br />
                                      <Checkbox className="check-box">
                                        <span className="check-box-text">Orthodontist</span>
                                      </Checkbox><br />
                                    </div>
                                  </Col>

                                  <Col span={12}>
                                    <div className="check-box-container">
                                      <Checkbox className="check-box">
                                        <span className="check-box-text">Pediatric Dentist </span>
                                      </Checkbox><br />
                                      <Checkbox className="check-box">
                                        <span className="check-box-text">Periodontist </span>
                                      </Checkbox><br />
                                      <Checkbox className="check-box">
                                        <span className="check-box-text">Prosthodontics </span>
                                      </Checkbox>
                                    </div>
                                  </Col>
                                </Row>

                                <Row type="flex" justify="center">
                                  <Col span="24">
                                    <div style={{ padding: '10px' }}>
                                      <label><h5 style={{ color: '#AEB1B1' }}>HOSPITAL/PRACTICE NAME</h5></label>
                                      <Input
                                        placeholder="Search by business name"
                                        prefix={<Icon type="user" className="icon" />}
                                      />
                                      <br />
                                      <br />

                                      <Col span="11">
                                        <div>
                                          <label><h5 style={{ color: '#AEB1B1' }}>CITY OR STATE</h5></label>
                                          <Input placeholder="e.g California" />
                                        </div>
                                      </Col>

                                      <Col span="2">
                                      </Col>

                                      <Col span="11">
                                        <div>
                                          <label><h5 style={{ color: '#AEB1B1' }}>ZIP CODE</h5></label>
                                          <Input placeholder="e.g California" />
                                        </div>
                                      </Col>
                                    </div>
                                  </Col>
                                </Row><br />

                                <Row type="flex" justify="center">
                                  <Col span="24">
                                    <h6 style={{ color: '#AEB1B1' }}>TYPE OF PATIENT SERVED</h6>
                                    <div style={{ padding: '10px' }}>
                                      <Checkbox style={{ marginBottom: '10px' }}>
                                        <span className="check-box-text">Adults Only </span>
                                      </Checkbox><br />
                                      <Checkbox style={{ marginBottom: '10px' }}>
                                        <span className="check-box-text">Both Adults and Children &  </span>
                                      </Checkbox><br />
                                      <Checkbox style={{ marginBottom: '10px' }}>
                                        <span className="check-box-text">Children & Adolescents Only </span>
                                      </Checkbox>
                                    </div>
                                  </Col>
                                </Row>

                                <Row type="flex" justify="center">
                                  <Col span="24">
                                    <h6 style={{ color: '#AEB1B1' }}>GENDER OF HEALTHCARE PROVIDER</h6>
                                    <div style={{ padding: '10px' }}>
                                      <Checkbox style={{ marginBottom: '10px' }}>
                                        <span className="check-box-text">Female </span>
                                      </Checkbox><br />
                                      <Checkbox style={{ marginBottom: '10px' }}>
                                        <span className="check-box-text">Male </span>
                                      </Checkbox>
                                    </div>
                                  </Col>
                                </Row>

                                <Row type="flex" justify="center">
                                  <Col span="24">
                                    <div style={{ paddingLeft: '15px', paddingTop: '10px' }}>
                                      <Button className="button-style2">
                                        SHOW HEALTHCARE PROVIDERS (212 RESULTS)
                                      </Button>
                                    </div>
                                  </Col>
                                </Row>

                                <Col sm={21} md={23} xs={24}>
                                <Row style={{ border: '2px solid #DDDEE5', padding: '8px', marginTop: 20 }} >
                                  <Row type="flex"><h2>Search by State:</h2></Row>
                                  <Row type="flex" justify="space-between">
                                    <Col span="4">
                                      <div className="state-name">
                                        <p onClick={() => this.handleClick("AL")}>Alabama</p>
                                        <p onClick={() => this.handleClick("AK")}>Alaska</p>
                                        <p onClick={() => this.handleClick("AZ")}>Arizona</p>
                                        <p onClick={() => this.handleClick("AR")}>Arkansas</p>
                                        <p onClick={() => this.handleClick("CA")}>California</p>
                                        <p onClick={() => this.handleClick("CO")}>Colorado</p>
                                        <p onClick={() => this.handleClick("CT")}>Connecticut</p>
                                        <p onClick={() => this.handleClick("DE")}>Delaware</p>
                                        <p onClick={() => this.handleClick("FL")}>Florida</p>
                                        <p onClick={() => this.handleClick("GA")}>Georgia</p>
                                        <p onClick={() => this.handleClick("ID")}>Idaho</p>
                                      </div>
                                    </Col>
                                    <Col span="4">
                                      <div className="state-name">
                                        <p onClick={() => this.handleClick("ID")}>Idaho</p>
                                        <p onClick={() => this.handleClick("IL")}>Illinois</p>
                                        <p onClick={() => this.handleClick("IN")}>Indiana</p>
                                        <p onClick={() => this.handleClick("IA")}>lowa</p>
                                        <p onClick={() => this.handleClick("KS")}>Kansas</p>
                                        <p onClick={() => this.handleClick("KY")}>Kentucky</p>
                                        <p onClick={() => this.handleClick("LA")}>Louisiana</p>
                                        <p onClick={() => this.handleClick("ME")}>Maine</p>
                                        <p onClick={() => this.handleClick("MD")}>Maryland</p>
                                        <p onClick={() => this.handleClick("MA")}>Massachusetts</p>
                                        <p onClick={() => this.handleClick("MI")}>Michigan</p>
                                      </div>
                                    </Col>
                                    <Col span="4">
                                      <div className="state-name" >
                                        <p onClick={() => this.handleClick("MN")}>Minnesota</p>
                                        <p onClick={() => this.handleClick("MS")}>Mississippi</p>
                                        <p onClick={() => this.handleClick("MO")}>Missouri</p>
                                        <p onClick={() => this.handleClick("MT")}>Montana</p>
                                        <p onClick={() => this.handleClick("NE")}>Nebraska</p>
                                        <p onClick={() => this.handleClick("NV")}>Nevada</p>
                                        <p onClick={() => this.handleClick("NH")}>New Hampshire</p>
                                        <p onClick={() => this.handleClick("NJ")}>New Jersey</p>
                                        <p onClick={() => this.handleClick("NM")}>New Mexico</p>
                                        <p onClick={() => this.handleClick("NY")}>New York</p>
                                        <p onClick={() => this.handleClick("NC")}>North Carolia</p>
                                      </div>
                                    </Col>
                                    <Col span="4">
                                      <div className="state-name">
                                        <p onClick={() => this.handleClick("ND")}>North Dakota</p>
                                        <p onClick={() => this.handleClick("OH")}>Ohio</p>
                                        <p onClick={() => this.handleClick("OK")}>Oklahoma</p>
                                        <p onClick={() => this.handleClick("OR")}>Oregon</p>
                                        <p onClick={() => this.handleClick("PA")}>Pennsylvania</p>
                                        <p onClick={() => this.handleClick("PR")}>Puerto Rico</p>
                                        <p onClick={() => this.handleClick("RI")}>Rhode Island</p>
                                        <p onClick={() => this.handleClick("SC")}>South Carolina</p>
                                        <p onClick={() => this.handleClick("SD")}>South Dakota</p>
                                        <p onClick={() => this.handleClick("TN")}>Tennessee</p>
                                        <p onClick={() => this.handleClick("TX")}>Texas</p>
                                      </div>
                                    </Col>
                                    <Col span="4">
                                      <div className="state-name">
                                        <p onClick={() => this.handleClick("UT")}>Utah</p>
                                        <p onClick={() => this.handleClick("VT")}>Vermont</p>
                                        <p onClick={() => this.handleClick("VA")}>Virginia</p>
                                        <p onClick={() => this.handleClick("WA")}>Washington</p>
                                        <p onClick={() => this.handleClick("D.C.")}>Washington DC</p>
                                        <p onClick={() => this.handleClick("WV")}>West Virginia</p>
                                        <p onClick={() => this.handleClick("WI")}>Wisconsin</p>
                                        <p onClick={() => this.handleClick("WY")}>Wyoming</p>
                                        <p></p>
                                        <p></p>
                                        <p></p>
                                      </div>
                                    </Col>
                                  </Row>
                                </Row>
                                </Col>
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

const mapStateToProps = (state) => {
  return ({

  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    searchByState: (state_name) => dispatch(searchByState(state_name))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);