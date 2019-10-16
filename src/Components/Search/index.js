import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Collapse, Select } from 'antd';
import State from './searchByState';
import DentistryFilter from '../Dentistry';
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
      hide: true,
      male: "",
      fmale: "",
      zipCode: "",
      cityName: "",
      stateName: "",
      gender: false,
      filterData: [],
      taxonomy: false,
      endodontist: "",
      practiceName: "",
      periodontist: "",
      searchResult: [],
      orthodontist: "",
      prosthodontics: "",
      general_dentist: "",
      pediatric_dentist: "",
      providerCategory: "Anesthesiology",
      oral_and_maxillofacial_surgeon: "",
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
        (taxonomies.pediatric_dentist !== "") ===
        (taxonomies.periodontist !== "") ===
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

  handleInputTextChange = name => event => {
    this.setState({
      [name]: event.target.value
    }, () => {
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

  handleHide = () => {
    this.setState({ hide: !this.state.hide });
  }


  render() {
    const { cityName, providerCategory, hide } = this.state;
    return (
      <div className="provoder-list-body">
        <Row className="row-container">
          <Col lg={12} md={15} sm={20} xs={23}>
            <Row className="div-container">
              <span style={{ padding: '15px' }}>
                <h1 className="text-style1">Find your best Physicians</h1>
                <h2 className="text-style2">meliorMD will help you in that important decision</h2>
                <Row type="flex" justify="center" style={{ padding: '10px' }}>
                  <Col md={10} sm={10} xs={23}>
                    <Row type="flex" justify="center">
                      <div className="div-input1">
                        <label className="input-label">SPECIALITY BY PROVIDER CATEGORY</label>
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
                        <label className="input-label">LOCATION BY CITY</label>
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
                <Row>
                  <Col>
                    <label className="input-label show-btn" onClick={this.handleHide}>{hide ? "SHOW" : "HIDE"} ADVANCED SEARCH <Icon type={hide ? "caret-right" : "caret-down"} /></label >
                  </Col>
                </Row>
              </span>
            </Row>
          </Col>
        </Row>
        {
          !hide &&
          <Row className="row-container">
            <Col lg={12} md={15} sm={20} xs={23}>
              <Row className="find-a-listing">
                <h3>Find a listing</h3>
              </Row>
              <Row className="card-container filter-container" >
                <Tabs type="card">
                  <TabPane tab="Dentistry" key="1">
                    <DentistryFilter />
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
              </Row>
              <Row>
                <State history={this.props.history} />
              </Row>
            </Col>
          </Row>
        }

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