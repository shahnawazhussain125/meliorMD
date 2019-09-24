import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Checkbox, Breadcrumb, Select, Pagination } from 'antd';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import dr_image from '../../assets/images/dr_img1.jpg';

const { Option } = Select;

class SearchResult extends Component {
    constructor() {
        super();
        this.state = {
            hide: false,
            hideAdvSearch: false,
            result_count: 0,
            results: []
        }
    }

    componentDidMount() {
        const { results, result_count } = this.props.searchResult;

        window.addEventListener("resize", this.checkWindowDimensions());
        this.setState({ results, result_count });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkWindowDimensions)
    }

    handleHide = () => {
        this.setState({ hide: !this.state.hide });
    }

    handleAdvSearchHide = () => {
        this.setState({ hideAdvSearch: !this.state.hideAdvSearch });
    }

    checkWindowDimensions() {
        if (window.innerWidth >= 767) {
            this.setState({ hideAdvSearch: true });
        }
    }

    render() {
        const { hide, hideAdvSearch, results, result_count } = this.state;
        console.log("Search Result ===> ", results);
        return (
            <div className="provoder-list-body">
                <Row>
                    <Col>
                        <Breadcrumb className="bread-crumb">
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>California</Breadcrumb.Item>
                            <Breadcrumb.Item>San Francisc</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row type="flex" >
                    <Col md={5} sm={24} xs={24} className="search-content">
                        <Row className="filter-result">
                            <h1>Filter Result</h1>
                        </Row>
                        {
                            hideAdvSearch ?
                                <Row>
                                    <Row className="input-spacing">
                                        <div>
                                            <label className="input-label">LOCATIONS BY CITY</label>
                                            <Input className="search-input" placeholder="E.g San Francisc" />
                                        </div>
                                    </Row>
                                    <Row className="input-spacing">
                                        <div>
                                            <label className="input-label">ZIP COD</label>
                                            <Input className="search-input" placeholder="Zip cod" />
                                        </div>
                                    </Row>
                                    <Row className="input-spacing">
                                        <div>
                                            <label className="input-label">PROVIDER CATEGOR</label>
                                            <Select
                                                showSearch
                                                className="search-input"
                                                placeholder="Select a provider"
                                                optionFilterProp="children"
                                            >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>
                                        </div>
                                    </Row>
                                    <Row className="input-spacing">
                                        <div className="input-spacing">
                                            <label className="input-label">SPECIALITY BY PROVIDER CATEGOR</label>
                                            <Select
                                                showSearch
                                                className="search-input"
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                            >
                                                <Option value="jack" select>Obstercician/Gynecologis</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>
                                        </div>
                                        <div className="input-spacing">
                                            <div>
                                                <label className="input-label">HEALTH INSURANCE</label>
                                                <Select
                                                    showSearch
                                                    className="search-input"
                                                    placeholder="Select a provider"
                                                    optionFilterProp="children"
                                                >
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="tom">Tom</Option>
                                                </Select>
                                            </div>
                                        </div>
                                        <Row>
                                            <div>
                                                <p className="advance-search" onClick={this.handleHide}>{hide ? "SHOW" : "HIDE"} ADVANCED SEARCH <Icon type={hide ? "caret-down" : "caret-up"} /></p>
                                            </div>
                                        </Row>
                                        {
                                            hide ?
                                                ""
                                                :
                                                <Row>
                                                    <div>
                                                        <p className="input-label">TYPE OF PATIENT SERVED</p>
                                                        <ul className="input-ul">
                                                            <li>
                                                                <Checkbox className="input-checkbox" value="Adults Only">Adults Only</Checkbox>
                                                            </li>
                                                            <li>
                                                                <Checkbox className="input-checkbox" value="Both Adults and Children">Both Adults and Children</Checkbox>
                                                            </li>
                                                            <li>
                                                                <Checkbox className="input-checkbox" value="Children & Adolescents Only">Children & Adolescents Only</Checkbox>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="input-label">GENDER OF HEALTHCARE PROVIDER</p>
                                                        <ul className="input-ul">
                                                            <li>
                                                                <Checkbox className="input-checkbox" value="Female">Female</Checkbox>
                                                            </li>
                                                            <li>
                                                                <Checkbox className="input-checkbox" value="Male">Male</Checkbox>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Row>
                                        }
                                    </Row>
                                </Row>
                                :
                                ""
                        }


                        <Row style={{ display: "flex", justifyContent: "center" }}>
                            <Col
                                lg={0}
                                md={0}
                                sm={1}
                                xs={1}

                                onClick={this.handleAdvSearchHide}
                            >
                                <Icon style={{ fontSize: 20 }} type={hideAdvSearch ? "caret-up" : "caret-down"} />
                            </Col>
                        </Row>
                    </Col>

                    <Col md={19} sm={24} xs={24} className="search-result-body">
                        <Row type="flex" justify="center">
                            <Col lg={18} md={22} sm={22} xs={24} className="search-result-body-setting" >
                                <Row>
                                    <Col span={18}>
                                        <h1 className="search-result-number"><span style={{ color: "#0F6AB6" }}>{result_count} </span> Physicians</h1>
                                    </Col>
                                    <Col span={6} type="flex" justify="flex-end">
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
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row type="flex" justify="center">
                            <Col lg={18} md={22} sm={22} xs={24}>
                                {
                                    results ?
                                        results.map((value, index) => {
                                            return (
                                                <Row key={index}  className="profile-list">
                                                    <Col span={6} className="profile-img-container">
                                                        <img src={dr_image} alt="dr_image" className="profile-img" />
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <h4>{value.basic.name}, {value.basic.credential}</h4>
                                                            <p style={{ fontSize: '12px' }}><span style={{ color: "#0F6AB6" }}>{value.taxonomies[0].desc}</span><br />
                                                                <span style={{ fontSize: '10px !important' }}>ADDRESS</span><br />
                                                                {value.addresses[0].address_1} - <span style={{ color: "#0F6AB6" }}>View on map</span></p>
                                                            <Button className="view-profile">VIEW PROFILE</Button>
                                                        </Row>
                                                    </Col>
                                                    <Col span={6}>
                                                        <Row className="profile-list-call-container">
                                                            <div>
                                                                <p className="profile-list-call profile-list-call-text">CALL</p>
                                                                <h3 className="profile-list-call" style={{ color: '#0F6AB6' }}>{value.number}</h3>
                                                            </div>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            )
                                        })
                                        :
                                        ""
                                }
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" className="pagination-container">
                            <Pagination defaultCurrent={1} total={17} />
                        </Row>
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

const mapDisptchToProps = (dispatch) => {
    return ({

    })
}

export default connect(mapStateToProps, mapDisptchToProps)(SearchResult);