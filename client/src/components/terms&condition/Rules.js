import React from 'react';
import styled from 'styled-components';

export const Rules = () => {
  return (
    <Wrapper>
      <div className='rules__title'>
        <h3>Exclusive Rules</h3>
      </div>
      <div className='rules__content'>
        <ul>
          <li>
            All comments will not be deleted, however, if any of the following
            contents are contained violates public order or morals
          </li>
          <li>identify fraud or misleading </li>
          <li>
            personal information leak(Email address, contact number, any other
            privacy)
          </li>
          <li>Discriminating comment and abusive comments </li>
          <li>electronic spamming </li>
          <li>
            act of copyright infringement ,portrait rights and other
            intellectual property rights of third parties.
          </li>
          <li>
            political activities, election activities, religious activities.
          </li>
          <li>commercial act (PR and sales)</li>
          <li>violates criminal law </li>
          <li>inappropriate content, including the obscene representation</li>
          <li>violates honor and trust</li>
          <li>
            any other inappropriate contents judge by <b>TEENGIRLSUP</b>{' '}
            organization.
          </li>
        </ul>
      </div>
      <div className='disclaimer'>
        <div className='disclaimer__title'>
          <h3> DISCLAIMER</h3>
        </div>
        <div className='disclaimer__content'>
          <p>We are not responsible for any damage caused by this website </p>
        </div>
      </div>
      <div className='change'>
        <div className='change__title'>
          <h3>Policy change</h3>
        </div>
        <div className='change__content'>
          Policy can be changed without prior notice.
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #333;
  overflow: hidden;

  .rules__title h3 {
    font-weight: bold;
  }

  .disclaimer__title h3 {
    font-weight: bold;
  }

  .change__title h3 {
    font-weight: bold;
  }
`;
