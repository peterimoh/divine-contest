import React from 'react';
import styled from 'styled-components';
import msgIcon from '../../images/symbol-01.png';
import './utils.css';

export const ContactComponent = () => {
  return (
    <ContactWrapper>
      <div className='container-contact100'>
        <iframe
          title='google_map'
          className='contact100-map'
          id='google_map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55565170.29301636!2d-132.08532758867793!3d31.786060306224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sng!4v1640950813301!5m2!1sen!2sng'
          allowfullscreen='true'
          loading='lazy'
        ></iframe>

        <div className='wrap-contact100 '>
          <span className='contact100-form-symbol'>
            <img src={msgIcon} alt='SYMBOL-MAIL' />
          </span>

          <form className='contact100-form validate-form flex-sb flex-w'>
            <span className='contact100-form-title'>Drop Us A Message</span>

            <div
              className='wrap-input100 rs1 validate-input'
              data-validate='Name is required'
            >
              <input
                className='input100'
                type='text'
                name='name'
                placeholder='Name'
              />
              <span className='focus-input100'></span>
            </div>

            <div
              className='wrap-input100 rs1 validate-input'
              data-validate='Email is required: e@a.z'
            >
              <input
                className='input100'
                type='text'
                name='email'
                placeholder='Email Address'
              />
              <span className='focus-input100'></span>
            </div>

            <div
              className='wrap-input100 validate-input'
              data-validate='Message is required'
            >
              <textarea
                className='input100'
                name='message'
                placeholder='Write Us A Message'
              ></textarea>
              <span className='focus-input100'></span>
            </div>

            <div className='container-contact100-form-btn'>
              <button className='contact100-form-btn'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  p {
    font-family: OpenSans-Regular;
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
  }

  ul,
  li {
    margin: 0px;
    list-style-type: none;
  }

  /*---------------------------------------------*/
  input {
    outline: none;
    border: none;
  }

  textarea {
    outline: none;
    border: none;
  }

  textarea:focus,
  input:focus {
    border-color: transparent !important;
  }

  input::-webkit-input-placeholder {
    color: #555555;
  }
  input:-moz-placeholder {
    color: #555555;
  }
  input::-moz-placeholder {
    color: #555555;
  }
  input:-ms-input-placeholder {
    color: #555555;
  }

  textarea::-webkit-input-placeholder {
    color: #555555;
  }
  textarea:-moz-placeholder {
    color: #555555;
  }
  textarea::-moz-placeholder {
    color: #555555;
  }
  textarea:-ms-input-placeholder {
    color: #555555;
  }

  label {
    display: block;
    margin: 0;
  }

  /*---------------------------------------------*/
  button {
    outline: none !important;
    border: none;
    background: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  iframe {
    border: none !important;
  }

  /*//////////////////////////////////////////////////////////////////
[ Contact ]*/

  .container-contact100 {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: transparent;
    position: relative;
    z-index: 1;
  }

  .container-contact100::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(173, 173, 173, 0.4);
    pointer-events: none;
  }

  .contact100-map {
    position: absolute;
    z-index: -2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .wrap-contact100 {
    width: 800px;
    background: #fff;
    border-radius: 2px;
    position: relative;
    margin-top: 55px;
    padding: 92px 70px 88px 70px;

    box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  }

  .contact100-form-symbol {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100px;
    height: 100px;
    border: 1px solid #e7e7e7;
    border-radius: 50%;
    background: #fff;
    top: -55px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .contact100-form-symbol img {
    max-width: 49px;
  }

  /*==================================================================
[ Form ]*/

  .contact100-form {
    width: 100%;
  }

  .contact100-form-title {
    width: 100%;
    display: block;
    font-family: OpenSans-Regular;
    font-size: 30px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 43px;
  }

  /*------------------------------------------------------------------
[ Input ]*/

  .wrap-input100 {
    width: 100%;
    position: relative;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    margin-bottom: 30px;
  }

  .wrap-input100.rs1 {
    width: calc((100% - 20px) / 2);
  }

  /*---------------------------------------------*/
  .input100 {
    display: block;
    width: 100%;
    background: transparent;
    font-family: OpenSans-Regular;
    color: #333333;
    line-height: 1.2;
  }

  input.input100 {
    height: 60px;
    padding: 0 20px 0 25px;
    font-size: 20px;
  }

  textarea.input100 {
    min-height: 199px;
    padding: 25px 20px 15px 25px;
    font-size: 15px;
  }

  /*------------------------------------------------------------------
[ Focus Input ]*/

  .focus-input100 {
    position: absolute;
    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    pointer-events: none;
    border: 1px solid #534392;
    border-radius: 2px;

    visibility: hidden;
    opacity: 0;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;

    -webkit-transform: scaleX(1.1) scaleY(1.3);
    -moz-transform: scaleX(1.1) scaleY(1.3);
    -ms-transform: scaleX(1.1) scaleY(1.3);
    -o-transform: scaleX(1.1) scaleY(1.3);
    transform: scaleX(1.1) scaleY(1.3);
  }

  .input100:focus + .focus-input100 {
    visibility: visible;
    opacity: 1;

    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  .eff-focus-selection {
    visibility: visible;
    opacity: 1;

    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  /*------------------------------------------------------------------
[ Button ]*/
  .container-contact100-form-btn {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-top: -10px;
  }

  .contact100-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    min-width: 100px;
    height: 50px;
    background-color: #29224c;
    border-radius: 2px;

    font-family: OpenSans-Regular;
    font-size: 18px;
    color: #fff;
    line-height: 1.2;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .contact100-form-btn:hover {
    background-color: #333333;
  }

  /*------------------------------------------------------------------
[ Responsive ]*/

  @media (max-width: 768px) {
    .wrap-input100.rs1 {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .wrap-contact100 {
      padding: 92px 15px 88px 15px;
    }
  }

  /*------------------------------------------------------------------
[ Alert validate ]*/

  .validate-input {
    position: relative;
  }

  .alert-validate::before {
    content: attr(data-validate);
    position: absolute;
    max-width: 70%;
    background-color: #fff;
    border: 1px solid #c80000;
    border-radius: 2px;
    padding: 4px 25px 5px 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 12px;
    pointer-events: none;

    font-family: OpenSans-Regular;
    color: #c80000;
    font-size: 14px;
    line-height: 1.4;
    text-align: left;

    visibility: hidden;
    opacity: 0;

    -webkit-transition: opacity 0.4s;
    -o-transition: opacity 0.4s;
    -moz-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  .alert-validate::after {
    content: '\f12a';
    font-family: FontAwesome;
    display: block;
    position: absolute;
    color: #c80000;
    font-size: 18px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 18px;
  }

  .alert-validate:hover:before {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 992px) {
    .alert-validate::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;
