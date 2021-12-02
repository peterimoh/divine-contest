import React, { Fragment, useEffect } from 'react';
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

  const [registe, setRegiste] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    dob: '',
    mobile: '',
    postal_code: '',
    dob_err: '',
  });
  const [region, setRegion] = React.useState('');
  const [country, setCountry] = React.useState('US');

  const onChange = (e) => {
    setRegiste({ [e.target.name]: e.target.value });
  };

  const selectCountry = (val) => {
    setCountry(val);
  };
  const selectRegion = (val) => {
    setRegion(val);
  };

  //dob validation
  if (registe.dob !== undefined) {
    let bday = registe.dob;
    let parts = bday.split('-');
    console.log(parts);
    let regex = /^\d{4}-\d{2}-\d{2}$/;
    if (regex.test(bday)) {
      var dtDOB = new Date(
        parseInt(parts[0]) + '-' + parseInt(parts[1]) + '-' + parseInt(parts[2])
      );
      console.log(dtDOB);
      var dtCurrent = new Date();
      var iAge = dtCurrent.getFullYear() - dtDOB.getFullYear();
      console.log(iAge);
      if (iAge < 18) {
        console.log(iAge);
        setRegiste({
          dob_err: 'You must be 18 years or older to register',
        });
      }
    }
  }

  console.log(registe.dob_err);

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
            <div className='card register-card'>
              <div className='card-body'>
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
                        onChange={onChange}
                      />
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Last Name'
                        name='last_name'
                        onChange={onChange}
                      />

                      <input
                        type='email'
                        className='form-control form-control-lg'
                        placeholder='Email Address'
                        name='email'
                        onChange={onChange}
                      />
                      <input
                        type='password'
                        className='form-control form-control-lg'
                        placeholder='Password'
                        name='password'
                        onChange={onChange}
                      />

                      <small>
                        <i className='text-warning'>
                          contest is only available for United States
                        </i>
                      </small>
                      <CountryDropdown
                        className='form-control form-control-md'
                        value={country}
                        valueType='short'
                        whitelist={['united states']}
                        showDefaultOption={true}
                        defaultOptionLabel='US'
                        name='country'
                        onChange={(val) => selectCountry(val)}
                      />
                      <RegionDropdown
                        className='form-control form-control-md'
                        country={country}
                        value={region}
                        countryValueType='short'
                        name='region'
                        onChange={(val) => selectRegion(val)}
                      />

                      <br />
                      <label className='form-check-label'>Date of Birth:</label>
                      <small className='text-danger'> {registe.dob_err} </small>
                      <input
                        type='date'
                        className='form-control form-control-lg'
                        placeholder='Date of Birth'
                        name='dob'
                        pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
                        onChange={onChange}
                      />
                      <label className='form-check-label'>Mobile Number:</label>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='+1 (123) 456-7890'
                        name='mobile'
                        onChange={onChange}
                      />

                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Postal Code'
                        name='postal_code'
                        pattern='[0-9]*'
                        onChange={onChange}
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
