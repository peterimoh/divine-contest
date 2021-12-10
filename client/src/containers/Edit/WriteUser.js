import React from 'react';
import UploadCover from '../../components/dashboard/profile/UploadCover';
import UploadDP from '../../components/dashboard/profile/UploadDP';
import Sidebar from '../../components/dashboardnew/Sidebar';

const WriteUser = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div id='main'>
        <div className='container'>
          <h2>Edit Profile</h2>
          <div className='row'>
            <div className='col-md-6 col-sm-6'>
              <div className='edit_dp m-4'>
                <UploadDP />
              </div>
            </div>
            <div className='col-md-6 col-sm-6'>
              <div className='edit_dp m-4'>
                <UploadCover />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WriteUser;
