import React from 'react';
import { Card, Col, Row, Avatar } from 'antd';
import './miniAbout.css';

const {Meta} = Card

export const MiniAbout = () => {
  return (
    <section id='about-cards'>
      <div className='container'>
        <Row gutter={16}>
          <Col xs={24} xl={8}>
            <Card bordered={false}>
              <Meta
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title='Lorem ipsum dolor sit amet.'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui rerum non inventore pariatur est!'
              />
            </Card>
          </Col>
          <Col xs={24} xl={8}>
            <Card bordered={false}>
              <Meta
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title='Lorem ipsum dolor sit amet.'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui rerum non inventore pariatur est!'
              />
            </Card>
          </Col>
          <Col xs={24} xl={8}>
            <Card bordered={false}>
              <Meta
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title='Lorem ipsum dolor sit amet.'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui rerum non inventore pariatur est!'
              />
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

