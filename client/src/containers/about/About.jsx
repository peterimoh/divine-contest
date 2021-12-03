import React from 'react'
import styled from 'styled-components'
import Breadcumb from '../../components/layout/breadcrumb/Breadcumb';
import Navbar from '../../components/layout/nav/Navbar'
import Footer from '../../components/layout/footer/Footer';
import AboutContent from '../../components/about/Content';


const breadcrumbImg =
  'https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWJvdXQlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
const About = () => {
    return (
      <Wrapper>
        <Navbar />
        <Breadcumb
          image={breadcrumbImg}
          title='About Us'
          path='/'
          present='About'
        />
        <div id='about'>
          <AboutContent />
        </div>
        <Footer />
      </Wrapper>
    );
}

const Wrapper = styled.div`

`
export default About
