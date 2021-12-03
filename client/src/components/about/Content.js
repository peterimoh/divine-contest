import React from 'react'
import { Layout } from 'antd';
import { Blockone } from './Blockone';
import { Blocktwo } from './Blocktwo';
import { Blockthree } from './Blockthree';

const {Content } = Layout

const AboutContent = () => {
    return (
      <Layout>
            <Content className='container'>
                <Blockone />
                <Blocktwo />
                <Blockthree/>
        </Content>
      </Layout>
    );
}

export default AboutContent;
