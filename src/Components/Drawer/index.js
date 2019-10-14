import React, { Component } from 'react'
import { Drawer, Col, Row, Button, Icon } from 'antd';
import './index.css';

class CustomDrawer extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button className="drawer-button" onClick={this.showDrawer}>
          <Icon type="menu" />
        </Button>
        <Drawer
          title="Menu"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Row type="flex" justufy="left" className="drawer">
            <Col span={24}>
              <Row className="sidebar-tabs">
                <p className="links">About</p>
              </Row>
              <Row className="sidebar-tabs">
                <p className="links">Directory</p>
              </Row>
              <Row className="sidebar-tabs">
                <p className="links">Contact Us</p>
              </Row>
              <Row className="sidebar-tabs">
                <p className="links">Add Prvider List</p>
              </Row>
              <Row className="sidebar-tabs">
                <p className="links">Prvider Login</p>
              </Row>
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}

export default CustomDrawer;