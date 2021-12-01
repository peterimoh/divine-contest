import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumb.css';

const Breadcumb = ({image, title, path, present}) => {
 
  return (
    <div
      id='breadcrumb'
      style={{
        backgroundImage: `linear-gradient(60deg, #0000004f, #0000002e), url(${image})`,
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 title'>
                      <h2>{ title}</h2>
          </div>
          <div className='col-md-6'>
            <ul className='crumb'>
              <li>
                <Link to={path}>Home /</Link> {present}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div
          class='jumbotron jumbotron-fluid custom-size'
          style={{
            backgroundImage: `linear-gradient(27deg, #0000004f, #0000002e), url(${hellp})`,
          }}
        >
          <div class='container'>
            <div className='row f-flex align-items-center'>
              <div className='col-md-6 title'>
                <h2>Login</h2>
              </div>
              <div className='col-md-6'>
                <span>
                  <Link to='/'>Home</Link> / <p>Login</p>
                </span>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default Breadcumb;
