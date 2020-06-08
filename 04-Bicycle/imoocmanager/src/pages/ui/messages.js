import React, { Component } from 'react';
import { Card, Button, message } from 'antd';
import './index.less';

class Message extends Component {

  showMessage = (type) => {
    message[type]("恭喜你,react课程晋级成功")
  }

  render() {
    return (
      <div>
        <Card title="全局提示框" className="Card">
          <Button type="primary" onClick={()=>this.showMessage('success')}>success</Button>
          <Button type="primary" onClick={()=>this.showMessage('info')}>info</Button>
          <Button type="primary" onClick={()=>this.showMessage('warning')}>warning</Button>
          <Button type="primary" onClick={()=>this.showMessage('error')}>error</Button>
          <Button type="primary" onClick={()=>this.showMessage('loading')}>loading</Button>
        </Card>
      </div>
    );
  }
}

export default Message;