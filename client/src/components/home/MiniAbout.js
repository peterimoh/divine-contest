import React from 'react';
import { Card, Col, Row, Avatar } from 'antd';
import styled from 'styled-components';

const {Meta} = Card

export const MiniAbout = () => {

  const cardStyle = {
    borderRadius: '8px'
  }

  return (
    <Wrapper>
      <div id='about-cards'>
        <div className='container'>
          <Row gutter={16}>
            <Col xs={24} xl={8}>
              <Card bordered={false} style={cardStyle}>
                <Meta
                  avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                  title='Lorem ipsum dolor sit amet.'
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui rerum non inventore pariatur est!'
                />
              </Card>
            </Col>
            <Col xs={24} xl={8}>
              <Card bordered={false} style={cardStyle}>
                <Meta
                  avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                  title='Lorem ipsum dolor sit amet.'
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui rerum non inventore pariatur est!'
                />
              </Card>
            </Col>
            <Col xs={24} xl={8}>
              <Card bordered={false} style={cardStyle}>
                <Meta
                  avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                  title='Lorem ipsum dolor sit amet.'
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui rerum non inventore pariatur est!'
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #about-cards {
    margin: 70px auto;
  }

  @media screen and (max-width: 1199px) {
    .ant-col-xs-24 {
      margin-bottom: 15px;
    }
  }
`;