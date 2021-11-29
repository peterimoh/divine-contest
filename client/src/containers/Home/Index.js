import React from 'react'
import BeforeFooter from "../../components/layout/footer/BeforeFooter"
import Navbar from "../../components/layout/nav/Navbar"
import Footer from "../../components/layout/footer/Footer"


const Index = () => {
    return (
       <div id='home'>
            <Navbar />
            
            Home Component
            <BeforeFooter />
            <Footer/>
        </div>
    )
}

export default Index
