import React, { Component } from 'react';
import { Carousel, Card } from 'antd';
import './index.less';

class Carousels extends Component {
  render() {
    return (
      <div>
        <Card title="文字背景轮播" className="Card">
          <Carousel autoplay>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Card>
        <Card title="文字背景轮播" className="Card">
          <Carousel autoplay>
            <div>
              <h3><img src="/carousel-img/carousel-1.jpg" alt=""/></h3>
            </div>
            <div>
              <h3><img src="/carousel-img/carousel-2.jpg" alt=""/></h3>
            </div>
            <div>
              <h3><img src="/carousel-img/carousel-3.jpg" alt=""/></h3>
            </div>
          </Carousel>
        </Card>
      </div>
    );
  }
}

export default Carousels;