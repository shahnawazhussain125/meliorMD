import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Avatar, Tabs, Breadcrumb, Rate, Checkbox, Select, TimePicker, Tooltip, DatePicker } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import profileImg from '../../assets/images/dr_img1.webp';
import 'antd/dist/antd.css';
import './index.css';


const InputGroup = Input.Group;
const { TabPane } = Tabs;
const { Option } = Select;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const format = 'HH:mm';

class Profle extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }


    componentDidMount() {
        console.log('this.props.location.state.data', this.props.location.state.data)
        this.setState({ data: this.props.location.state.data })
    }

    render() {
        const { data } = this.state;
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
                <Row type="flex" justify="center">
                    <Col lg={5} md={5} sm={5} xs={24} className="search-content">
                        <div>
                            <h1 className="filter">Filter Result</h1>
                        </div>
                        <div>
                            <div>
                                <label className="input-label">LOCATIONS BY CITY</label>
                                <Input className="search-input" placeholder="E.g San Francisc" />
                            </div><br />
                        </div>
                        <div>
                            <div>
                                <label className="input-label">ZIP COD</label>
                                <Input className="search-input" placeholder="Zip cod" />
                            </div><br />
                        </div>
                        <div>
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
                            </div><br />
                        </div>
                        <div>
                            <div>
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
                            <div><br />
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
                            </div><br /><br />
                            <Row>
                                <div>
                                    <p>HIDE ADVANCED SEARCH <Icon type="caret-right" /></p>
                                </div>
                            </Row>
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
                        </div>
                    </Col>
                    <Col className="col-profile" lg={12} md={12} sm={12} xs={24}>
                        <Row type="flex" justify="center">
                            <Col span={22}>
                                <div className="div-profile">
                                    <Tabs defaultActiveKey="1"
                                        className="tabs-container">

                                        <TabPane className="tab-pane" tab="Overview" key="1">
                                            {
                                                data ?
                                                    <Row>
                                                        <Row>
                                                            <Col span={10}>
                                                                <img src={profileImg} width="100%" alt="profleImg" />
                                                            </Col>
                                                            <Col style={{paddingLeft:'7px'}} span={14}>
                                                                <Row>
                                                                    <span><h5 className="font1">{data.taxonomies[0].desc}</h5></span>
                                                                </Row>
                                                                <Row>
                                                                    <span className="font2">{data.basic.name}, {data.basic.credential}</span>
                                                                </Row>
                                                                <Row>
                                                                    <Col span={24}>
                                                                        <span><Rate className="profile-rate" disabled defaultValue={3}/></span>
                                                                    </Col>
                                                                    <Col span={24}>
                                                                        <span> 4.9 out of 5</span>
                                                                    </Col>
                                                                <Row>
                                                                    <span><h5 className="font3">ADDRESS<br />{data.addresses[0].address_1} - <span>view map</span></h5></span>
                                                                </Row>
                                                                <Row>
                                                                    <span>
                                                                        <span className="span-call">CALL</span><br />
                                                                        <span className="contact-num">{data.number.toString().substring(0, 7).match(/.{1,3}/g).join(".")}{data.number.toString().substring(7)}</span>
                                                                    </span>
                                                                </Row>
                                                            </Row>
                                                            </Col>
                                                        </Row>
                                                        <div className="div-text">
                                                            <h5 className="h5-style">
                                                                <span className="span-text">Professional statement</span><br />
                                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            </h5>
                                                            <h5 className="h5-style">
                                                                <span className="span-text">Education & Fellowships</span><br />
                                                                Fellowship - Vanderbilt University Medical Center<br />
                                                                Hematology<br />
                                                                Nashville, TN USA<br />
                                                                1991<br /><br />
                                                                Residency - University of Missouri Hospitals & Clinics<br />
                                                                Internal Medicine<br />
                                                                Columbia, MO USA<br />
                                                                1988
                                            </h5>
                                                            <h5 className="h5-style">
                                                                <span className="span-text">Certifications</span><br />
                                                                • Internal Medicinez<br />
                                                                • Internal Medicine - Hematology<br />
                                                                • Pathology - Blood Banking/Transfusion Medicine<br />
                                                            </h5>
                                                        </div>
                                                    </Row>
                                                    :
                                                    <Row type="flex" justify="center">
                                                        <span>Loading....</span>
                                                    </Row>
                                            }
                                        </TabPane>

                                        <TabPane className="tab-pane" tab="Patient Satisfaction reviews" key="2">
                                            Content of Tab Pane 2
                                    </TabPane>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Col>


                    <Col className="col-book" lg={5} md={7} sm={7} xs={24}>
                        <Row type="flex" justify="center">
                            <Col span={22}>
                                <div className="div-profile">
                                    <div className="div-head">
                                        <h2 className="book-visit">BOOK A VISIT</h2>
                                        <h5 className="day-time">Monday to Friday 09.00am-06.00pm</h5>
                                    </div>

                                    <div className="div-pad">
                                        <label><h5 className="span2-text">PHONE NAME</h5></label>
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

                                    <div className="div-pad">
                                        <label><h5 className="span2-text">PHONE NUMBER</h5></label>
                                        <Input placeholder="Your phone number" />
                                    </div>

                                    <div className="div-pad">
                                        <label><h5 className="span2-text">SELECT DATE</h5></label>
                                        <DatePicker className="date-picker" defaultValue={moment('00/00/2019', dateFormatList[0])} format={dateFormatList} />
                                    </div>

                                    <div className="div-pad">
                                        <label><h5 className="span2-text">SELECT TIME</h5></label>
                                        <TimePicker className="time-picker" defaultValue={moment('00:00', format)} format={format} />
                                    </div>

                                    <div className="div-pad">
                                        <Checkbox>
                                            <span className="span2-text">Oral Maintainance</span>
                                        </Checkbox><br />

                                        <Checkbox>
                                            <span className="span2-text">General Visit</span>
                                        </Checkbox><br />

                                        <Checkbox>
                                            <span className="span2-text">Oral Flow</span>
                                        </Checkbox>
                                    </div>


                                    <div className="div-pad">
                                        <Row type="flex" justify="center">
                                            <Col span={24}>
                                                <Button className="request-appoint">REQUEST<br />APPOINTMENT</Button>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={2} md={0} sm={0} xs={0} style={{ backgroundColor: '#ffffff' }}>
                        <Row type="flex" justify="center">

                        </Row>
                    </Col>
                </Row>

                {/* ================ Review Section Code ============== */}

                <Row type="flex">

                    <Col lg={5} md={5} sm={5} xs={0} style={{ backgroundColor: '#ffffff' }}>
                        <Row type="flex" justify="center">
                        </Row>
                    </Col>

                    {/*========= Work Here for review ======== */}

                    <Col className="col-profile" lg={12} md={12} sm={12} xs={24}>
                        <Row type="flex" justify="center">
                            <Col span={22}>
                                <div className="div-review">

                                    <Row type="flex">
                                        <Col lg={7} md={8} sm={9} xs={8}>
                                            <h4>Reviews (32)</h4>
                                        </Col>
                                        <Col lg={9} md={5} sm={3} xs={6}>
                                        </Col>
                                        <Col lg={8} md={11} sm={12} xs={10}>
                                            <Button className="review-button"><h4>Write a Review</h4></Button>
                                        </Col>
                                    </Row><br />

                                    <Row className="row-review-type" type="flex" justify="space-between">
                                        <Col span={6}>
                                            <Row>
                                                <h5> Explains</h5>
                                            </Row>
                                        </Col>
                                        <Col span={6}>
                                            <Row>
                                                <h5> Listens</h5>
                                            </Row>
                                        </Col>
                                        <Col span={6}>
                                            <Row>
                                                <h5> Respect & Concer</h5>
                                            </Row>
                                        </Col>
                                        <Col span={6}>
                                            <Row>
                                                <h5> Time Spent with Patient</h5>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className="row-review-rate" type="flex" justify="space-between">
                                        <Col span={6}>
                                            <Row>
                                                <Rate className="review-rating" disabled defaultValue={4} />
                                            </Row>
                                        </Col>
                                        <Col span={6}>
                                            <Row>
                                                <Rate className="review-rating" disabled defaultValue={4} />
                                            </Row>
                                        </Col>
                                        <Col span={6}>
                                            <Row>
                                                <Rate className="review-rating" disabled defaultValue={3} />
                                            </Row>
                                        </Col>
                                        <Col span={6}>
                                            <Row>
                                                <Rate className="review-rating" disabled defaultValue={5} />
                                            </Row>
                                        </Col>
                                    </Row><br />

                                    <Row className="people-review-box" type="flex">
                                        <Col xl={2} lg={3} md={3} sm={4} xs={4}>
                                            <div>
                                                <Avatar className="avatar-review" size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                            </div>
                                        </Col>

                                        <Col xl={22} lg={21} md={21} sm={20} xs={20}>
                                            <div>
                                                <Row type="flex">
                                                    <Col span={24}>
                                                        <h5>Kevin Marshall</h5>
                                                    </Col>
                                                </Row>
                                                <Row type="flex">
                                                    <Col span={24}>
                                                        <Rate className="review-rating" disabled defaultValue={5} />
                                                    </Col>
                                                </Row><br />
                                            </div>
                                        </Col>

                                        <Col span={24}>
                                            <h5 className="review-date">Reviewed on - Aug 29th 2016</h5>
                                        </Col>

                                        <Col span={24}>
                                            <p className="review-text">
                                                Dr. Abby even gave me a follow up call 3 days after I was home to discuss
                                                test results. She is truly an outstanding dentist! I feel very comfortable
                                                with her taking care of my medical needs.
                                    </p>
                                        </Col>
                                    </Row><br />

                                    <Row type="flex">
                                        <Col span={24}>
                                            <Button className="all-reviews">READ ALL REVIEWS</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    {/*========= Review section ended here ========= */}

                    <Col lg={5} md={7} sm={7} xs={0} style={{ backgroundColor: '#ffffff' }}>
                        <Row type="flex" justify="center">
                        </Row>
                    </Col>

                    <Col lg={2} md={0} sm={0} xs={0} style={{ backgroundColor: '#ffffff' }}>
                        <Row type="flex" justify="center">
                        </Row>
                    </Col>
                </Row>
            </div >
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

export default connect(mapStateToProps, mapDisptchToProps)(Profle);