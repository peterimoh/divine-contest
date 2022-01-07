import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import {useDispatch} from 'react-redux';
import Footer from '../../components/layout/footer/Footer';
import Breadcumb from '../../components/layout/breadcrumb/Breadcumb';
import Navbar from '../../components/layout/nav/Navbar';
import BeforeFooter from '../../components/layout/footer/BeforeFooter';
import { ContestantCard } from '../../components/contestant/ContestantCard';
import { getContestantAction } from '../../store/action/contestant.action';

const breadCrumbImg =
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFnZWFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';


const Contestant = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    document.title = 'Contestants | TeenGirlsUp';
    $('head').append(
      `<link rel="icon" href="images/logo.png" type="image/icon type">`
    );

    dispatch(getContestantAction());
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Breadcumb
        image={breadCrumbImg}
        title='Contestants'
        path='/'
        present='Contestants'
      />
      <Wrapper>
        <div id='contestant'>
          <div className='container mt-5 mb-5'>
            <ContestantCard />
          </div>
        </div>
      </Wrapper>
      <BeforeFooter />
      <Footer />
    </Fragment>
  );
};

const Wrapper = styled.div`
  #contestant {
    height: 100%;
  }
`;

export default Contestant;
