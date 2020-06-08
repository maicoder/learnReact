import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './index.less';

class Modals extends Component {

  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }

  render() {
    return (
      <div>
        <Card title="基础模态框" className="Card">
          <Button type="primary" onClick={() => this.handleModal1Show('showModal1')}>open</Button>
          <Button type="primary" onClick={() => this.handleModal1Show('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleModal1Show('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.handleModal1Show('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className="Card">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => this.setState(() => ({showModal1: false}))}
        >
          <h3>欢迎学习IMooc新推出的React高级课程</h3>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="好的"
          cancelText="算了"
          onCancel={() => this.setState(() => ({showModal2: false}))}
        >
          <h3>欢迎学习IMooc新推出的React高级课程</h3>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal3}
          okText="好的"
          cancelText="算了"
          onCancel={() => this.setState(() => ({showModal3: false}))}
          style={{top: 20}}
        >
          <h3>欢迎学习IMooc新推出的React高级课程</h3>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal4}
          okText="好的"
          cancelText="算了"
          onCancel={() => this.setState(() => ({showModal4: false}))}
          wrapClassName="vertical-center-modal"
        >
          <h3>欢迎学习IMooc新推出的React高级课程</h3>
        </Modal>
      </div>
    );
  }

  handleModal1Show = (type) => {
    this.setState(() => ({
      [type]: true
    }));
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: "确认?",
      content: "你确定你学会React了吗?",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
      maskClosable: true
    })
  }
}

export default Modals;