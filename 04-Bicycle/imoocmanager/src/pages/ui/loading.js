import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import './index.less';

class Loading extends Component {
  render() {
    const icon = <Icon type="loading" style={{fontSize:"24px"}}></Icon>
    return (
      <div>
        <Card title="Spin用法" className="Card">
          <Spin style={{marginRight:"30px"}}></Spin>
          <Spin size="large" style={{marginRight:"30px"}}></Spin>
          <Spin size="small" style={{marginRight:"30px"}}></Spin>
          <Spin indicator={icon} style={{marginRight:"30px"}} />
        </Card>
        <Card title="内容遮罩" className="Card">
          <Alert message="React" description="欢迎来到React实战课程" type="info"></Alert>
          <Spin>
            <Alert message="React" description="欢迎来到React实战课程" type="warning"></Alert>
          </Spin>
          <Spin tip="加载中">
            <Alert message="React" description="欢迎来到React实战课程" type="warning"></Alert>
          </Spin>
          <Spin tip="加载中" indicator={icon}>
            <Alert message="React" description="欢迎来到React实战课程" type="warning"></Alert>
          </Spin>
        </Card>
      </div>
    );
  }
}

export default Loading;