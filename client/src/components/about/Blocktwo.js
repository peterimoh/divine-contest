import React from 'react';
import styled from 'styled-components';

export const Blocktwo = () => {
  return (
    <Wrapper>
      <div id='why' className='mt-5 mb-5 bg-light p-5'>
        <div className='container'>
          <h2 className='title mb-3'>Why TeenGirlsUp ?</h2>
          <p>
            In TEENGIRLSUP, we welcome teen girls from all works of life as our
            aim is to build a healthy girls community where young girls
            appreciate and support each other by showing love in our heart and
            eliminate the world with it beauty.
          </p>
        </div>
      </div>

      <div id='what' className='mt-5 mb-5 bg-light p-5'>
        <div className='container'>
          <h2 className='title mb-3'> What is your magic ?</h2>
          <p>
            We believe every individual has an inborn gift that sets them apart
            from others and this gift lies in the uniqueness of individual
            values.
          </p>
          <span>
            We want to ignite this individuals values by putting reality in a
            pictorial representation and bringing together different
            consciousness to promote love and beauty.
          </span>
        </div>
      </div>
      <div id='vision' className='mt-5 mb-5 bg-light p-5'>
        <div className='container'>
          <h2 className='title mb-3'> Vision statement</h2>
          <p>
            To build a girl community where teen girls learn to live life
            knowing they are limited to nothing but their mindset and such
            thoughts must be erase.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #why,
  #what, #vision {
    box-shadow: 3px 7px 24px -2px rgba(0, 0, 0, 0.53) inset;
    -webkit-box-shadow: 3px 7px 24px -2px rgba(0, 0, 0, 0.53) inset;
    -moz-box-shadow: 3px 7px 24px -2px rgba(0, 0, 0, 0.53) inset;
  }
 

  #why,
  .title {
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
  }

  #why,
  #what p,
  span {
    text-align: justify;
    font-weight: normal;
    color: #4e4444;
  }

  #why p:first-letter {
    float: left;
    font-size: 45px;
    line-height: 1;
    font-weight: bold;
    margin-right: 0px;
    color: rgb(254, 11, 183);
    font-family: 'Times New Roman', Times, serif;
    text-shadow: #000 0.05em 0.05em;
  }
`;
