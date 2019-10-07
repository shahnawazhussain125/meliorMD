import React, { Component } from 'react'
import { Drawer, Button } from 'antd';

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
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
        style={{textDecoration:'#2c61ad'}}
          title="Tab to view page"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Row type="flex" justufy="center">
            <Col span={24}>
              <Row type="flex" className="sidebar-tabs"><h4>ABOUT</h4></Row>
              <Row type="flex" className="sidebar-tabs"><h4>DIRECTORY</h4></Row>
              <Row type="flex" className="sidebar-tabs"><h4>CONTACT US</h4></Row>
              <Row type="flex" className="sidebar-tabs"><h4>ADD A PROVIDER LIST</h4></Row>
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}

export default CustomDrawer;