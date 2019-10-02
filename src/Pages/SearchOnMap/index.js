import React, { Component } from 'react'
import { Row, Col, Input, Icon, Rate, Breadcrumb, Select, Button } from 'antd';
import MyGoogleMap from '../../Components/GoogleMap';
import 'antd/dist/antd.css';
import './index.css';
import { connect } from 'react-redux';
import dr_image from '../../assets/images/dr_img.webp';

const { Option } = Select;

class SearchOnMap extends Component {

    constructor() {
        super();
        this.state = {
            results: [],
            result_count: 0
        }
    }

    componentDidMount() {
        this.setState({ ...this.props.searchResult })
    }

    render() {
        const { results, result_count } = this.state;
        console.log('Resuilt ==>', this.state)
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Row type="flex" justify='center'>
                            <Col span={24}>
                                <Input
                                    placeholder="New York"
                                    prefix={<Icon type="search" />}
                                    style={{ width: '100%', marginTop: '3px' }}
                                />
                            </Col>
                        </Row>
                        <Row className="layout-row">
                            <Col span={24}>
                                <Breadcrumb className="bread-crumb">
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>California</Breadcrumb.Item>
                                    <Breadcrumb.Item>San Francisc</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </Row>
                        <Row className="search-row">
                            <Col span={6}>
                                <span className="num-doctors">{result_count} Doctors</span>
                            </Col>
                            <Col span={5}></Col>
                            <Col span={3}><div style={{ marginTop: '10%', margin: '1px' }}>More Filters</div></Col>
                            <Col span={5}>
                                <Select
                                    className="show-search"
                                    showSearch
                                    placeholder="E.g Physician"
                                    optionFilterProp="Physician"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="physician">Physician</Option>
                                    <Option value="surgeon">Surgeon</Option>
                                    <Option value="dentist">Dentist</Option>
                                </Select>
                            </Col>

                            <Col span={5}>
                                <Select
                                    className="show-search"
                                    showSearch
                                    placeholder="Sort by"
                                    optionFilterProp="Physician"
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
                        {
                            results.map((value, index) => {
                                return (
                                    <Row type="flex" justify="center" className="card-style" key={index}>
                                        <Col span={6}>
                                            <Row>
                                                <img src={dr_image} alt="dr_image" width="100%"/>
                                            </Row>
                                        </Col>
                                        <Col span={18}>
                                            <Row type="flex" style={{ borderBottom: '2px solid #DDDEE5' }}>
                                                <div >
                                                    <h4>{value.basic.name}, {value.basic.credential}</h4>
                                                    <Col span={12}>
                                                        <Rate disabled defaultValue={4} />
                                                        <p className="patient-rating">108 Patient Satisfaction Ratings<br />10 Patient Comments</p>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Row >
                                                            <p className="provider-info provider-info-title">DEPARTMENTS</p>
                                                            <p className="provider-info ">{value.taxonomies[0].desc}</p>
                                                            <p className="provider-info provider-info-title">LOCATIONS</p>
                                                            <p className="provider-info">{value.addresses[0].address_1} </p>
                                                        </Row>
                                                    </Col>
                                                </div>
                                            </Row>
                                            <Row type="flex">
                                                <Col span={16}><h6>View on Map | Directions</h6></Col>
                                                <Col span={8}>
                                                    <Button className="button-appointment">REQUEST APPOINTMENT >></Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    </Col>

                    <Col span={12}>
                        <div className="map-border">
                            <MyGoogleMap
                                searchResult={results}
                                google={this.props.google}
                                center={{ lat: 18.5204, lng: 73.8567 }}
                                height='300px'
                                zoom={15} />
                        </div>
                    </Col>
                 
                </Row>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        searchResult: state.searchReducer.data,
    })
}

export default connect(mapStateToProps, null)(SearchOnMap);
