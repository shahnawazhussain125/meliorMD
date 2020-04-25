import React, { Component } from "react";
import { Row, Col, Input, Button, Typography, Modal, Select } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const { Option } = Select;

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

  render() {
    return (
      <div>
        <div className="provoder-list-body">
          <Row className="row-container">
            <Col
              span={20}
              style={{
                marginTop: 100,
                marginBottom: 30,
              }}
            >
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
                  <Typography
                    style={{
                      marginLeft: 100,
                      backgroundColor: "#819BFF",
                      height: 32,
                      fontSize: 16,
                      fontWeight: "bold",
                      textAlign: "end",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    Add
                  </Typography>
                </Col>
                <Col span={2}>
                  <Input
                    placeholder="4"
                    style={{ textAlign: "center", fontSize: 16 }}
                  />
                </Col>
                <Col span={5}>
                  <Typography
                    style={{
                      marginRight: 100,
                      backgroundColor: "#819BFF",
                      height: 32,
                      fontSize: 16,
                      fontWeight: "bold",
                      textAlign: "left",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    new lines
                  </Typography>
                </Col>
              </Row>

              {/* Table conatiner */}
              <Row
                style={{
                  backgroundColor: "#F0DC00",
                  paddingTop: 15,
                  paddingBottom: 15,
                  marginTop: 50,
                }}
              >
                <Col span={4}>
                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Document
                  </Typography>
                </Col>
                <Col span={3}>
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
                <Col span={4}>
                  <Typography style={{ color: "pink" }}>.</Typography>
                </Col>
                <Col span={3}>
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
                  <Row
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      padding: 5,
                    }}
                  >
                    <Col span={4}>
                      <Typography
                        style={{ backgroundColor: "#EBEBEB", marginRight: 20 }}
                      >
                        {val.document}
                      </Typography>
                    </Col>
                    <Col span={3}>
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
                      <Button
                        style={{
                          margin: 5,
                          backgroundColor: "#7855F8",
                          color: "#fff",
                        }}
                      >
                        Show
                      </Button>
                    </Col>
                  </Row>
                );
              })}
              {/* <Table
                style={{ marginTop: 100 }}
                columns={columns}
                dataSource={this.state.rowData}
                scroll={{ x: 1500, y: 300 }}
              /> */}
            </Col>
            <Col span={1}>
              <Button
                style={{
                  margin: 10,
                  backgroundColor: "#7855F8",
                  color: "#fff",
                }}
              >
                Update
              </Button>
            </Col>
          </Row>

          {/* Row save all new button */}
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{
                margin: 10,
                backgroundColor: "#7855F8",
                color: "#fff",
                marginBottom: 50,
              }}
            >
              Save all new
            </Button>
          </Row>
        </div>
      </div>
    );
  }
}

export default Directory;

// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edrward ${i}`,
//     age: `true ${i}`,
//     address: `London Park no. ${i}`,
//   });
// }

// const columns = [
//   {
//     title: "Document",
//     width: 150,
//     dataIndex: "name",
//     key: "name",
//     fixed: "left",
//   },
//   {
//     title: "test Boolean",
//     width: 120,
//     dataIndex: "age",
//     key: "age",
//     fixed: "left",
//   },
//   {
//     title: "test Number",
//     dataIndex: "address",
//     key: "1",
//     width: 150,
//   },
//   {
//     title: "test String",
//     dataIndex: "address",
//     key: "2",
//     width: 150,
//   },
//   {
//     title: "test String 2",
//     dataIndex: "address",
//     key: "3",
//     width: 150,
//   },
//   {
//     title: "t Timestamp",
//     dataIndex: "address",
//     key: "4",
//     width: 150,
//   },
//   {
//     title: "Dimestamp datetime",
//     dataIndex: "address",
//     key: "5",
//     width: 150,
//   },
//   {
//     // title: "Action",
//     key: "operation",
//     fixed: "right",
//     width: 100,
//     render: () => <Button>show</Button>,
//   },
// ];
