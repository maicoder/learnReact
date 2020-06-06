import React from "react";
import { Menu } from "antd";
import menuConfig from "../../config/menuConfig";
import "./index.less";

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {

  componentDidMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({menuTreeNode});
  }

  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: []
    };
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          {item.title}
        </Menu.Item>
      )
    })
  }

  handleClick = (e) => {
    console.log('click', e);
  }

  render() {
    return (
      <div>

        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>MS</h1>
        </div>

        <Menu onClick={this.handleClick} theme="dark" >
          {this.state.menuTreeNode}
        </Menu>

      </div>
    )
  }
}