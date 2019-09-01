import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Radio, Breadcrumb, Select, Pagination } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const InputGroup = Input.Group;
const { TabPane } = Tabs;
const { Option } = Select;

class SearchResult extends Component {

    render() {
        return (
            <div className="provoder-list-body">
                <Row>
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>California</Breadcrumb.Item>
                            <Breadcrumb.Item>San Francisc</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row type="flex" >
                    <Col span={6}>
                        <div>
                            <h1>Filter Result</h1>
                        </div>
                        <div>
                            <div>
                                <label>LOCATIONS BY CIT</label>
                                <Input placeholder="E.g San Francisc" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>ZIP COD</label>
                                <Input placeholder="Zip cod" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>PROVIDER CATEGOR</label>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a provider"
                                    optionFilterProp="children"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>SPECIALITY BY PROVIDER CATEGOR</label>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                >
                                    <Option value="jack" select>Obstercician/Gynecologis</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                            <div>
                                <div>
                                    <label>HEALTH INSURANC</label>
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
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
                                    <p>HIDE ADVANCED SEARCH <Icon type="caret-right" /></p>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <p>TYPE OF PATIENT SERVED</p>
                                    <ul>
                                        <li>
                                            <Radio value="Adults Only">Adults Only</Radio>
                                        </li>
                                        <li>
                                            <Radio value="Both Adults and Children">Both Adults and Children</Radio>
                                        </li>
                                        <li>
                                            <Radio value="Children & Adolescents Only">Children & Adolescents Only</Radio>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p>GENDER OF HEALTHCARE PROVIDER</p>
                                    <ul>
                                        <li>
                                            <Radio value="Female">Female</Radio>
                                        </li>
                                        <li>
                                            <Radio value="Male">Male</Radio>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col span={18}>
                        <Row>
                            <div>
                                <h1>202 Physicians</h1>
                            </div>
                            <div>
                                <label>Sorted By</label>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a provider"
                                    optionFilterProp="children"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                        </Row>
                        <Row type="flex" justify="center">
                            <Col span={16}>
                                <Row>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p>Physician — Obstetrician/Gynecologist</p>
                                            <p>ADDRESS</p>
                                            <p>2726 Shinn Street, New York - View on map</p>
                                            <Button>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p>Physician — Obstetrician/Gynecologist</p>
                                            <p>ADDRESS</p>
                                            <p>2726 Shinn Street, New York - View on map</p>
                                            <Button>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p>Physician — Obstetrician/Gynecologist</p>
                                            <p>ADDRESS</p>
                                            <p>2726 Shinn Street, New York - View on map</p>
                                            <Button>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p>Physician — Obstetrician/Gynecologist</p>
                                            <p>ADDRESS</p>
                                            <p>2726 Shinn Street, New York - View on map</p>
                                            <Button>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p>Physician — Obstetrician/Gynecologist</p>
                                            <p>ADDRESS</p>
                                            <p>2726 Shinn Street, New York - View on map</p>
                                            <Button>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p>Physician — Obstetrician/Gynecologist</p>
                                            <p>ADDRESS</p>
                                            <p>2726 Shinn Street, New York - View on map</p>
                                            <Button>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p>Physician — Obstetrician/Gynecologist</p>
                                            <p>ADDRESS</p>
                                            <p>2726 Shinn Street, New York - View on map</p>
                                            <Button>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p>Physician — Obstetrician/Gynecologist</p>
                                            <p>ADDRESS</p>
                                            <p>2726 Shinn Street, New York - View on map</p>
                                            <Button>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="center">
                                    <Col>
                                        <Pagination defaultCurrent={6} total={500} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default SearchResult;