import React, { Fragment } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import Breadcumb from '../../components/layout/breadcrumb/Breadcumb';
import BeforeFooter from '../../components/layout/footer/BeforeFooter';
import Footer from '../../components/layout/footer/Footer';
import Navbar from '../../components/layout/nav/Navbar';
import { Information } from '../../components/terms&condition/Information';
import { Operation } from '../../components/terms&condition/Operation';
import { Privacy } from '../../components/terms&condition/Privacy';
import { useEffect } from 'react';
import { Registration } from '../../components/terms&condition/Registration';
import { Rules } from '../../components/terms&condition/Rules';

const breadcrumbImg =
  'https://images.unsplash.com/photo-1586856635275-af01918579ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVybXMlMjBvZiUyMHNlcnZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
const Terms_and_Conditon = () => {
  useEffect(() => {
    document.title = 'Terms and Condition | TeenGirlsUp';
    $('head').append(
      `<link rel="icon" href="images/logo.png" type="image/icon type">`
    );
  }, []);
  return (
    <Fragment>
      <Navbar />
      <br />
      <Breadcumb
        image={breadcrumbImg}
        title='Terms & Conditions'
        path='/'
        present='Terms & Conditions'
      />
      <TOCWrapper>
        <div id='toc'>
          <div className='container mt-5 mb-5'>
            <Privacy />
            <Operation />
            <Information />
            <Registration />
            <Rules />
          </div>
        </div>
      </TOCWrapper>
      <BeforeFooter />
      <Footer />
    </Fragment>
  );
};

const TOCWrapper = styled.div`
  #toc {
    line-height: 1.5;
    color: #333;
    overflow: hidden;
    position: relative;
    z-index: 1;
    height: 100%;
  }
`;

export default Terms_and_Conditon;
