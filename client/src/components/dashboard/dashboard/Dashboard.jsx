import React from 'react';

const DashboardComponent = () => {
  return (
    <div id='dashboard__component' className='m-4'>
      <div className='container'>
        <div className='cover-card'>
          <div className='cover-card__header'>
            <div className='cover-card__header__title'>
              <h3>Dashboard</h3>
              <div className='breadcrumb'>
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
            </div>
          </div>
          <div className='cover-card__body'>
            <div
              className='cover-picture'
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
              }}
            ></div>

            <div
              className='profile_pics__item'
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
              }}
            >
              hello
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
