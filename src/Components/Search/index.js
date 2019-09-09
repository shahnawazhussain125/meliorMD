import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Radio, Breadcrumb, Select, Pagination } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const InputGroup = Input.Group;
const { TabPane } = Tabs;
const { Option } = Select;

class Search extends Component {

    render() {
      return (
        <div className="provoder-list-body">
            <Row className="row-container">
            <Col span={12}>
                <div className="div-container" style={{backgroundColor:'#5C96C6'}}>
                    <span style={{padding:'15px'}}>
                      <h1 style={{color:'#ffffff',textAlign:'center',fontFamily:'arial',fontSize:'35px'}}>Find your best Physicians</h1>
                      <h2 style={{color:'#ffffff',textAlign:'center',fontFamily:'arial'}}>meliorMD will help you in that important decision.</h2>
                        <Row type="flex" style={{padding:'10px'}}>
                          <Col span={10}>
                            <Row type="flex" justify="center">
                              <div>
                                <label><h6 style={{color:'#ffffff',fontFamily:'arial'}}>SPECIALITY BY PROVIDER CATEGORY</h6></label>
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
                          </Col>

                          <Col span={8}>
                            <Row type="flex" justify="center">
                                <div>
                                <label><h6 style={{color:'#ffffff',fontFamily:'arial'}}>LOCATION BY CITY</h6></label>
                                <Input placeholder="E.g San Francisc" />
                                </div>
                            </Row>
                          </Col>

                          <Col span={6}>
                                <div style={{paddingLeft:'20px', paddingTop:'20px'}}>
                                <Button 
                                style={{height:'30px',border:'2px solid #6D8496',borderRadius:'15px',color:'#6D8496',fontSize:'12px',display:'inline'}}
                                >
                                SEARCH >>>
                                </Button>
                                </div>
                          </Col>

                        </Row>
                    </span>
                </div>
            </Col>
            </Row>
        </div>
      )
    }
}


export default Search;