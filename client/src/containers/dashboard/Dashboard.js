import React, { useState } from 'react';
import { Layout } from 'antd';
import TopicMenu from '../../components/layout/dashboard/topicMenu/TopicMenu';
import SideBar from '../../components/layout/dashboard/sidebar/Sidebar';
import Navbar from '../../components/layout/dashboard/navbar/Navbar';
import DashboardComponent from '../../components/dashboard/dashboard/Dashboard';

import './dashboard.css';
import Contest from '../../components/dashboard/contest/Contest';


const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const topics = ['Dashboard', 'Contests', 'Edit Profile'];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState('0');

  // console.log('contentIndex', contentIndex);
  // console.log('selectedKey', selectedKey);

  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };

  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );

  return (
    <div id='dashboard'>
      {/* <Navbar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content className='content'>
          {contentIndex === 0 ? <DashboardComponent /> : contentIndex === 1 ?<Contest/> }
        </Layout.Content>
      </Layout> */}
    </div>
  );
};

export default Dashboard;
