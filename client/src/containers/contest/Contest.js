import React, { Fragment, useEffect } from 'react';
import Sidebar from '../../components/dashboardnew/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { contestAction } from '../../store/action/contest.action';

const Contest = () => {

    const contest = useSelector(state => state.contest);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(contestAction());
    }, [])


  return (
    <Fragment>
      <Sidebar />
      <div id='contest mt-5 mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='contest-header mt-3 mb-4'>
                <h1>Available Contest</h1>
                          </div>
                          
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contest;
