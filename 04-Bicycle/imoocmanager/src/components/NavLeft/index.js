import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import menuConfig from "../../config/menuConfig";
import "./index.less";

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: []
    };
  }

  componentDidMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({
      menuTreeNode: menuTreeNode
    });
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
          <NavLink to={item.key}>
            {item.title}
          </NavLink>
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <div>

        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>MS</h1>
        </div>

        <Menu theme="dark" mode="vertical">
          {this.state.menuTreeNode}
        </Menu>

      </div>
    )
  }
}