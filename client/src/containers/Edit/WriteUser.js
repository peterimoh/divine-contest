import React from 'react';
import { ProfileEdit } from '../../components/dashboard/profile/ProfileEdit';
import { UpdatePayment } from '../../components/dashboard/profile/UpdatePayment';
import UploadContestPhoto from '../../components/dashboard/profile/UploadContestPhoto';
import UploadCover from '../../components/dashboard/profile/UploadCover';
import UploadDP from '../../components/dashboard/profile/UploadDP';
import Sidebar from '../../components/dashboardnew/Sidebar';

const WriteUser = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div id='main'>
        <div className='container'>
          <h2>
            <b>Edit Profile</b>
          </h2>
          <div className='row d-flex'>
            <div className='col-md-4 col-sm-4'>
              <div className='edit_dp m-4'>
                <UploadDP />
              </div>
            </div>
            <div className='col-md-4 col-sm-4'>
              <div className='edit_dp m-4'>
                <UploadCover />
              </div>
            </div>
            <div className='col-md-4 col-sm-4'>
              <div className='edit_dp m-4'>
                <UploadContestPhoto />
              </div>
            </div>
            {/* <div className='col-md-6 col-sm-6'>
              <div className='edit_dp m-4'>
                <ProfileEdit />
              </div>
            </div> */}
          </div>
          <br />
          <div className='row'>
            <div className='col-md-6 col-sm-6'>
              <UpdatePayment />
            </div>
            <div className='col-md-6 col-sm-6'>
              <ProfileEdit />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default WriteUser;
