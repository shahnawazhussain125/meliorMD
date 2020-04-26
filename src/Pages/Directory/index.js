import React, { Component } from "react";
import { Row, Col, Input, Button, Typography, Modal, Select } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const { Option } = Select;

// Functions for dropdown input menu
function onChange(value) {
  console.log(`selected ${value}`);
}
function onBlur() {
  console.log("blur");
}
function onFocus() {
  console.log("focus");
}
function onSearch(val) {
  console.log("search:", val);
}

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      visible: false,
      rowData: [
        {
          document: "kdaliSNJL83klnzllanay88GSM",
          testBool: "true",
          testNum: "1342424667",
          testString: "abcd",
          testString2: "bnwqt",
          timeStamp: "2020.01.01",
          dimeStamp: "2019.23.24",
        },
        {
          document: "kdaliSNJL83klnzllanay88GSM",
          testBool: "false",
          testNum: "1342424667",
          testString: "abcd",
          testString2: "bnwqt",
          timeStamp: "2020.01.01",
          dimeStamp: "2019.23.24",
        },
        {
          document: "kdaliSNJL83klnzllanay88GSM",
          testBool: "true",
          testNum: "1342424667",
          testString: "abcd",
          testString2: "bnwqt",
          timeStamp: "2020.01.01",
          dimeStamp: "2019.23.24",
        },
      ],
    };
  }

  // Modal functions
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <div className="provoder-list-body">
          <Row className="row-container">
            <Col span={21} style={{ marginTop: 100, marginBottom: 30 }}>
              <Row>
                <Col span={5}>
                  <Select
                    showSearch
                    style={{ width: 250 }}
                    placeholder="Select collection"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="author">Authors</Option>
                    <Option value="book">Books</Option>
                    <Option value="illustrator">Illustrators</Option>
                    <Option value="language">Languages</Option>
                    <Option value="tale">Tales</Option>
                    <Option value="ztest">zTest</Option>
                  </Select>
                </Col>
                <Col span={5}>
                  <Typography className="text-add">Add</Typography>
                </Col>
                <Col span={2}>
                  <Input
                    placeholder="4"
                    style={{ textAlign: "center", fontSize: 16 }}
                  />
                </Col>
                <Col span={5}>
                  <Typography className="text-newline">new lines</Typography>
                </Col>
              </Row>

              {/* Table conatiner */}
              <Row className="row1">
                <Col span={5}>
                  <Typography className="text-doc">Document</Typography>
                </Col>
                <Col span={2}>
                  <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                    test Boolean
                  </Typography>
                </Col>
                <Col span={3}>
                  <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                    test Number
                  </Typography>
                </Col>
                <Col span={3}>
                  <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                    test String
                  </Typography>
                </Col>
                <Col span={3}>
                  <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                    test String 2
                  </Typography>
                </Col>
                <Col span={3}>
                  <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                    t Timestamp
                  </Typography>
                </Col>
                <Col span={3}>
                  <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                    Dimestamp datetime
                  </Typography>
                </Col>
                <Col span={2}>
                  <Typography style={{ color: "#F0DC00" }}>.</Typography>
                </Col>
              </Row>
              <Row style={{ backgroundColor: "#FED6FF" }}>
                <Col span={5}>
                  <Typography style={{ color: "pink" }}>.</Typography>
                </Col>
                <Col span={2}>
                  <Typography style={{ fontWeight: "bold" }}>
                    <i>boolean</i>
                  </Typography>
                </Col>
                <Col span={3}>
                  <Typography style={{ fontWeight: "bold" }}>
                    <i>number</i>
                  </Typography>
                </Col>
                <Col span={3}>
                  <Typography style={{ fontWeight: "bold" }}>
                    <i>string</i>
                  </Typography>
                </Col>
                <Col span={3}>
                  <Typography style={{ fontWeight: "bold" }}>
                    <i>string</i>
                  </Typography>
                </Col>
                <Col span={3}>
                  <Typography style={{ fontWeight: "bold" }}>
                    <i>timestamp</i>
                  </Typography>
                </Col>
                <Col span={3}>
                  <Typography style={{ fontWeight: "bold" }}>
                    <i>timestamp</i>
                  </Typography>
                </Col>
                <Col span={2}>
                  <Typography style={{ color: "#FED6FF" }}>.</Typography>
                </Col>
              </Row>
              {this.state.rowData.map((val, i) => {
                return (
                  <Row className="row-map">
                    <Col span={5}>
                      <Typography
                        style={{ backgroundColor: "#EBEBEB", marginRight: 20 }}
                      >
                        {val.document}
                      </Typography>
                    </Col>
                    <Col span={2}>
                      <Typography>{val.testBool}</Typography>
                    </Col>
                    <Col span={3}>
                      <Typography>{val.testNum}</Typography>
                    </Col>
                    <Col span={3}>
                      <Typography>{val.testString}</Typography>
                    </Col>
                    <Col span={3}>
                      <Typography>{val.testString2}</Typography>
                    </Col>
                    <Col span={3}>
                      <Typography>{val.timeStamp}</Typography>
                    </Col>
                    <Col span={3}>
                      <Typography>{val.dimeStamp}</Typography>
                    </Col>
                    <Col span={2}>
                      <Button onClick={this.showModal} className="button-show">
                        Show
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col span={1}>
              <Button className="button-update">Update</Button>
            </Col>
          </Row>

          {/* Row save all new button */}
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Button className="button-save-all">Save all new</Button>
          </Row>
        </div>
        <Modal
          visible={visible}
          title="Update data"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>,
          ]}
        >
          <Row className="row-modal-inputflield">
            <Col span={6}>
              <Typography>Document</Typography>
            </Col>
            <Col span={15}>
              <Input placeholder="Enter document" style={{ fontSize: 16 }} />
            </Col>
          </Row>
          <Row className="row-modal-inputflield">
            <Col span={6}>
              <Typography>Test boolean</Typography>
            </Col>
            <Col span={15}>
              <Input placeholder="Enter boolean" style={{ fontSize: 16 }} />
            </Col>
          </Row>
          <Row className="row-modal-inputflield">
            <Col span={6}>
              <Typography>Test number</Typography>
            </Col>
            <Col span={15}>
              <Input placeholder="Enter number" style={{ fontSize: 16 }} />
            </Col>
          </Row>
          <Row className="row-modal-inputflield">
            <Col span={6}>
              <Typography>Test string</Typography>
            </Col>
            <Col span={15}>
              <Input placeholder="Enter string" style={{ fontSize: 16 }} />
            </Col>
          </Row>
          <Row className="row-modal-inputflield">
            <Col span={6}>
              <Typography>Test string 2</Typography>
            </Col>
            <Col span={15}>
              <Input placeholder="Enter string" style={{ fontSize: 16 }} />
            </Col>
          </Row>
          <Row className="row-modal-inputflield">
            <Col span={6}>
              <Typography>t Timestamp</Typography>
            </Col>
            <Col span={15}>
              <Input placeholder="Enter timestamp" style={{ fontSize: 16 }} />
            </Col>
          </Row>
          <Row className="row-modal-inputflield">
            <Col span={6}>
              <Typography>Dimestamp datetime</Typography>
            </Col>
            <Col span={15}>
              <Input placeholder="Enter dimestamp" style={{ fontSize: 16 }} />
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default Directory;
