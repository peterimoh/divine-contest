import React, { useState } from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updatePaypalAction } from '../../../store/action/detail.action';

export const UpdatePayment = () => {
  const dispatch = useDispatch();
  let usrId = useSelector((state) => state.login.user.id);
  const { isLoading, paypalSuccess, isError } = useSelector(
    (state) => state.paypal
  );
  const [paypalEmail, setPaypalEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePaypalAction(usrId, { paypal_email: paypalEmail }));
  };

  return (
    <Wrapper className='container-fluid mt-3 mb-3'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='text-secondary'>
            <b>Update Payment Details</b>
          </h5>
        </div>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              {paypalSuccess && (
                <div
                  className='alert alert-success alert-dismissible fade show'
                  role='alert'
                >
                  {paypalSuccess.msg}
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
              <label htmlFor='paypalEmail'>Paypal Email Address</label>
              <input
                type='email'
                className='form-control'
                name='paypal_email'
                placeholder='Enter Paypal E-mail'
                onChange={(e) => setPaypalEmail(e.target.value)}
                required
              />
            </div>
            <br />
            <button
              type='submit'
              className='btn btn-primary d-flex w-100 justify-content-center'
            >
              {isLoading ? (
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
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hide {
    display: none;
  }
`;
