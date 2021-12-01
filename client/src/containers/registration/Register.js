import React, { Fragment } from 'react';
import Breadcumb from '../../components/layout/breadcrumb/Breadcumb';
import Footer from '../../components/layout/footer/Footer';
import Navbar from '../../components/layout/nav/Navbar';
import './signup.css';

export const Register = () => {
  const breadcrumbImg = `https://images.unsplash.com/photo-1517817748493-49ec54a32465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVnaXN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`;

  return (
    <Fragment>
      <Navbar />
      <Breadcumb
        image={breadcrumbImg}
        title='Registration'
        path='/'
        present='Registration'
      />
      <div id='register'>
        <div className='container'>
          <div className='row'>
            <div class='card register-card'>
              <div class='card-body'>
                <div className='col-md-8 m-auto'>
                  <h2 className='display-4 text-center'>Sign Up</h2>
                  <p className='lead text-center'>
                    Register to join the community
                  </p>

                  <form>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Name'
                      />
                     
                      <input
                        type='email'
                        className='form-control form-control-lg'
                        placeholder='Email Address'
                      />
                      <input
                        type='password'
                        className='form-control form-control-lg'
                        placeholder='Password'
                      />
                      <input
                        type='password'
                        className='form-control form-control-lg'
                        placeholder='Confirm Password'
                      />
                     <button type="submit" className='btn btn-success btn-purple btn-purple-modified'>submit</button>
                      <p className='text-center'>
                        Already have an account? <a href='/login'>Login</a>
                      </p>
                      <p className='text-center'>
                        Forgot your password? <a href='/forgot'>Reset</a>
                      </p>
                      <p className='text-center'>
                        Don't have an account? <a href='/register'>Register</a>
                      </p>
                      <p className='text-center'>
                        Need help? <a href='/help'>Contact us</a>
                      </p>
                      <p className='text-center'>Terms of service</p>
                      <p className='text-center'>Privacy policy</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
