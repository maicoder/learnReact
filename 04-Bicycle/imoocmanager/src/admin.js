import React from 'react';
import { Row, Col } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
// import Home from "./pages/home";
import "./style/common.less";

class Admin extends React.Component {

  render() {
    return (
      <div>
        <Row className="container">
          <Col span={3} className="nav-left">
            <NavLeft />
          </Col>
          <Col span={21} className="main">
            <Header />
            <div className="content">
              {this.props.children}
            </div>
            <Footer />
          </Col>
        </Row>
      </div>

    );
  }
}

export default Admin;
