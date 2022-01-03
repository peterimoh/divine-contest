import React from 'react'
import styled from 'styled-components'

export const Information = () => {
    return (
      <Wrapper>
        <div className='information__title'>
          <h3>Information Collection</h3>
        </div>
        <div className='information__content'>
          <p>
            We collect information from you in several different ways on this
            site.
          </p>
        </div>
      </Wrapper>
    );
}


const Wrapper = styled.div`
  color: #333;
  overflow: hidden;

  .information__title h3 {
    font-weight: bold;
  }
`;
