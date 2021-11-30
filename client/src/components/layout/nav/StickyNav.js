import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu, GrClose } from 'react-icons/all';
import Logo from '../../../images/logo.png';
import { navLinks } from './data';
import './sidebar.css';

const StickyNav = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <NavWrapper>
      <div className={sidebar ? 'sidebar open' : 'sidebar'}>
        <GrClose
          className='closebtn'
          onClick={closeSidebar}
          style={{ fill: '#fff' }}
        />
        <br />{' '}
        <center>
          <img src={Logo} alt='logo' />
        </center>
        <br />
        <ul className='navbar-nav m-auto'>
          {navLinks.map((x) => {
            const { id, page, link } = x;
            return (
              <li className='nav-item' key={id}>
                <Link className='nav-link' to={link}>
                  {page}
                </Link>
              </li>
            );
          })}
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Vote
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
        <br />
        <div className='authenticate'>
          <Link to='/login' className='btn btn-grey'>
            Login
          </Link><br />
          <Link to='register' className='btn btn-purple'>
            Create Account
          </Link>
        </div>
          </div>
          
          {/* sidebar is done here  */}
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={Logo} alt='Teen Girls Up Logo' />
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            onClick={openSidebar}
          >
            <GiHamburgerMenu
              className='navbar-toggler-icon'
              onClick={openSidebar}
            />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav m-auto'>
              {navLinks.map((x) => {
                const { id, page, link } = x;
                return (
                  <li className='nav-item' key={id}>
                    <Link className='nav-link' to={link}>
                      {page}
                    </Link>
                  </li>
                );
              })}
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Vote
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  .navbar-brand img {
    height: 60px;
    width: 100%;
  }
  .nav-item a {
    color: #000 !important;
  }

  .navbar-toggler {
    border: none;
  }
  .navbar-toggler:focus,
  .navbar-toggler:active {
    border: none !important;
  }
  .navbar-toggler-icon {
    fill: #bd0587ed;
  }
`;

export default StickyNav;
