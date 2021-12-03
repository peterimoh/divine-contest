import React, { Fragment } from 'react'
import styled from 'styled-components'
import {Slider} from '../../components/home/Slider'
import BeforeFooter from "../../components/layout/footer/BeforeFooter"
import Navbar from "../../components/layout/nav/Navbar"
import Footer from "../../components/layout/footer/Footer"
import { MiniAbout } from '../../components/home/MiniAbout'
import { Join } from '../../components/home/Join'


const Index = () => {
    return (
      <Fragment>
        <Navbar />
        <Wrapper>
          <div id='home'>
            <Slider />
            <MiniAbout />
            <Join />
          </div>
        </Wrapper>
        <BeforeFooter />
        <Footer />
      </Fragment>
    );
}

const Wrapper = styled.div`
  #home {
    height: 100%;
  }
`;

export default Index
