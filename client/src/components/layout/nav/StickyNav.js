import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu, GrClose, MdOutlineHowToVote } from 'react-icons/all';
import Logo from '../../../images/logo.png';
import { navLinks } from './data';
import './sidebar.css';
import { logoutUser } from '../../../store/action/auth.action';

const StickyNav = ({ isLoggedIn }) => {
  const [sidebar, setSidebar] = React.useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  const classRef = React.useRef(null);
  const navtopRef = React.useRef(null);

  function stick_nav() {
    // window.addEventListener('scroll', function () {
    //   if (window.scrollY > 50) {
    //     navtopRef.current.classList.add('fixed-top');
    //     // add padding top to show content behind navbar
    //     var navbar_height = document.querySelector('.navbar').offsetHeight;
    //     document.body.style.paddingTop = navbar_height + 'px';
    //   } else {
    //    navtopRef.current.classList.remove('fixed-top');
    //     // remove padding top from body
    //     document.body.style.paddingTop = '0';
    //   }
    // });
  }

  useEffect(() => {
    stick_nav();
  }, []);

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
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
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
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
        <br />
        <div className='authenticate'>
          {isLoggedIn ? (
            <>
              {' '}
              <Link to='/dashboard' className='btn btn-grey btn-purple-modified'>
                Dashboard
              </Link> <br/>
              <a
                // to='/dashboard'
                className='btn btn-grey btn-purple-modified'
                onClick={handleLogout}
              >
                Log out
              </a>
            </>
          ) : (
            <>
              {' '}
              <Link to='/login' className='btn btn-grey btn-purple-modified'>
                Login
              </Link>
              <br />
              <Link to='register' className='btn btn-purple btn-purple-modified'>
                Create Account
              </Link>
            </>
          )}
        </div>
      </div>

      {/* sidebar is done here  */}
      <nav
        id='navbar_top'
        ref={navtopRef}
        className='navbar navbar-expand-lg navbar-light bg-light fixed-top'
      >
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={Logo} alt='Teen Girls Up Logo' />
          </Link>
          <div className='control-divider'>
            {/* vote mobile`` */}
            <MdOutlineHowToVote className='vote-btn' />

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
          </div>
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
                <a className='nav-link'>
                  Vote
                </a>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
            {isLoggedIn ? (
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/dashboard'>
                    Dashboard
                  </Link>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' onClick={handleLogout} style={{cursor: 'pointer'}}>
                    Log Out
                  </a>
                </li>
              </ul>
            ) : (
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
            )}
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
