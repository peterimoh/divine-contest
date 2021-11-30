import React, {Fragment} from 'react'
import BeforeFooter from "../../components/layout/footer/BeforeFooter"
import Navbar from "../../components/layout/nav/Navbar"
import Footer from "../../components/layout/footer/Footer"
import './home.css'


const Index = () => {
    return (
      <Fragment>
          <Navbar />
        <div id='home'>
          Home Component
        </div>
          <BeforeFooter />
          <Footer />
      </Fragment>
    );
}

export default Index
