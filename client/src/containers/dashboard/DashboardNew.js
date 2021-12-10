import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardComponent from '../../components/dashboard/dashboard/Dashboard';
import Nav from '../../components/dashboardnew/Nav';
import Sidebar from '../../components/dashboardnew/Sidebar';
import { getUserDetail } from '../../store/action/detail.action';
import './dashNew.css';

const DashboardNew = () => {
  const login = useSelector((state) => state.login.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetail(login));
  }, []);

  return (
    <React.Fragment>
      <Sidebar />
      <div id='main'>
        <DashboardComponent />
      </div>
    </React.Fragment>
  );
};

export default DashboardNew;
