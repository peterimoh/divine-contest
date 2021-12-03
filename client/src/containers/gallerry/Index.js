import React from 'react'
import styled from 'styled-components';
import Breadcumb from '../../components/layout/breadcrumb/Breadcumb';
import BeforeFooter from '../../components/layout/footer/BeforeFooter';
import Navbar from '../../components/layout/nav/Navbar';
import Footer from '../../components/layout/footer/Footer';

const Index = () => {
const breadcrumbImg =
  'https://images.unsplash.com/photo-1514195037031-83d60ed3b448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FsbGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

    return (
      <Wrapper>
        <Navbar/>
        <Breadcumb
          image={breadcrumbImg}
          title='Gallery'
          path='/'
          present='Gallery'
        />
        <div id='gallery'>
          Gallery images comes here
            </div>
            <BeforeFooter/>
        <Footer />
      </Wrapper>
    );
}

const Wrapper = styled.div``


export default Index
