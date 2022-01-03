import React from 'react';
import styled from 'styled-components';

export const Privacy = () => {
  return (
    <PrivacyWrapper>
      <div id='privacy'>
        <div className='privacy-title'>
          <h3>Privacy Policy</h3>
        </div>
        {/* <br /> */}
        <div className='privacy-content'>
          <p>
            We are <b>TEENGIRLSUP</b>.
          </p>
          <p>
            Welcome and please take a moment to read our community guidelines.
          </p>
          <p>
            All defined terms and privacy policy below are stated clearly to
            completely explain how information about you is collected ,used
            ,disclosed by your access or use of this site or otherwise as a
            result of your interaction with us. By visiting this website
            directly or through another site, you accept the terms and
            conditions of this policy. This policy implies to this website. We
            are not responsible for the content or privacy policies on any other
            website not operated by us to which this site links or that links to
            this site.
          </p>
          <p>
            Our services are only offered to teen girls within the age bracket
            of 13 and 19 years of age, not below 13 years and not above 19
            years. TeenGirlsUp will not be responsible for any false information
            registered by any contestant as it is clearly stated here that our
            services are rendered to girls with the age bracket of 13-19 years
            of age. <strong>Not below 13 and not above 19.</strong> We
            completely identify our online photo contestants in this site{' '}
            <strong>TEENGIRLSUP</strong> as females regardless of her original
            gender profile from birth
          </p>
          <p>
            As an organization, we are entitled to offer to you the best service
            with ease. Without the fear of discrimination of any kind.
          </p>
          <p>
            Our services is and contest are been set for a given duration of
            time which contestants must adhere to unless otherwise We are only
            working within the borders of the United States of America at this
            time but not limited to other countries in due time. We presently
            only welcome registration of contestants in the US.
          </p>
        </div>
      </div>
    </PrivacyWrapper>
  );
};

const PrivacyWrapper = styled.div`
  #privacy {
    color: #333;
    overflow: hidden;
  }
  #privacy .privacy-title h3 {
    font-weight: bold;
  }
`;
