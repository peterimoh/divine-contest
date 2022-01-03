import React from 'react';
import styled from 'styled-components';

export const Registration = () => {
  return (
    <Wrapper>
      <div className='registration__title'>
        <h3>Registration and Payment</h3>
      </div>
      <div className='registration__content'>
        <p>
          Before using certain portion of this sites by registration method
          through payment, you may be required to complete an online
          registration form, during registration you will be asked to provide to
          us certain personal information, including but not limited to your
          name, phone number, email address,gender and credit/debit card
          information. In addition your state of residence and country so as to
          enable us comply with applicable laws and regulations. These kinds of
          information are used for billing purposes. To fulfill your order of
          registration, to communicate with you about your order and the sites
          and for internal marketing purposes.
        </p>
        <p>
          If we encounter a problem when processing your order of registration,
          your personal information may be used to contact you.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #333;
  overflow: hidden;

  .registration__title h3 {
    font-weight: bold;
  }
`;
