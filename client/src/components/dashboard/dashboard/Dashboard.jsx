import React from 'react';
import { useSelector } from 'react-redux';
import About from './About';

const DashboardComponent = () => {

  const profile = useSelector(state => state.profile)
    const {detail} = profile;
  return (
    <div id='dashboard__component' className='m-4'>
      <div className='container'>
        <div className='cover-card'>
          <div className='cover-card__header'>
            <div className='cover-card__header__title mb-4'>
              <h3>Dashboard</h3>
              {/* <div className='breadcrumb'>
                <div className='breadcrumb__item'>
                  <a href='#'>Home</a>
                </div>
                <span> &gt; </span>
                <div className='breadcrumb__item'>
                  <a href='#' disabled>
                    Dashboard
                  </a>
                </div>
              </div>
              */}

            </div>
          </div>
          <div className='cover-card__body m-0'>
            <div
              className='cover-picture'
              style={{
                background: `url(${
                  detail.data &&
                  detail.data.map((item) => {
                    const { full_pic } = item;
                    return full_pic && full_pic.length > 0
                      ? 'data:image/*;base64,' + full_pic
                      : 'https://via.placeholder.com/800';
                  })
                })`,
              }}
            ></div>

            <div
              className='profile_pics__item'
              style={{
                background: `url(${
                  detail.data && detail.data.map((item) => {
                    const { profile_pic } = item;
                    return profile_pic && profile_pic.length > 0
                      ? 'data:image/*;base64,' + profile_pic
                      : 'https://via.placeholder.com/300';
                  })
                })`,
              }}
            ></div>
          </div>
        </div>
        <About />
      </div>
    </div>
  );
};

export default DashboardComponent;
