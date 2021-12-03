import React, { Fragment } from 'react'
import {Slider} from '../../components/home/Slider'
import BeforeFooter from "../../components/layout/footer/BeforeFooter"
import Navbar from "../../components/layout/nav/Navbar"
import Footer from "../../components/layout/footer/Footer"
import './home.css'
import { MiniAbout } from '../../components/home/MiniAbout'


const Index = () => {
    return (
      <Fragment>
          <Navbar />
        <div id='home'>
          <Slider />
          <MiniAbout/>
        </div>
          <BeforeFooter />
          <Footer />
      </Fragment>
    );
}

export default Index
