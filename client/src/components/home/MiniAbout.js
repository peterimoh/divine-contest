import React from 'react';
import { Card, Col, Row } from 'antd';
import './miniAbout.css';

export const MiniAbout = () => {
  return (
    <section id='about-cards'>
      <div className='container'>
        <Row gutter={16}>
          <Col xs={24} xl={8}>
            <Card title='Card title' bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={24} xl={8}>
            <Card title='Card title' bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={24} xl={8}>
            <Card title='Card title' bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
