import React, { Fragment } from 'react';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';
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
                <div className='col-md-8 w-100 m-auto'>
                  <h2 className='display-4 text-center title'>Sign Up</h2>
                  <p className='lead text-center'>
                    Register to Join the Contest
                  </p>

                  <form>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='First Name'
                        name='first_name'
                      />
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Last Name'
                        name='last_name'
                      />

                      <input
                        type='email'
                        className='form-control form-control-lg'
                        placeholder='Email Address'
                        name='email'
                      />
                      <input
                        type='password'
                        className='form-control form-control-lg'
                        placeholder='Password'
                        name='password'
                      />

                      <small>
                        <i className='text-warning'>
                          contest is only available for United States
                        </i>
                      </small>
                      <CountryDropdown
                        className='form-control form-control-md'
                        value='US'
                        valueType='short'
                        blacklist={['*']}
                        name='country'
                        // onChange={(val) => this.selectCountry(val)}
                      />
                      <RegionDropdown
                        className='form-control form-control-md'
                        country='US'
                        countryValueType='short'
                        name='region'
                        // value={region}
                        // onChange={(val) => this.selectRegion(val)}
                      />
                      <br />
                      <label className='form-check-label'>Date of Birth:</label>
                      <input
                        type='date'
                        className='form-control form-control-lg'
                        placeholder='Date of Birth'
                        name='dob'
                        pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
                      />
                      <label className='form-check-label'>Mobile Number:</label>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='+1 (123) 456-7890'
                        name='mobile'
                      />

                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Postal Code'
                        name='postal_code'
                        pattern='[0-9]*'
                      />
                      <center className='mb-4'>
                        <button
                          type='submit'
                          className='btn btn-success btn-purple btn-purple-modified'
                        >
                          submit
                        </button>
                      </center>
                      <p className='text-center bottom-txt'>
                        Already have an account? <a href='/login'>Login</a>
                      </p>
                      <p className='text-center bottom-txt'>
                        Forgot your password? <a href='/forgot'>Reset</a>
                      </p>
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
