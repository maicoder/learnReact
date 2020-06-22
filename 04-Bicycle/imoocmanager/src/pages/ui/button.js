import React, {Component} from 'react';
import {Card, Button, Radio} from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined
} from "@ant-design/icons";
import './index.less';

class Buttons extends Component {
  render() {
    return (
      <div>
        <Card title="基础按钮" className="Card">
          <Button type="primary">IMooc</Button>
          <Button>IMooc</Button>
          <Button type="dashed">IMooc</Button>
          <Button danger>IMooc</Button>
          <Button disabled>IMooc</Button>
          <Button ghost>IMooc</Button>
          <Button type="primary" style={{marginTop: 10}} block>IMooc</Button>
        </Card>
        <Card title="图形按钮" className="Card">
          <Button icon={<PlusOutlined />}>创建</Button>
          <Button icon={<EditOutlined />}>编辑</Button>
          <Button icon={<DeleteOutlined />}>删除</Button>
          <Button shape="circle" icon={<SearchOutlined />}></Button>
          <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
          <Button type="primary" icon={<DownloadOutlined />}>下载</Button>
        </Card>
        <Card title="loading按钮" className="Card">
          <Button type="primary" loading={true}>确定</Button>
          <Button type="primary" shape="circle" loading={true}></Button>
          <Button loading={true}>点击加载</Button>
          <Button shape="circle"></Button>
          <Button type="primary">关闭</Button>
        </Card>
        <Card title="按钮组" className="Card">
          <Button.Group>
            <Button type="primary" icon={<LeftOutlined />} style={{marginRight: "-2px"}}>返回</Button>
            <Button type="primary" icon={<RightOutlined />}>前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸">
          <Button type="primary" size="large">IMooc</Button>
          <Button>IMooc</Button>
          <Button type="dashed" size="small">IMooc</Button>
          <Button type="primary" danger>IMooc</Button>
          <Radio.Group>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
        </Card>
      </div>
    );
  }
}

export default Buttons;