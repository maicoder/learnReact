import React from 'react';
import { Row, Col } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class Admin extends React.Component {

  render() {
    return (
      <div>
        <Row className="container">
          <Col span={3} className="nav-left">left</Col>
          <Col span={21} className="main">
            <Header></Header>
            <Row>content</Row>
            <Footer></Footer>
          </Col>
        </Row>
      </div>
    );
  }
}