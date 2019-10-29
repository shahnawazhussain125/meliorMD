import React, { Component } from 'react';
import { Row, Col, Button, Input, TimePicker, Radio, Checkbox, Icon, Typography} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './index.css';
import logo from '../../assets/images/md-logo.webp';
import DrawerTab from '../Drawer'

class AddProviderListing extends Component {

    render() {
        return (
            <div>
                <Row type="flex">
                    <Col span={8}></Col>

                    <Col span={8}>
                        {/* ======== Form Row 1 ======== */}
                        <Row type="flex" className="provider-info-form">
                            <h2 className="provider-info-text">Providers Information</h2>
                        </Row>
                        {/* ======== Form Row 2 ======== */}
                        <Row type="flex" className="row-name">
                            <Col span={24}>
                                <h4>Provider Name</h4>
                            </Col>
                            <Col span={24}>
                                <Row type="flex">
                                    <Col className="input-name-col1" span={9}>
                                    <Input
                                        className="first-name"
                                        placeholder="First"
                                    />
                                    </Col>
                                    <Col className="input-name-col2" span={6}>
                                    <Input
                                        className="initial"
                                        placeholder="Initial"
                                    />
                                    </Col>
                                    <Col className="input-name-col3" span={9}>
                                    <Input
                                        className="last-name"
                                        placeholder="Last name"
                                    />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* ======== Form Row 3 ======== */}
                        <Row type="flex" className="row-radio-gender">
                            <Col span={24}>
                                <h4>Provider Gender</h4>
                            </Col>
                            <Col span={24}>
                                <Radio.Group>
                                    <Radio value="a">male</Radio>
                                    <Radio value="b">female</Radio>
                                </Radio.Group>
                            </Col>
                        </Row>
                        {/* ======== Form Row 4 ======== */}
                        <Row type="flex" className="row-address">
                            <Col span={24}>
                                <h4>Address</h4>
                            </Col>
                            <Col span={24}>
                                <Row type="flex">
                                    <Col className="input-address-col1" span={7}>
                                    <Input
                                        className="address-num"
                                        placeholder="Num"
                                    />
                                    </Col>
                                    <Col className="input-address-col2" span={10}>
                                    <Input
                                        className="address-street"
                                        placeholder="Street name"
                                    />
                                    </Col>
                                    <Col className="input-address-col3" span={7}>
                                    <Input
                                        className="address-suite"
                                        placeholder="Suite"
                                    />
                                    </Col>
                                    <Col className="input-address-col4" span={10}>
                                    <Input
                                        className="address-city"
                                        placeholder="City"
                                    />
                                    </Col>
                                    <Col className="input-address-col5" span={7}>
                                    <Input
                                        className="address-State"
                                        placeholder="State"
                                    />
                                    </Col>
                                    <Col className="input-address-col6" span={7}>
                                    <Input
                                        className="address-zip"
                                        placeholder="Zip"
                                    />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 4 ======== */}
                        <Row type="flex" className="row-phone-number">
                            <Col span={24}>
                                <h4>Phone number</h4>
                            </Col>
                            <Col span={14} className="input-number-col">
                                <Row type="flex">
                                    <Input
                                        className="phone-number"
                                        placeholder="(123)456-7890"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 5 ======== */}
                        <Row type="flex" className="row-email">
                            <Col span={24}>
                                <h4>email</h4>
                            </Col>
                            <Col span={14} className="input-email-col">
                                <Row type="flex">
                                    <Input
                                        className="email"
                                        placeholder="example@example.com"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 6 ======== */}
                        <Row type="flex" className="row-medical-school">
                            <Col span={19} className="medical-school-col">
                                <Row type="flex">
                                    <h4>Medical School</h4>
                                </Row>
                                <Row type="flex">
                                    <Input
                                        className="medical-school"
                                        placeholder="OHIO STATE UNIVERSITY COLLEGE OF MEDICINE & PUBLIC HEALTH"
                                    />
                                </Row>
                            </Col>
                            <Col span={5}>
                                <Row type="flex">
                                    <h4>Year<span className="year-star">*</span></h4>
                                </Row>
                                <Row type="flex">
                                    <Input
                                        className="medical-school-year"
                                        placeholder="1998"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 7 ======== */}
                        <Row type="flex" className="row-residency-training">
                            <Col span={19} className="residency-training-col">
                                <Row type="flex">
                                    <h4>Residency Training</h4>
                                </Row>
                                <Row type="flex">
                                    <Input
                                        className="residency-training"
                                        placeholder="MOFFITT HOSPITAL UNIVERSITY OF OF INTERNAL MEDICINE"
                                    />
                                </Row>
                            </Col>
                            <Col span={5}>
                                <Row type="flex">
                                    <h4>Year<span className="year-star">*</span></h4>
                                </Row>
                                <Row type="flex">
                                    <Input
                                        className="residency-training-year"
                                        placeholder="1998"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 8 ======== */}
                        <Row type="flex" className="row-american-board">
                            <Col span={24}>
                                <h4>American Board of Medical Specialties Certification</h4>
                            </Col>
                            <Col span={19} className="american-board-col" >
                                <Row type="flex">
                                    <Input
                                        className="american-board"
                                        placeholder="Urology"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/* ======== Form Row 9 ======== */}
                        <Row type="flex" className="provider-info-form">
                            <h2 className="provider-info-text">Practice Information</h2>
                        </Row>
                        {/*========== Form Row 10 ======== */}
                        <Row type="flex" className="row-taxonomy-id">
                            <Col span={24}>
                                <h4>Taxonomy ID</h4>
                            </Col>
                            <Col span={13} className="taxonomy-id-col" >
                                <Row type="flex">
                                    <Input
                                        className="taxonomy-id"
                                        placeholder="sample text"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 11 ======== */}
                        <Row type="flex" className="row-specialty">
                            <Col span={24}>
                                <h4>Specialty</h4>
                            </Col>
                            <Col span={13} className="specialty-col" >
                                <Row type="flex">
                                    <Input
                                        className="specialty"
                                        placeholder="dentist, physician and other"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 12 ======== */}
                        <Row type="flex" className="row-practice-name">
                            <Col span={24}>
                                <h4>Practice name</h4>
                            </Col>
                            <Col span={13} className="practice-name-col" >
                                <Row type="flex">
                                    <Input
                                        className="practice-name"
                                        placeholder="sample text"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 13 ======== */}
                        <Row type="flex" className="row-health-insurance">
                            <Col span={24}>
                                <h4>Healthcare Insurance Accepted</h4>
                            </Col>
                            <Col span={13} className="health-insurance-col" >
                                <Row type="flex">
                                    <Input
                                        className="health-insurance"
                                        placeholder="sample text"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 14 ======== */}
                        <Row type="flex" className="row-health-insurance2">
                            <Col span={24}>
                                <h4>Healthcare Insurance Accepted 2</h4>
                            </Col>
                            <Col span={13} className="health-insurance2-col" >
                                <Row type="flex">
                                    <Input
                                        className="health-insurance2"
                                        placeholder="sample text"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/* ======== Form Row 15 ======== */}
                        <Row type="flex" className="row-radio-accept-patient">
                            <Col span={24}>
                                <h4>Accepts New Patient</h4>
                            </Col>
                            <Col span={24}>
                                <Radio.Group>
                                    <Radio value="a">Yes</Radio>
                                    <Radio value="b">No</Radio>
                                </Radio.Group>
                            </Col>
                        </Row>
                        {/* ======== Form Row 16 ======== */}
                        <Row type="flex" className="row-patient-type">
                            <Col span={24}>
                                <h4>Patient Type</h4>
                            </Col>
                            <Col span={24}>
                                <Row type="flex">
                                    <Checkbox>Infant</Checkbox>
                                    <Checkbox>Children</Checkbox>
                                </Row>
                                <Row type="flex">
                                    <Checkbox>Adult</Checkbox>
                                    <Checkbox>Elderly</Checkbox>
                                </Row>
                            </Col>
                        </Row>
                        {/* ======== Form Row 17 ======== */}
                        <Row type="flex" className="row-office-hours">
                            <Col span={24}>
                                <h4>Office hours</h4>
                            </Col>
                            <Col span={24}>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col span={6}>
                                        <Checkbox>Sunday</Checkbox>
                                    </Col>
                                    <Col span={2}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col span={2}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col span={6}>
                                        <Checkbox>Monday</Checkbox>
                                    </Col>
                                    <Col span={2}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col span={2}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col span={6}>
                                        <Checkbox>Tuesday</Checkbox>
                                    </Col>
                                    <Col span={2}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col span={2}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col span={6}>
                                        <Checkbox>Wednesday</Checkbox>
                                    </Col>
                                    <Col span={2}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col span={2}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col span={6}>
                                        <Checkbox>Thursday</Checkbox>
                                    </Col>
                                    <Col span={2}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col span={2}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col span={6}>
                                        <Checkbox>Friday</Checkbox>
                                    </Col>
                                    <Col span={2}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col span={2}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col span={6}>
                                        <Checkbox>Saturday</Checkbox>
                                    </Col>
                                    <Col span={2}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col span={2}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col span={7}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* ======== Form Row 18 ======== */}
                        <Row type="flex" justify="center" className="row-submit-button">
                            <Button className="submit-button">Submit<Icon type="arrow-right" /></Button>
                        </Row>
                    </Col>

                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}


export default AddProviderListing;