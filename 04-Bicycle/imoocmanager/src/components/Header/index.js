import React from "react";
import { Row, Col } from "antd";
import "./index.less";
import Util from "../../utils/utils";
import axios from "../../axios/";

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "Hello, React",
      sysTime: null
    }
  }

  UNSAFE_componentWillMount() {
    // this.setState(
    //   {userName: "Hello,World"}
    // )

    // setInterval(() => {
    //   let sysTime = Util.formateDate(new Date().getTime());
    //   this.setState({
    //     sysTime
    //   })
    // }, 1000)
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let sysTime = Util.formateDate(new Date().getTime());
    this.setState(
      {sysTime}
    )
  }

  getWeatherAPIData() {
    axios.jsonp({

    }).then((res) => {

    })
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">首页</Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">晴</span>
          </Col>
        </Row>
      </div>
    );
  }
}