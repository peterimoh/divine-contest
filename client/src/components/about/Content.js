import React from 'react';
import { Layout } from 'antd';
import { Blockone } from './Blockone';
import { Blocktwo } from './Blocktwo';

const { Content } = Layout;

const AboutContent = () => {
  return (
    <Layout>
      <Content className='container'>
        <Blockone />
        <Blocktwo />
      </Content>
    </Layout>
  );
};

export default AboutContent;
