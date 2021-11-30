import React from 'react';
import styled from 'styled-components';
import TopNav from './TopNav';
import './style.css'
import StickyNav from './StickyNav';

const Navbar = () => {
  return (
    <Wrapper>
          <TopNav />
          <StickyNav/>
    </Wrapper>
  );
};

const Wrapper = styled.header`

`

export default Navbar;
