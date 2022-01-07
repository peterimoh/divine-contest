import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useSticky from './UseSticky';
import TopNav from './TopNav';
import './style.css'
import StickyNav from './StickyNav';

const Navbar = () => {
  const { isSticky, element } = useSticky();

    const loggedIn = useSelector((state) => state.login);
    const {isAuthenticated} = loggedIn
  return (
    <Wrapper>
      {/* <TopNav isLoggedIn={isAuthenticated} sticky={isSticky} element={element} /> */}
      <StickyNav isLoggedIn={isAuthenticated} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .modal-backdrop.show {
    z-index: 0 !important;
  }
`;

export default Navbar;
