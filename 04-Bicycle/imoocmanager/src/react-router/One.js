import React from 'react';
import { Link } from 'react-router-dom';

export default class One extends React.Component {
  render() {
    return (
      <div>
        <Link to='/main/one'>One组件</Link>
        <hr/>
        {this.props.children}
      </div>
    );
  }
}
