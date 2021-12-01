import React, {Fragment} from 'react'
import Breadcumb from '../../components/layout/breadcrumb/Breadcumb'
import Footer from '../../components/layout/footer/Footer'
import Navbar from '../../components/layout/nav/Navbar'

export const Register = () => {

const breadcrumbImg = `https://images.unsplash.com/photo-1517817748493-49ec54a32465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVnaXN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`;

    return (
      <Fragment>
        <Navbar />
        <Breadcumb
          image={breadcrumbImg}
          title='Registration'
          path='/'
          present='Registration'
        />
        <Footer />
      </Fragment>
    );
}
