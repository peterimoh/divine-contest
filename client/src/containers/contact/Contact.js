import React from 'react'
import styled from 'styled-components';
import Breadcumb from '../../components/layout/breadcrumb/Breadcumb';
import BeforeFooter from '../../components/layout/footer/BeforeFooter';
import Navbar from '../../components/layout/nav/Navbar';
import Footer from '../../components/layout/footer/Footer';

export const Contact = () => {

const breadcrumbImg =
  'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';


  return (
    <Wrapper>
      <Navbar />
      <Breadcumb
        image={breadcrumbImg}
        title='Contact Us'
        path='/'
        present='Contact'
      />
      <div id='gallery'>Gallery images comes here</div>
      <BeforeFooter />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;