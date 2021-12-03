import React from 'react'
import { Card, Col, Row, Avatar } from 'antd';
import styled from 'styled-components'

const{Meta} = Card
export const Join = () => {

    const cardStyle = {
        background: 'transparent',
        marginBottom: '10px',
        borderRadius: '8px',
        color: '#fff'
    }

    return (
      <Wrapper>
        <div id='join'>
          <div className='container'>
            <div className='row d-flex justify-content-between '>
              <div className='col-md-6 col-sm-6 p-4'>
                <h2 className='title'>
                  Want to <em>Join Contest?</em>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto iusto modi tempora laboriosam aut quasi omnis
                  maxime aliquam alias voluptate?
                </p>
                
                <Row gutter={16}>
                  <Col xl={24}>
                    <Card bordered={false} style={cardStyle}>
                      <Meta
                        avatar={
                          <Avatar src='https://cdn-icons-png.flaticon.com/512/2206/2206358.png' />
                        }
                        title='HD Resolution Image'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui rerum non inventore pariatur est!'
                      />
                    </Card>

                    <Card bordered={false} style={cardStyle}>
                      <Meta
                        avatar={
                          <Avatar src='https://cdn-icons-png.flaticon.com/512/4263/4263610.png' />
                        }
                        title='Create an Account'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui rerum non inventore pariatur est!'
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className='col-md-6 col-sm-6 align-self-center'>
                <center>
                  <img
                    src='https://images.unsplash.com/photo-1438109491414-7198515b166b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBob2xkaW5nJTIwY2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt='woman holding camera'
                    className='img-fluid'
                   
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}

const Wrapper = styled.section`
  #join {
    background: #d7d8deed;
    padding: 70px 0px;
  }

  #join .title {
    font-weight: bold;
    color: #000;
  }

  #join .title em {
    color: #c70a90;
    font-style: normal;
  }
`;
