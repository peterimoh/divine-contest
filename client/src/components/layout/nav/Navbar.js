import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TopNav from './TopNav';
import './style.css'
import StickyNav from './StickyNav';

const Navbar = () => {

    const loggedIn = useSelector((state) => state.login);
    const {isAuthenticated} = loggedIn
  return (
    <Wrapper>
      <TopNav isLoggedIn={isAuthenticated} />
      <StickyNav isLoggedIn={isAuthenticated} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
 
`;

export default Navbar;
