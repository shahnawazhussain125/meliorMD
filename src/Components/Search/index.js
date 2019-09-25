import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Collapse, Checkbox, Select } from 'antd';
import State from './searchByState';
import { searchByCity } from '../../Redux/Actions/searchActions';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';


const { TabPane } = Tabs;
const { Option } = Select;
const { Panel } = Collapse;

class Search extends Component {
  constructor() {
    super();
    this.state = {
      cityName: ""
    }
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  }

  componentWillReceiveProps(nextProps) {

  }


  render() {
    const { cityName } = this.state;
    return (
      <div className="provoder-list-body">
        <Row className="row-container">
          <Col lg={12} md={15} sm={20} xs={23}>
            <div className="div-container">
              <span style={{ padding: '15px' }}>
                <h1 className="text-style1">Find your best Physicians</h1>
                <h2 className="text-style2">meliorMD will help you in that important decision</h2>
                <Row type="flex" justify="center" style={{ padding: '10px' }}>

                  <Col md={10} sm={10} xs={23}>
                    <Row type="flex" justify="center">
                      <div className="div-input1">
                        <label><h6 className="h6-style">SPECIALITY BY PROVIDER CATEGORY</h6></label>
                        <Select
                          showSearch
                          placeholder="Sort by"
                          optionFilterProp="children"
                          className="input1"

                        >
                          <Option value="Anesthesiology">Anesthesiology</Option>
                          <Option value="Orthopaedic Surgery">Orthopaedic Surgery</Option>
                          <Option value="Dentist">Dentist</Option>
                          <Option value="Nurse Practitioner Family">Nurse Practitioner Family</Option>
                          <Option value="Physical Therapist Orthopedic">Physical Therapist Orthopedic</Option>
                          <Option value="Social Worker Clinical">Social Worker Clinical</Option>
                          <Option value="Physician Assistant">Physician Assistant</Option>
                        </Select>
                      </div>
                    </Row>
                  </Col>

                  <Col md={8} sm={8} xs={23}>
                    <Row type="flex" justify="center">
                      <div className="div-input2">
                        <label><h6 className="h6-style">LOCATION BY CITY</h6></label>
                        <Input className="input2" placeholder="E.g San Francisc" value={cityName} onChange={this.handleChange("cityName")} />
                      </div>
                    </Row>
                  </Col>

                  <Col md={6} sm={6} xs={23}>
                    <Row type="flex" justify="center">
                      <div className="button-div">
                        <Button className="button-style">SEARCH <Icon type="arrow-right" className="icon" style={{ color: "white" }} /></Button>
                      </div>
                    </Row>
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
                                  <Col span={12} xs={23}>
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

                                  <Col span={12} xs={23}>
                                    <div className="check-box-container2">
                                      <Checkbox className="check-box">
                                        <span className="check-box-text">Pediatric Dentist </span>
                                      </Checkbox><br />
                                      <Checkbox className="check-box">
                                        <span className="check-box-text">Periodontist</span>
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
                                    <div>
                                      <Button className="button-style2">
                                        SHOW HEALTHCARE PROVIDERS (212 RESULTS)
                                      </Button>
                                    </div>
                                  </Col>
                                </Row>

                                <Col span="24">
                                <Row style={{ border: '2px solid #DDDEE5', padding: '5px', marginTop: '20px' }} >
                                  <Row type="flex"><h2>Search by State:</h2></Row>
                                  <Row type="flex" justify="space-between">
                                    <Col md={4} xs={8}>
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
                                      </div>
                                    </Col>
                                    <Col md={4} xs={8}>
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
                                      </div>
                                    </Col>
                                    <Col md={4} xs={8}>
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
                                      </div>
                                    </Col>
                                    <Col md={4} xs={8}>
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
                                    <Col md={4} xs={8}>
                                      <div className="state-name">
                                        <p onClick={() => this.handleClick("UT")}>Utah</p>
                                        <p onClick={() => this.handleClick("VT")}>Vermont</p>
                                        <p onClick={() => this.handleClick("VA")}>Virginia</p>
                                        <p onClick={() => this.handleClick("WA")}>Washington</p>
                                        <p onClick={() => this.handleClick("D.C.")}>Washington DC</p>
                                        <p onClick={() => this.handleClick("WV")}>West Virginia</p>
                                        <p onClick={() => this.handleClick("WI")}>Wisconsin</p>
                                        <p onClick={() => this.handleClick("WY")}>Wyoming</p>
                                        <p onClick={() => this.handleClick("ID")}>Idaho</p>
                                        <p onClick={() => this.handleClick("MI")}>Michigan</p>
                                        <p onClick={() => this.handleClick("NC")}>North Carolia</p>
                                      </div>
                                    </Col>
                                    <Col xs={8}>
                                      <div className="state-name">
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
    searchResult: state.searchReducer.data
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    searchByCity: (city_name) => dispatch(searchByCity(city_name))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);