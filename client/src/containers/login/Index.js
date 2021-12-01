import React from 'react';
import Breadcumb from '../../components/layout/breadcrumb/Breadcumb';
import BeforeFooter from '../../components/layout/footer/BeforeFooter';
import Footer from '../../components/layout/footer/Footer';
import Navbar from '../../components/layout/nav/Navbar';
import './login.css';

export const Login = () => {
  const breadcrumbImg =
    'https://images.unsplash.com/photo-1638208561774-6e02a8e17cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';
  return (
    <React.Fragment>
      <Navbar />
      <Breadcumb image={breadcrumbImg} title='Login' path='/' present='Login' />
      <div id='login'>
        <div className='login-form'>
          <center>
            {' '}
            <div class='card login-card'>
              <div class='card-body'>
                <h5 class='card-title'>Login</h5><br />
                {/* <hr className='line' /> */}
                <div className='loginForm'>
                  <form>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter e-mail'
                      />
                      <br />
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter password'
                      />
                                          <br />
                                          <button className='btn btn-purple btn-purple-modified' type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </center>
        </div>
          </div>
          {/* <BeforeFooter/> */}
      <Footer />
    </React.Fragment>
  );
};
