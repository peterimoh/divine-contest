import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { Slider } from '../../components/home/Slider'
import { useDispatch } from 'react-redux'
import BeforeFooter from "../../components/layout/footer/BeforeFooter"
import Navbar from "../../components/layout/nav/Navbar"
import Footer from "../../components/layout/footer/Footer"
import { MiniAbout } from '../../components/home/MiniAbout'
import { Join } from '../../components/home/Join'
import { Winners } from '../../components/home/Winners'
import {getContestantAction} from '../../store/action/contestant.action'
import { contestAction } from '../../store/action/contest.action'


const Index = () => {

   const dispatch = useDispatch();

   useEffect(() => {
     document.title = 'Home | TeenGirlsUp';
     $('head').append(
       `<link rel="icon" href="images/logo.png" type="image/icon type">`
     );

     dispatch(getContestantAction());
     dispatch(contestAction());
   }, []);
    return (
      <Fragment>
        <Navbar />
        {/* <br /> */}
        <Wrapper>
          <div id='home'>
            <Slider />
            <MiniAbout />
            <Join />
            <Winners/>
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
