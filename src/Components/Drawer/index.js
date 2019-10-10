import React, { Component } from 'react'
import { Drawer, Col, Row, Button, Icon } from 'antd';
import './index.css';

class CustomDrawer extends Component 
{
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
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
        >
          <Row type="flex" justufy="center"  className="drawer">
            <Col span={24}>
              <Row type="flex" justify="center" className="sidebar-tabs">
                <Button className="button-style"><h4>ABOUT</h4></Button>
              </Row>
              <Row type="flex" justify="center" className="sidebar-tabs">
                <Button className="button-style"><h4>DIRECTORY</h4></Button>
              </Row>
              <Row type="flex" justify="center" className="sidebar-tabs">
                <Button className="button-style"><h4>CONTACT US</h4></Button>
              </Row>
              <Row type="flex" justify="center" className="sidebar-tabs">
                <Button className="button-style"><h4>ADD A PROVIDER LIST</h4></Button>
              </Row>
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}

export default CustomDrawer;