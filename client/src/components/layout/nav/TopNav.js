import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  BsFillTelephoneForwardFill,
  FaEnvelopeOpenText,
} from 'react-icons/all';
import { socials } from './data';

const TopNav = ({ isLoggedIn }) => {
  return (
    <TopNavWrapper>
      <div className='header-top-area hidden-sm'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <div className='header-top-left'>
                <ul>
                  <li>
                    <BsFillTelephoneForwardFill />
                    <a href='tel:+985-2356-14566'>+985-2356-14566</a>
                  </li>
                  <li>
                    <i className='fa fa-envelope-o'></i>
                    <FaEnvelopeOpenText />
                    <a href='mailto:support@teengirlsup.com'>
                      support@teengirlsup.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-6'>
              <div className='right-side-tool text-right '>
                <div className='social-media-area'>
                  <ul>
                    {socials.map((x) => {
                      const { icon, link, id } = x;
                      return (
                        <li key={id}>
                          <Link to={link}>{icon}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className='header-top-right'>
                  <ul>
                    {isLoggedIn ? (
                      <li>
                        <i className='fa fa-users'></i>
                        <Link to='/dashboard'>Dashboard</Link>
                      </li>
                    ) : (
                      <li>
                        <i className='fa fa-users'></i>
                        <Link to='/login'>Login/Registration</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopNavWrapper>
  );
};

const TopNavWrapper = styled.div`
  .header-top-area {
    background: #bd0587ed;
    padding: 5px 0;
  }
`;

export default TopNav;
