import React from "react";
import { Link } from "react-router-dom"

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <h2>Main组件</h2>
        <Link to='/main/one'>main组件</Link>
        <hr/>
        {this.props.children}
      </div>
    );
  }
}