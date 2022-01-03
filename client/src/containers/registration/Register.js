import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useSelector, useDispatch } from 'react-redux';
import Breadcumb from '../../components/layout/breadcrumb/Breadcumb';
import Footer from '../../components/layout/footer/Footer';
import Navbar from '../../components/layout/nav/Navbar';
import { registerUser } from '../../store/action/auth.action';
import './signup.css';

export const Register = (props) => {
  const breadcrumbImg = `https://images.unsplash.com/photo-1517817748493-49ec54a32465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVnaXN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`;

  const [first_name, setFirst_Name] = React.useState('');
  const [last_name, setLast_Name] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [postal_code, setPostal_Code] = React.useState('');
  const [dob_err, setDob_Err] = React.useState('');
  const [region, setRegion] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [country, setCountry] = React.useState('US');

  const registerState = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, data, error } = registerState;

  const selectCountry = (val) => {
    setCountry(val);
  };
  const selectRegion = (val) => {
    setRegion(val);
  };

  const userObj = {
    first_name,
    last_name,
    email,
    password,
    dob,
    mobile,
    postal_code,
    region,
    street,
    country,
  };

  useEffect(() => {
    //dob validation
    if (dob !== undefined) {
      let bday = dob;
      let parts = bday.split('-');
      console.log(parts);
      let regex = /^\d{4}-\d{2}-\d{2}$/;
      if (regex.test(bday)) {
        var dtDOB = new Date(
          parseInt(parts[0]) +
            '-' +
            parseInt(parts[1]) +
            '-' +
            parseInt(parts[2])
        );
        console.log(dtDOB);
        var dtCurrent = new Date();
        var iAge = dtCurrent.getFullYear() - dtDOB.getFullYear();
        console.log(iAge);
        if (iAge < 18) {
          console.log(iAge);
          setDob_Err('You must be 18 years or older to register');
        } else {
          setDob_Err('');
        }
      }
    }
  }, [dob]);

  const handleSubmit = (e) => {
    if (document.getElementById('agree').checked) {
       e.preventDefault();
       dispatch(registerUser(userObj));
      return true;
    } else {
      alert(
        'Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'
      );
       e.preventDefault();
       dispatch(registerUser(userObj));
      return false;
    }
    // e.preventDefault();
    // dispatch(registerUser(userObj));
  };

  if (data && data.msg === 'OK') {
    navigate('/login');
  }
console.log(props)

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
                  {error && (
                    <small className='text-danger'>{error.error}</small>
                  )}
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='First Name'
                        name='first_name'
                        onChange={(e) => setFirst_Name(e.target.value)}
                      />
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Last Name'
                        name='last_name'
                        onChange={(e) => setLast_Name(e.target.value)}
                      />
                      <input
                        type='email'
                        className='form-control form-control-lg'
                        placeholder='Email Address'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type='password'
                        className='form-control form-control-lg'
                        placeholder='Password'
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
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
                      <small className='text-danger'> {dob_err} </small>
                      <input
                        type='date'
                        className='form-control form-control-lg'
                        placeholder='Date of Birth'
                        name='dob'
                        pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
                        onChange={(e) => setDob(e.target.value)}
                      />
                      <label className='form-check-label'>Mobile Number:</label>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='+1 (123) 456-7890'
                        name='mobile'
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Postal Code'
                        name='postal_code'
                        pattern='[0-9]*'
                        onChange={(e) => setPostal_Code(e.target.value)}
                      />
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Street'
                        name='street'
                        onChange={(e) => setStreet(e.target.value)}
                      />
                      <input
                        type='checkbox'
                        name='checkbox'
                        value='check'
                        id='agree'
                      />{' '}
                      I have read and agree to the{' '}
                      <Link to='/terms_&_conditions'>
                        Terms and Conditions and Privacy Policy
                      </Link>
                      {dob_err !== '' ? (
                        <center className='mb-4'>
                          <button
                            type='submit'
                            className='btn btn-success btn-purple btn-purple-modified btn-disabled'
                            disabled
                          >
                            submit
                          </button>
                        </center>
                      ) : (
                        <center className='mb-4'>
                          <button
                            type='submit'
                            className='btn btn-success btn-purple btn-purple-modified'
                          >
                            submit
                          </button>
                        </center>
                      )}
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
