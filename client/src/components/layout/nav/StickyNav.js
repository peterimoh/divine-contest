import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu, GrClose, MdOutlineHowToVote } from 'react-icons/all';
import Logo from '../../../images/logo.png';
import { navLinks } from './data';
import './sidebar.css';
import { logoutUser } from '../../../store/action/auth.action';
import { searchContestantAction } from '../../../store/action/contestant.action';
import { apiUrl } from '../../../api';

const StickyNav = ({ isLoggedIn }) => {
  const [sidebar, setSidebar] = React.useState(false);
  const [isSticky, setSticky] = useState(!false);
  const [uuid, setUuid] = useState('');
  const [result, setResult] = useState([]);

  let voteLinkBaseURL = `${apiUrl}/api/auth/vote`;
  const { searchLoading, searchResult, searchError } = useSelector(
    (state) => state.searchContestant
  );

  const ref = useRef(null);

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

  useEffect(() => {
    if (searchResult.msg && searchResult.msg.length > 0) {
    }
  }, [searchResult]);

  //function that looks through array of objects and

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchContestantAction(uuid));
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
              <Link
                to='/dashboard'
                className='btn btn-grey btn-purple-modified'
              >
                Dashboard
              </Link>{' '}
              <br />
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
              <Link
                to='register'
                className='btn btn-purple btn-purple-modified'
              >
                Create Account
              </Link>
            </>
          )}
        </div>
      </div>

      {/* sidebar is done here  */}

      <nav
        id='navbar_top'
        ref={ref}
        className='navbar navbar-expand-lg navbar-light bg-light fixed-top pt-1 pb-1'
      >
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={Logo} alt='Teen Girls Up Logo' />
          </Link>
          <div className='control-divider'>
            {/* vote mobile`` */}
            <MdOutlineHowToVote
              className='vote-btn'
              // to='#'
              // className='nav-link'
              data-bs-toggle='modal'
              data-bs-target='#mobileModal'
            />

            <div
              className='modal fade'
              id='mobileModal'
              tabindex='-1'
              aria-labelledby='mobileModallabel'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h6 className='modal-title' id='exampleModalLabel'>
                      <b>Vote for your favourite contestant</b>
                    </h6>
                  </div>
                  <div className='modal-body'>
                    <div className='search_form'>
                      <p className=''>
                        <strong>Enter Contestant Number</strong>
                      </p>
                      {searchError && (
                        <div>
                          <small className='text-danger'>
                            <b>{searchError.msg.error}</b>
                          </small>
                        </div>
                      )}
                      <form className='' onSubmit={handleSearch}>
                        <input
                          type='number'
                          name='search'
                          placeholder='E.g: 257457'
                          className='form-control mb-3'
                          onChange={(e) => setUuid(e.target.value)}
                        />
                        <button
                          type='submit'
                          className='btn btn-primary btn-override w-100'
                        >
                          {searchLoading ? (
                            <div className='d-flex justify-content-center'>
                              <div className='spinner-border' role='status'>
                                <span className='sr-only'></span>
                              </div>
                            </div>
                          ) : (
                            'Search'
                          )}
                        </button>
                      </form>

                      {searchLoading && (
                        <div className='container mt-3 mb-3'>
                          <div>
                            <center>
                              <div
                                className='spinner-grow text-success'
                                role='status'
                              >
                                <span className='sr-only'></span>
                              </div>
                            </center>
                          </div>
                        </div>
                      )}
                      <div className=' mt-3 mb-3'>
                        {searchResult.msg && searchResult.msg.length !== 0
                          ? searchResult.msg.map((x) => {
                              const {
                                id,
                                last_name,
                                first_name,
                                contest_pic,
                                title,
                                user_id,
                                contest_id,
                              } = x;
                              {
                                /* console.log(x); */
                              }
                              return (
                                <div className='search_result' key={id}>
                                  <a target='_blank' href={contest_pic}>
                                    <img
                                      className='img img-fluid'
                                      src={contest_pic}
                                    />
                                  </a>
                                  <div
                                    className='detail_block-mobile'
                                    style={{ lineHeight: 'initial' }}
                                  >
                                    <summary
                                      style={{
                                        textTransform: 'capitalize',
                                        fontWeight: '600',
                                        listStyle: 'none',
                                        fontSize: '1.2rem',
                                      }}
                                    >
                                      <small style={{ lineHeight: '1' }}>
                                        {title}
                                      </small>
                                    </summary>
                                    <p>
                                      Contestant:{' '}
                                      <i>
                                        {first_name} {last_name}
                                      </i>
                                    </p>
                                  </div>
                                  <a
                                    href={
                                      voteLinkBaseURL +
                                      `/?${user_id}pZPY$${contest_id}hDZP`
                                    }
                                    className='btn btn-primary btn-override'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                  >
                                    vote
                                  </a>
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                <Link
                  to='#'
                  className='nav-link'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                >
                  Vote
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>

            <div
              className='modal fade'
              id='exampleModal'
              tabindex='-1'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
              style={{ zIndex: '0 !important' }}
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalLabel'>
                      <b>Vote for your favourite contestant</b>
                    </h5>
                  </div>
                  <div className='modal-body'>
                    <div className='search_form'>
                      <p className=''>
                        <strong>Enter Contestant Number</strong>
                      </p>
                      {searchError && (
                        <div>
                          <small className='text-danger'>
                            <b>{searchError.msg.error}</b>
                          </small>
                        </div>
                      )}
                      <form className='' onSubmit={handleSearch}>
                        <input
                          type='number'
                          name='search'
                          placeholder='E.g: 257457'
                          className='form-control mb-3'
                          onChange={(e) => setUuid(e.target.value)}
                        />
                        <button
                          type='submit'
                          className='btn btn-primary btn-override w-100'
                        >
                          {searchLoading ? (
                            <div className='d-flex justify-content-center'>
                              <div className='spinner-border' role='status'>
                                <span className='sr-only'></span>
                              </div>
                            </div>
                          ) : (
                            'Search'
                          )}
                        </button>
                      </form>

                      {searchLoading && (
                        <div className='container mt-3 mb-3'>
                          <div>
                            <center>
                              <div
                                className='spinner-grow text-success'
                                role='status'
                              >
                                <span className='sr-only'></span>
                              </div>
                            </center>
                          </div>
                        </div>
                      )}
                      <div className='container mt-3 mb-3'>
                        {searchResult.msg && searchResult.msg.length !== 0
                          ? searchResult.msg.map((x) => {
                              const {
                                id,
                                last_name,
                                first_name,
                                contest_pic,
                                title,
                                user_id,
                                contest_id,
                              } = x;
                              {
                                /* console.log(x); */
                              }
                              return (
                                <div className='search_result' key={id}>
                                  {/* <img
                                    src={`${contest_pic}`}
                                    className='img-fluid'
                                    height='100'
                                    width='100'
                                    alt='contestant'
                                  /> */}
                                  <a target='_blank' href={contest_pic}>
                                    <img className='img img-fluid' src={contest_pic} />
                                  </a>
                                  <div className='detail_block'>
                                    <summary
                                      style={{
                                        textTransform: 'capitalize',
                                        fontWeight: '600',
                                      }}
                                    >
                                      {title}
                                    </summary>
                                    <p>
                                      <i>
                                        {first_name} {last_name}
                                      </i>
                                    </p>
                                  </div>
                                  <a
                                    href={
                                      voteLinkBaseURL +
                                      `/?${user_id}pZPY$${contest_id}hDZP`
                                    }
                                    className='btn btn-primary btn-override'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                  >
                                    vote
                                  </a>
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isLoggedIn ? (
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/dashboard'>
                    Dashboard
                  </Link>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    onClick={handleLogout}
                    style={{ cursor: 'pointer' }}
                  >
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
  .navbar {
    ${'' /* position: relative; */}
  }
  ${
    '' /* @media (max-width: 576px) {
    .navbar {
      height: auto;
    }
  } */
  }
  .navbar-brand img {
    height: 60px;
    width: 60px;
  }
  .nav-item a {
    color: #000 !important;
    font-weight: 600;
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

  input[type='number'] {
    background: #f8f8f8;
    ${'' /* border: transparent !important; */}
  }
  .search_result {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .detail_block {
    width: 60%;
    text-align: left;
  }

  .detail_block p {
    line-height: 1.5;
  }

  .img {
    width: 100px;
    border: 2px solid gray;
    padding: 5px;
  }
  .img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5);
  }
`;

export default StickyNav;
