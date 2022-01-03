import React from 'react';
import styled from 'styled-components';

export const Operation = () => {
  return (
    <Wrapper>
      <div className='operation__title'>
        <h3>Operation</h3>
      </div>
      <div className='operation__content'>
        <p>
          This website is to create, direct online photo contest for teen girls.
          Exchange information and post news updates about <b>TEENGIRLSUP</b>{' '}
          photo contest and progresses of contestants (TGU). We may not be able
          to reply all comments and emails.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    color: #333;
    overflow: hidden;
  
 .operation__title h3 {
    font-weight: bold;
  }
`;


