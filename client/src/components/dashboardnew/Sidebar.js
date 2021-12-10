import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle, GiHamburgerMenu } from 'react-icons/all';
import { privateRouteData } from '../../Route';
import './sidebarnew.css';
import logo from '../../images/logo.png';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/action/auth.action';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
   const dispatch = useDispatch();

  const closeSidebar = () => {
    setSidebar(true);
  };
    
    const openSidebar = () => {
        setSidebar(false);
    };

    // if (sidebar===false) {
    //     document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    // } else {
    //     document.body.style.backgroundColor = 'rgba(214, 214, 219, 0.836)';
    // }

      const handleLogout = () => {
        dispatch(logoutUser());
      };

  
  return (
    <>
      <div id='nav'>
        <div className='container'>
          <div className='d-flex justify-content-between'>
            <GiHamburgerMenu
              className='align-self-center openBtn'
              onClick={openSidebar}
            />
            <div className='control'>
              <Link to='/dashboard'>
                <img src={logo} alt='logo' className='logo' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        id='mySidenav'
        className={sidebar ? 'sidenav close mb-2' : 'sidenav mb-2'}
      >
        <AiFillCloseCircle
          className={sidebar ? 'closeBtn close mb-2' : 'closeBtn mb-2'}
          onClick={closeSidebar}
        />
        <div className='sidebar-nav mt-5'>
          {privateRouteData.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                {item.name}
              </Link>
            );
          })}
          <a
            // to='/dashboard'
            className=''
            onClick={handleLogout}
          >
            Log out
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
