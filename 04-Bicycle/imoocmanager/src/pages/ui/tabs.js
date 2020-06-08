import React, { Component } from 'react';
import { Card, message, Tabs, Icon } from 'antd';
import './index.less';
const TabPane = Tabs.TabPane;

class Butto extends Component {
  constructor() {
    super();
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        // closable: false,
      },
    ];
    this.state = {
      panes,
      activeKey: panes[0].key,
    }
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  handleCallback = (key) => {
    message.info("你选择了菜单" + key);
  }

  render() {
    return (
      <div>
        <Card title="tab标签" className="Card">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane key="1" tab="菜单1">菜单1</TabPane>
            <TabPane key="2" tab="菜单2" disabled>菜单2</TabPane>
            <TabPane key="3" tab="菜单3">菜单3</TabPane>
          </Tabs>
        </Card>
        <Card title="带图的tab标签" className="Card">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane key="1" tab={<span><Icon type="plus" />添加</span>}>菜单1</TabPane>
            <TabPane key="2" tab={<span><Icon type="edit" />编辑</span>}>菜单2</TabPane>
            <TabPane key="3" tab={<span><Icon type="delete" />删除</span>}>菜单3</TabPane>
          </Tabs>
        </Card>
        <Card title="可添加删除的tab标签" className="Card">
        <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
        </Card>
      </div>
    );
  }
}

export default Butto;