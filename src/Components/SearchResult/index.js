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
                        <Breadcrumb className="bread-crumb">
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>California</Breadcrumb.Item>
                            <Breadcrumb.Item>San Francisc</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row type="flex" >
                    <Col span={5} className="search-content">
                        <div>
                            <h1>Filter Result</h1>
                        </div>
                        <div>
                            <div>
                                <label className="input-label">LOCATIONS BY CITY</label>
                                <Input className="search-input" placeholder="E.g San Francisc" />
                            </div><br/>
                        </div>
                        <div>
                            <div>
                                <label className="input-label">ZIP COD</label>
                                <Input className="search-input" placeholder="Zip cod" />
                            </div><br/>
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
                            </div><br/>
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
                            <div><br/>
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
                            </div><br/><br/>
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
                                            <Radio className="input-radio" value="Adults Only">Adults Only</Radio>
                                        </li>
                                        <li>
                                            <Radio className="input-radio" value="Both Adults and Children">Both Adults and Children</Radio>
                                        </li>
                                        <li>
                                            <Radio className="input-radio" value="Children & Adolescents Only">Children & Adolescents Only</Radio>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="input-label">GENDER OF HEALTHCARE PROVIDER</p>
                                    <ul>
                                        <li>
                                            <Radio style={{fontSize:"12px"}} value="Female">Female</Radio>
                                        </li>
                                        <li>
                                            <Radio style={{fontSize:"12px"}} value="Male">Male</Radio>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </Col>

                    <Col span={18} style={{backgroundColor:'#ffffff'}}>

                        <Row type="flex" justify="center">
                            <div style={{display:'inline'}}><br/>
                                <h1><span style={{color:"#0F6AB6"}}>202 </span> Physicians</h1>
                            </div>
                            <div style={{display:'inline',marginLeft:'25%'}}><br/>
                                {/* <label></label> */}
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

                        <Row type="flex" justify="center">
                            <Col span={16}>

                                <Row style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{borderTop:'1px solid #A0A1A2',borderBottom:'1px solid #A0A1A2',borderLeft:'2px solid #E9EBEC',borderRight:'2px solid #E9EBEC', padding:'8px',borderRadius:'5px',margin:'10px'}}>
                                    <Col span={6}>
                                        <p>Helwo</p>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <h4>Abby Abelson, MD, FACR</h4>
                                            <p style={{fontSize:'12px'}}>Physician — Obstetrician/Gynecologist<br/>
                                             ADDRESS<br/>
                                             2726 Shinn Street, New York - View on map</p>
                                            <Button style={{height:'25px',border:'2px solid #6D8496',borderRadius:'12px',color:'#6D8496', fontSize:'10px'}}>VIEW PROFILE</Button>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div>
                                            <p>CALL</p>
                                            <h2 style={{color:'#0F6AB6'}}>216.445.2030</h2>
                                        </div>
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