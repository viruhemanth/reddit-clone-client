import React, { css } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { above } from '../../helpers';

const Wrapper = styled.div`
  ${above.med`
  `}
  height: 48px;
  width: 100%;
  background-color: white;
  box-shadow: 0px -7px 15px -0.5px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
`;

const LogoName = styled(NavLink)`
  font-size: 21px;
  font-weight: 700;
  margin-left: 170px;
  text-decoration: none;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.7);
`;

const NavButtonWrapper = styled.div`
  position: absolute;
  right: 90px;
  display: flex;
  flex-direction: row;
  height: 48px;
`;

const NavButton = styled(NavLink)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  padding: 0px 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 13px;
  font-family: 'IBM Plex Sans';
  font-weight: 700;
  transition: all 0.1s;
  &:hover {
    /* background-color: rgba(74, 159, 245, 0.2); */
    color: rgba(74, 159, 245, 1);
    border-bottom: 2px solid rgba(74, 159, 245, 1);
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <LogoName to="/">reddit</LogoName>
      <NavButtonWrapper>
        <NavButton to="/login">Log In</NavButton>
        <NavButton to="/signup">sign up</NavButton>
      </NavButtonWrapper>
    </Wrapper>
  );
}

export default Navbar;
