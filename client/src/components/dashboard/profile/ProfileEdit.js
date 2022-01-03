import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updatePasswordAction } from '../../../store/action/detail.action';

export const ProfileEdit = () => {
  const [entries, setEntries] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });

  const id = useSelector((state) => state.login.user.id);
  const { pswLoading, pswdMessage, isError } = useSelector(
    (state) => state.updatePswd
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEntries({
      ...entries,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePasswordAction(id, entries));
  };

  return (
    <Wrapper className='container mt-3 mb-3'>
      <div className='row'>
        {/* <div className='col-md-6 col-sm-6'> */}
        <div className='card'>
          <div className='card-header'>
            <h5 className='text-secondary'>
              <b>Update Password</b>
            </h5>
          </div>
          <div className='card-body'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                {pswdMessage && (
                  <div
                    className='alert alert-success alert-dismissible fade show'
                    role='alert'
                  >
                    {pswdMessage.msg}
                    <button
                      type='button'
                      className='close'
                      data-dismiss='alert'
                      aria-label='Close'
                      style={{ float: 'right' }}
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                )}
                {isError && (
                  <div
                    className='alert alert-danger alert-dismissible fade show'
                    role='alert'
                  >
                    {isError.error}
                    <button
                      type='button'
                      className='close'
                      data-dismiss='alert'
                      aria-label='Close'
                      style={{ float: 'right' }}
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                )}
                <label htmlFor='Password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  name='password'
                  required
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='newPassword'>New Password</label>
                <input
                  type='password'
                  name='newPassword'
                  className='form-control'
                  placeholder='Password'
                  required
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                  type='password'
                  name='confirmPassword'
                  className='form-control'
                  placeholder='Password'
                  required
                  onChange={handleChange}
                />
              </div>

              <br />
              <button type='submit' className='btn btn-primary w-100'>
                {pswLoading ? (
                  <div class='d-flex justify-content-center'>
                    <div class='spinner-border' role='status'>
                      <span class='sr-only'></span>
                    </div>
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
