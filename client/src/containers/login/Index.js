import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import Breadcumb from '../../components/layout/breadcrumb/Breadcumb';
import BeforeFooter from '../../components/layout/footer/BeforeFooter';
import Footer from '../../components/layout/footer/Footer';
import Navbar from '../../components/layout/nav/Navbar';
import { loginUser } from '../../store/action/auth.action';
import './login.css';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user, error } = login;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  console.log(props.history);

  const breadcrumbImg =
    'https://images.unsplash.com/photo-1638208561774-6e02a8e17cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';

  useEffect(() => {
    if (isAuthenticated) {
      // navigate('/dashboard');
     window.location.href = '/dashboard';
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Breadcumb image={breadcrumbImg} title='Login' path='/' present='Login' />
      <div id='login'>
        <div className='container'>
          <div className='login-form'>
            <center>
              {' '}
              <div className='card login-card'>
                <div className='card-body'>
                  <h5 className='card-title'>Login</h5>
                  <br />
                  {/* <hr className='line' /> */}
                  <div className='loginForm'>
                    {error && (
                      <small className='text-danger'>{error.error}</small>
                    )}
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className='form-group'>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='Enter e-mail'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <input
                          type='password'
                          className='form-control'
                          placeholder='Enter password'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <button
                          className='btn btn-purple btn-purple-modified'
                          type='submit'
                        >
                          Submit
                        </button>
                        <br />
                        <br />
                        <Link to='/reset-password' className='m-4 text-left'>Forget Password</Link>
                      </div>
                        <p className='m-4 text-left'>Not registered? <span><Link to='/register'>Sign Up</Link></span></p>
                    </form>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* <BeforeFooter/> */}
      <Footer />
    </React.Fragment>
  );
};
