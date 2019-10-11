import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Collapse, Checkbox, Select } from 'antd';
import State from './searchByState';
import { searchByProviderCategoryAndCity } from '../../Redux/Actions/searchActions';
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
      cityName: "",
      providerCategory: "Anesthesiology",
      general_dentist: "",
      endodontist: "",
      oral_and_maxillofacial_surgeon: "",
      orthodontist: "",
      pediatric_dentist: "",
      periodontist: "",
      prosthodontics: "",
      searchResult: [],
      filterData: [],
      male: "",
      fmale: "",
      zipCode: "",
      stateName: "",
      practiceName: "",
      gender: false,
      taxonomy: false
    }
  }

  componentDidMount() {
    if (this.props.searchResult.results) {
      this.setState({ searchResult: this.props.searchResult.results })
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searchResult: nextProps.searchResult.results })
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  }

  handleSelect = name => value => {
    this.setState({ [name]: value });
  }

  handleTaxonomyChange = (event) => {

    let name = event.target.name;
    let value = event.target.value;

    const { 
      general_dentist,
      endodontist,
      oral_and_maxillofacial_surgeon,
      orthodontist,
      pediatric_dentist,
      periodontist,
      prosthodontics,
      taxonomy
    } = this.state;
    let taxonomies = { 
      general_dentist,
      endodontist,
      oral_and_maxillofacial_surgeon,
      orthodontist,
      pediatric_dentist,
      periodontist,
      prosthodontics,
      taxonomy
    };

    if (event.target.checked) {
      this.setState({
        [name]: value, taxonomy: true
      }, () => {
        this.filterDentist();
      });
    }
    else {
      taxonomies[name] = "";
      if (
        (taxonomies.general_dentist !== "") === 
        (taxonomies.endodontist !== "") === 
        (taxonomies.oral_and_maxillofacial_surgeon !== "") === 
        (taxonomies.orthodontist !== "") === 
        (taxonomies.pediatric_dentist !== "")  === 
        (taxonomies.periodontist !== "")  === 
        (taxonomies.prosthodontics !== "")
        ) {
        this.setState({
          [name]: "", taxonomy: false
        }, () => {
          this.filterDentist();
        });
      }
      else {
        this.setState({
          [name]: "", taxonomy: true
        }, () => {
          this.filterDentist();
        });
        this.setState({})
      }
    }
  }

  handleInputTextChange = name => event =>{
      this.setState({ 
        [name]: event.target.value 
      }, ()=>{
        this.filterDentist();
      })
  }

  handleGenderChange = (event) => {

    let name = event.target.name;
    let value = event.target.value;

    const { male, female } = this.state;
    let genders = { male, female };

    if (event.target.checked) {
      this.setState({
        [name]: value, gender: true
      }, () => {
        this.filterDentist();
      });
    }
    else {
      genders[name] = "";
      if ((genders.male !== "") === (genders.female !== "")) {
        this.setState({
          [name]: "", gender: false
        }, () => {
          this.filterDentist();
        });
      }
      else {
        this.setState({
          [name]: "", gender: true
        }, () => {
          this.filterDentist();
        });
        this.setState({})
      }
    }
  }

  handleSearch = () => {
    const { cityName, providerCategory } = this.state;
    if (cityName === "" && cityName === " ") {
      alert("Enter any city");
    }
    else {
      this.props.searchByProviderCategoryAndCity(cityName, providerCategory);
    }
  }

  filterDentist = () => {
    const {
      general_dentist,
      endodontist,
      oral_and_maxillofacial_surgeon,
      orthodontist,
      pediatric_dentist,
      periodontist,
      prosthodontics,
      searchResult, male, female, gender, taxonomy, zipCode, stateName, practiceName } = this.state;

    let filterData = searchResult.filter((element) => {
      return (
        (
          taxonomy ===
          (element.taxonomies[0].desc === general_dentist ||
          element.taxonomies[0].desc === endodontist ||
          element.taxonomies[0].desc === oral_and_maxillofacial_surgeon ||
          element.taxonomies[0].desc === orthodontist ||
          element.taxonomies[0].desc === pediatric_dentist ||
          element.taxonomies[0].desc === periodontist ||
          element.taxonomies[0].desc === prosthodontics)
        )
        &&
        element.basic.name.toLowerCase().indexOf(practiceName.toLowerCase()) !== -1
        &&
        element.addresses[0].state.toLowerCase().indexOf(stateName.toLowerCase()) !== -1
        &&
        element.addresses[0].city.toLowerCase().indexOf(stateName.toLowerCase()) !== -1
        &&
        element.addresses[0].postal_code.toLowerCase().indexOf(zipCode.toLowerCase()) !== -1
        && 
        (gender === (element.basic.gender === male || element.basic.gender === female))
      )
    })
    console.log({ filterData });
    this.setState({ filterData });
  }


  render() {
    const { cityName, providerCategory } = this.state;
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
                          value={providerCategory}
                          onSelect={this.handleSelect("providerCategory")}
                        >
                          <Option value="Anesthesiology">Anesthesiology</Option>
                          <Option value="Dentist">Dentist</Option>
                          <Option value="Nurse Practitioner Family">Nurse Practitioner Family</Option>
                          <Option value="Surgery">Orthopaedic Surgery</Option>
                          <Option value="Physical Therapist Orthopedic">Physical Therapist Orthopedic</Option>
                          <Option value="Physician">Physician</Option>
                          <Option value="Physician Assistant">Physician Assistant</Option>
                          <Option value="Radiology">Radiology</Option>
                          <Option value="Rheumatology">Rheumatology</Option>
                          <Option value="Social Worker Clinical">Social Worker Clinical</Option>
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
                        <Button className="button-style" onClick={this.handleSearch}>SEARCH <Icon type="arrow-right" className="icon icon-arrow " /></Button>
                      </div>
                    </Row>
                  </Col>
                </Row>
                {
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
                                        <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="general_dentist" value="Dentist General Practice"  >
                                          <span className="check-box-text">General Dentist</span>
                                        </Checkbox><br />
                                        <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="endodontist" value="Endodontist">
                                          <span className="check-box-text">Endodontist</span>
                                        </Checkbox><br />
                                        <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="oral_and_maxillofacial_surgeon" value="Dentist Oral and Maxillofacial Surgery">
                                          <span className="check-box-text">Oral and Maxillofacial Surgeon</span>
                                        </Checkbox><br />
                                        <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="orthodontist" value="Orthodontist">
                                          <span className="check-box-text">Orthodontist</span>
                                        </Checkbox><br />
                                      </div>
                                    </Col>

                                    <Col span={12} xs={23}>
                                      <div className="check-box-container2">
                                        <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="pediatric_dentist" value="Pediatric Dentist">
                                          <span className="check-box-text">Pediatric Dentist</span>
                                        </Checkbox><br />
                                        <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="periodontist" value="Periodontist">
                                          <span className="check-box-text">Periodontist</span>
                                        </Checkbox><br />
                                        <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="prosthodontics" value="Dentist Prosthodontics">
                                          <span className="check-box-text">Prosthodontics </span>
                                        </Checkbox>
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row type="flex" justify="center">
                                    <Col span={24}>
                                      <div style={{ padding: '10px' }}>
                                        <label><h5 style={{ color: '#AEB1B1' }}>HOSPITAL/PRACTICE NAME</h5></label>
                                        <Input
                                          placeholder="Search by business name"
                                          onChange={this.handleInputTextChange("practiceName")}
                                        />
                                        <br />
                                        <br />

                                        <Col span={11}>
                                          <div>
                                            <label><h5 style={{ color: '#AEB1B1' }}>CITY OR STATE</h5></label>
                                            <Input placeholder="e.g California" onChange={this.handleInputTextChange("stateName")} />
                                          </div>
                                        </Col>

                                        <Col span={2}>
                                        </Col>

                                        <Col span={11}>
                                          <div>
                                            <label><h5 style={{ color: '#AEB1B1' }}>ZIP CODE</h5></label>
                                            <Input placeholder="e.g California" onChange={this.handleInputTextChange("zipCode")} />
                                          </div>
                                        </Col>
                                      </div>
                                    </Col>
                                  </Row><br />

                                  <Row type="flex" justify="center">
                                    <Col span={24}>
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
                                    <Col span={24}>
                                      <h6 style={{ color: '#AEB1B1' }}>GENDER OF HEALTHCARE PROVIDER</h6>
                                      <div style={{ padding: '10px' }}>
                                        <Checkbox
                                          style={{ marginBottom: '10px' }}
                                          name="female"
                                          value="F"
                                          onChange={this.handleGenderChange}
                                        >
                                          <span className="check-box-text">Female </span>
                                        </Checkbox><br />
                                        <Checkbox
                                          style={{ marginBottom: '10px' }}
                                          name="male"
                                          value="M"
                                          onChange={this.handleGenderChange}
                                        >
                                          <span className="check-box-text">Male </span>
                                        </Checkbox>
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row type="flex" justify="center">
                                    <Col span={24}>
                                      <div>
                                        <Button className="button-style2">
                                          SHOW HEALTHCARE PROVIDERS ({this.state.filterData.length} RESULTS)
                                      </Button>
                                      </div>
                                    </Col>
                                  </Row>

                                  <Col span={24}>
                                    <State history={this.props.history} />
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
                }
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
    searchByProviderCategoryAndCity: (city_name, providerCategory) => dispatch(searchByProviderCategoryAndCity(city_name, providerCategory))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);