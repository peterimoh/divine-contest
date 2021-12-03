import React from 'react';
import { Carousel, Radio } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './slider.css';
import slideItems from './slideData';

const contentStyle = {
  height: '60vh',
  color: '#fff',
  //   lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Slider = () => {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <div id='slider'>
      <Carousel
        afterChange={onChange}
        autoplay={true}
        arrows
        nextArrow={<ArrowRightOutlined />}
        prevArrow={<ArrowLeftOutlined />}
      >
        {/* <div> */}
        {slideItems.map((x) => {
          const {
            id,
            title,
            description,
            imgUrl,
            btn1Link,
            btn2Link,
            linkText,
            btn2Text
          } = x;
          return (
            <div className='slider-item' key={id}>
              <div
                className='slider-item-img'
                style={{
                  background: `linear-gradient(25deg, rgba(54, 50, 50, 0.68),rgba(54, 50, 50, 0.31)), url(${imgUrl})`,
                }}
              >
                <h2 className='slide-title'>{title}</h2>
                <p>{description}</p>
                <div className='slider-item-btn'>
                  <Link to={btn1Link} className='btn btn-outline-dark btn-purple-modified'>{linkText}</Link>
                  <Link to={btn2Link} className='btn btn-outline-warning btn-purple btn-purple-modified'>{btn2Text}</Link>
                </div>
              </div>
            </div>
          );
        })}
        {/* </div> */}
      </Carousel>
    </div>
  );
};
