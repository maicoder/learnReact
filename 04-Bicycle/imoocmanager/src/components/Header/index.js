import React from "react";
import { Row, Col } from "antd";
import "./index.less";
import Util from "../../utils/utils";

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "Hello, React",
      sysTime: null,
      weather: '',
      weather_icon: '',
      temperature: ''
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    this.getWeatherAPIData();
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
    const url = "https://api.66mz8.com/api/weather.php?location=杭州"
    fetch(url).then(res => {
      res.json().then(resJson => {
        this.setState({
          weather: resJson.data[0].weather,
          weather_icon: resJson.data[0].weather_icon,
          temperature: resJson.data[0].temperature
        })
      })
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
            <span className="weather-icon">
              <img src={this.state.weather_icon} alt=""/>
            </span>
            <span className="weather-detail">{this.state.weather}</span>
            <span className="temperature">{this.state.temperature}</span>
          </Col>
        </Row>
      </div>
    );
  }
}