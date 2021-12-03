import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.png';

export const Blockone = () => {
  return (
    <Wrapper>
      <div id='aboutTeens' className='mt-5 mb-5 bg-light p-5'>
        <div className='title'>
          <h2>Who we are</h2>
          <hr />
        </div>
        <div className='row'>
          <div className='col-md-6 col-sm-6 align-self-center'>
            <article className='teens'>
              <p className='1'>
                TEENGIRLSUP is an online photo contest website set up to raise a
                community of teen girls and letting them see the light in their
                heart which signifies beauty and uniqueness.
              </p>
              <br />
              <span>
                At TEENGIRLSUP, your chance of wining the contest is determined
                by you, your team, family and friends who we believe should have
                a similar interest.
              </span>{' '}
            </article>
          </div>
          <div className='col-md-6 col-sm-6 align-self-center'>
            <center>
              {' '}
              <img src={Logo} alt='Teen Girls Up' className='img-fluid logo' />
            </center>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #aboutTeens {
    box-shadow: 3px 7px 24px -2px rgba(0, 0, 0, 0.53) inset;
    -webkit-box-shadow: 3px 7px 24px -2px rgba(0, 0, 0, 0.53) inset;
    -moz-box-shadow: 3px 7px 24px -2px rgba(0, 0, 0, 0.53) inset;
  }
  #aboutTeens .logo {
    height: auto;
    width: 300px;
  }

  #aboutTeens .title {
    font-weight: bold;
    text-transform: capitalize;
  }

  #aboutTeens .title hr {
    border: 1px solid rgb(254, 11, 183);
  }

  #aboutTeens .teens p:first-letter {
    float: left;
    font-size: 45px;
    line-height: 1;
    font-weight: bold;
    margin-right: 9px;
    color: rgb(254, 11, 183);
    font-family: 'Times New Roman', Times, serif;
    text-shadow: #000 0.05em 0.05em;
  }

  #aboutTeens .teens p,
  span {
    color: #4e4444;
  }
`;

// Who we are.
// TEENGIRLSUP is an online photo contest website set up to raise a community of teen girls and letting them see the light in their heart which signifies beauty and uniqueness.
// At TEENGIRLSUP, your chance of wining the contest is determined by you, your team, family and friends who we believe should have a similar interest.

//                Why TeenGirlsUp
// In TEENGIRLSUP, we welcome teen girls from all works of life as our aim is to build a healthy girls community where young girls appreciate and support each other by showing love in our heart and eliminate the world with it beauty.

//               What is your magic ?
// We believe every individual has an inborn gift that sets them apart from others and this gift lies in the uniqueness of individual values.
// We want to ignite this individuals values by putting reality in a pictorial representation and bringing together different consciousness to promote love and beauty.

//                 Vision statement
// To build a girl community where teen girls learn to live life knowing they are limited to nothing but their mindset and such thoughts must be erase.

//                 Mission statement
